export default class StackDetailController {

  constructor($routeParams, $rootScope, Technology) {
    this.stack = [];
    this.$rootScope = $rootScope;
    this.Technology = Technology;
    this.stackName = $routeParams.stackName;
    this.getStack($routeParams.stackName);
  }

  getStack(stackName) {
    if (this.$rootScope.technologies) {
      this.stack = this.$rootScope.technologies.filter((item) => item.type === stackName);
    } else {
      this.$rootScope.technologies = this.Technology.query((technologies) => {
        this.stack = technologies.filter((item) => item.type === stackName);
      });
    }
  }

  showTechnologyDetail(technologyId) {
    this.selectedTechnology = this.stack.find((technology) => technology.id === technologyId);
  }

  hideTechnologyDetail() {
    this.selectedTechnology = null;
  }

}
