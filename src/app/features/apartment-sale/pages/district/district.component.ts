import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALL_APARTMENT_PROJECTS, ApartmentProject } from '../../data/projects.data';

interface DistrictMeta {
  label: string;
  mapImage: string;
}

const DISTRICT_META: Record<string, DistrictMeta> = {
  'miraflores':  { label: 'Miraflores',  mapImage: '/images/districts/map-miraflores.jpg'  },
  'san-miguel':  { label: 'San Miguel',  mapImage: '/images/districts/map-san-miguel.jpg'  },
  'pueblo-libre':{ label: 'Pueblo Libre',mapImage: '/images/districts/map-pueblo-libre.jpg'},
  'la-victoria': { label: 'La Victoria', mapImage: '/images/districts/map-la-victoria.jpg' },
  'jesus-maria': { label: 'Jesús María', mapImage: '/images/districts/map-jesus-maria.jpg' },
  'san-isidro':  { label: 'San Isidro',  mapImage: '/images/districts/map-san-isidro.jpg'  },
};

@Component({
  selector: 'app-district',
  standalone: false,
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent implements OnInit {
  districtLabel = '';
  mapImage = '';
  projects: ApartmentProject[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.data['districtSlug'] as string;
    const meta = DISTRICT_META[slug];
    if (meta) {
      this.districtLabel = meta.label;
      this.mapImage = meta.mapImage;
    }
    this.projects = ALL_APARTMENT_PROJECTS.filter(p => p.districtSlug === slug);
  }
}
