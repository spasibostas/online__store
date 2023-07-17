import React, { useRef, useState } from 'react'
import * as qs from 'qs'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import List from './../../components/List/List';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import FilterCategories from '../../components/FilterCategories/FilterCategories';
import FilterPrice from '../../components/FilterPrice/FilterPrice';
import FilterSort from '../../components/FilterSort/FilterSort';
import './Products.scss'

const Products = () => {

  const MIN = 0;
  const MAX = 200;

  const catId = parseInt(useParams().id)
  const [sort, setSort] = useState('asc');
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [values, setValues] = useState([MIN, MAX])
  const [currentPage, setCurrentPage] = useState(1);
  const [changeThrottleHandle, setChangeThrottleHandle] = useState(false);

  const throttleInProgress = useRef();

  const {loading} = useFetch()

  const paginate = (pageNumber) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    setCurrentPage(pageNumber)
  }

  const { subCategories } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  )

  const query = qs.stringify({
    populate: '*',
    filters: {
      categories: {
        id: `${catId}`,
      },
      sub_categories: {
        id: {
          $eq: selectedSubCats
        },
      },
      price: {
        $gt: values[0],
        $lte: values[1]
      },
    },
    sort: `price:${sort}`,
    pagination: {
      page: `${currentPage}`,
      pageSize: 6,
    } 
  }, 
  {
  encodeValuesOnly: true,
});

  const { data, totalProducts, productsPerPage } = useFetch(
    `/products?${query}`
  );

  const handleChange = (e) => {
    handleThrottleChange();
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked 
      ? 
      [...selectedSubCats, value] 
      : selectedSubCats.filter((item) => item !== value))
      setCurrentPage(1)
  }

  const handleThrottleChange = () => {

    if (throttleInProgress.current) { return; }
    throttleInProgress.current = true;

    setTimeout(() => {
      setChangeThrottleHandle((prevState) => {
        return !prevState;
      });
      throttleInProgress.current = false;
    }, 500);

    setChangeThrottleHandle((prevState) => {
      return !prevState;
  });
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="products" id="products">
          <div className="left">
            <FilterCategories subCategories={subCategories} handleChange={handleChange}/>
            <FilterPrice values={values} MIN={MIN} MAX={MAX} setValues={setValues} handleThrottleChange={handleThrottleChange}/>
            <FilterSort setSort={setSort} handleThrottleChange={handleThrottleChange} />
          </div>
          <div className="right">
            <List
              data={data}
              changeThrottleHandle={changeThrottleHandle}
              paginate={paginate}
              currentPage={currentPage}
              catId={catId}
              minPrice={values[0]}
              maxPrice={values[1]}
              sort={sort}
              subCats={selectedSubCats}
            />
            {data?.length < 1 ? null : (
              <Pagination
                productsPerPage={productsPerPage}
                paginate={paginate}
                totalProducts={totalProducts}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Products;