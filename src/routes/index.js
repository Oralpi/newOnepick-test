import { createRouter, createWebHistory } from 'vue-router';
import AccommodationList from '@/components/accommodation-management/AccommodationList';
import AccommodationInformation1 from '@/components/modal/accommodationlist/AccommodationInformation1';
import AccommodationInformation2 from '@/components/modal/accommodationlist/AccommodationInformation2';
import GuidePhrase from '@/components/modal/accommodationlist/GuidePhrase';
import GalleryVue from '@/components/modal/accommodationlist/GalleryVue';
import AmenitiesVue1 from '@/components/modal/accommodationlist/AmenitiesVue1';
import RoomType from '@/components/accommodation-management/RoomType';
import ExplanationVue from '@/components/modal/roomtype/ExplanationVue';
import ImageManagement from '@/components/modal/roomtype/ImageManagement';
import MerchandiseSale from '@/components/accommodation-management/MerchandiseSale';
import ProductName from '@/components/modal/merchandisesale/ProductName';
import ViewVue from '@/components/modal/merchandisesale/ViewVue';
import AdministrativeFunction from '@/components/modal/merchandisesale/AdministrativeFunction';
import RefundRegulation from '@/components/modal/merchandisesale/RefundRegulation';
import AmenitiesVue2 from '@/components/modal/merchandisesale/AmenitiesVue2';
import BatchService from '@/components/accommodation-management/BatchService';

const routes = [
  {
    path: '/',
    component: AccommodationList,
    children: [
      {
        path: '/accommodation-information1',
        name: 'AccommodationInformation1',
        component: AccommodationInformation1
      },
      {
        path: '/accommodation-information2',
        name: 'AccommodationInformation2',
        component: AccommodationInformation2
      },
      {
        path: '/guide-phrase',
        name: 'GuidePhrase',
        component: GuidePhrase
      },
      {
        path: '/gallery-vue',
        name: 'GalleryVue',
        component: GalleryVue
      },
      {
        path: '/amenities-vue1',
        name: 'AmenitiesVue1',
        component: AmenitiesVue1
      }
    ]
  },
  {
    path: '/room-type',
    component: RoomType,
    children: [
      {
        path: '/explanation-vue',
        name: 'ExplanationVue',
        component: ExplanationVue
      },
      {
        path: '/image-management',
        name: 'ImageManagement',
        component: ImageManagement
      }
    ]
  },
  {
    path: '/merchandise-sale',
    component: MerchandiseSale,
    children: [
      {
        path: '/product-name',
        name: 'ProductName',
        component: ProductName
      },
      {
        path: '/view-vue',
        name: 'ViewVue',
        component: ViewVue
      },
      {
        path: '/administrative-function',
        name: 'AdministrativeFunction',
        component: AdministrativeFunction
      },
      {
        path: '/refund-regulation',
        name: 'RefundRegulation',
        component: RefundRegulation
      },
      {
        path: '/amenities-vue2',
        name: 'AmenitiesVue2',
        component: AmenitiesVue2
      }
    ]
  },
  {
    path: '/batch-service',
    name: 'BatchService',
    component: BatchService
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;