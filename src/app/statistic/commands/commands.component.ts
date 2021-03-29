import {Component, OnInit} from '@angular/core';
import {StatisticService} from '../../services/statistic.service';
import {Stats} from '../../model/stats';
import {PickerController} from '@ionic/angular';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
})
export class CommandsComponent implements OnInit {

  commands: Stats[] = [];
  direction = 0;

  readonly dir = new Map([
    ['Ascending', 0],
    ['Descending', 1]
  ]);

  constructor(private statisticService: StatisticService, private picker: PickerController) { }

  ngOnInit() {}

  ionViewWillEnter(): void {
    this.getAllCommandsStats();
  }

  getAllCommandsStats(): void {
    this.statisticService.findAllCommands().subscribe(data => {
      this.commands = this.direction === 0 ? data : data.reverse();
    });
  }


  doRefresh($event: any) {
    this.getAllCommandsStats();
    setTimeout(() => {
      $event.target.complete();
    }, 1000);
  }

  async showOptions() {
    const pickerElement = await this.picker.create({
      columns: this.getColumns(),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            if (this.direction !== value.col1.value) {
              this.direction = value.col1.value;
              this.getAllCommandsStats();
            }
          }
        }
      ]
    });
    await pickerElement.present();
  }

  private getColumns() {
    return [{
      name: `col1`,
      options: this.getColumnOptions()
    }];
  }

  private getColumnOptions() {
    const options = [];
    for (const temp of this.dir.keys()) {
      options.push({
        text: temp,
        value: this.dir.get(temp)
      });
    }
    return options;
  }

}
