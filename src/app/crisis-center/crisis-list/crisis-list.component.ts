import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private service: CrisisService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.router);
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );
  }

  onCrisisClick(crisisId: number) {
    // this.router.navigate([`/crisis-center/${crisisId}`]);
    // this.router.navigate([`${crisisId}`], { relativeTo: this.route });
    this.router.navigateByUrl(`/crisis-center/${crisisId}`)
  }
}
