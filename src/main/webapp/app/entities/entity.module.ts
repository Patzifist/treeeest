import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#TreeeestRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#TreeeestCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#TreeeestLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#TreeeestDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#TreeeestTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#TreeeestEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#TreeeestJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#TreeeestJobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreeeestEntityModule {}
