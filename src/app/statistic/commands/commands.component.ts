import {Component, OnInit} from '@angular/core';
import {StatisticService} from '../../services/statistic.service';
import {Stats} from '../../model/stats';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
})
export class CommandsComponent implements OnInit {

  statistic: Stats[];

  constructor(private statisticService: StatisticService) { }

  ngOnInit() {}

  ionViewWillEnter(): void {
    this.statisticService.findAll().subscribe(data => {
      this.statistic = data.reverse();
      console.log(this.statistic);
    });
  }


}
