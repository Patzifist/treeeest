import { NgModule } from '@angular/core';

import { TreeeestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TreeeestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TreeeestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TreeeestSharedCommonModule {}
