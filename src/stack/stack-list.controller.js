export default class StackListController {
  constructor($rootScope, Technology) {
    this.$rootScope = $rootScope;
    this.Technology = Technology;
    this.getTechnologies();
  }

  getTechnologies() {
    this.$rootScope.technologies = this.Technology.query((technologies) => {
      this.applicationStack = technologies.filter((item) => item.type === 'application');
      this.testStack = technologies.filter((item) => item.type === 'test');
      this.buildStack = technologies.filter((item) => item.type === 'build');
    }, (resp) => {
      console.log(`Handle error retrieving technologies.`);
      console.log(`response: ${JSON.stringify(resp, null, 2)}`);
    });
  }

}
