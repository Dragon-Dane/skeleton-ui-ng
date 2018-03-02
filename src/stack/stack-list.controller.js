export default class StackListController {
  constructor(Technology) {
    this.Technology = Technology;
    this.getTechnologies();
  }

  getTechnologies() {
    this.technologies = this.Technology.query((technologies) => {
      this.applicationStack = technologies.filter((item) => item.type === 'application');
      this.testStack = technologies.filter((item) => item.type === 'test');
      this.buildStack = technologies.filter((item) => item.type === 'build');
    });
  }

}
