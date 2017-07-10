import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';

const appRoutes: Routes = [
                    {
                      path: '',
                      component: WelcomeComponent
                    },
                    {
                      path: 'search/:search',
                      component: SearchComponent
                    },
                    {
                      path: 'advert/:title',
                      component: AdvertDetailsComponent
                    }
                        ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
