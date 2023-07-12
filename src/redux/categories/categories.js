const STATUS = 'categories/status';

const initialState = {
  status: [],
};

export const categoriesStatus = () => ({
  type: STATUS,
});

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case (STATUS):
      return 'Under Construction';
    default:
      return state;
  }
};

export default CategoriesReducer;
