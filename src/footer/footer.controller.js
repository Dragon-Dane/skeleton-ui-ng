export default class FooterController {
  constructor($interval) {
    this.$interval = $interval;
    this.projectName = 'Angular 1.x Starter Project';

    this.currentDate = new Date();
    this.currentDateInterval = $interval(() => {
      this.currentDate = new Date();
    }, 5000);
  }

  $onDestroy() {
    console.log(' destroying ApplicationController scope');
    if (this.currentDateInterval) {
      console.log('  cancelling currentDateInterval');
      this.$interval.cancel(this.currentDateInterval);
    }
  }

}
