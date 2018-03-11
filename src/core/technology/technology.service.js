export default class TechnologyService {

  constructor($resource) {
    this.$resource = $resource('/assets/data/technologies/:technologyId.json', {}, {
      query: {
        method: 'GET',
        params: {
          technologyId: 'technologies'
        },
        isArray: true
      }
    });
  }

  query(successFn, errorFn) {
    return this.$resource.query(successFn, errorFn);
  }

}
