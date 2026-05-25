import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';
import { BlogPost } from '../../core/models/content.models';

@Component({
  selector: 'app-blog-detail',
  standalone: false,
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;
  safeContent: SafeHtml | null = null;
  loading = true;
  error = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly content: ContentService,
    private readonly seo: SeoService,
    private readonly sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    if (!slug) {
      this.router.navigate(['/blog']);
      return;
    }

    this.content.getBlogPost(slug).subscribe({
      next: (post) => {
        this.post = post;
        this.loading = false;
        if (post.content) {
          this.safeContent = this.sanitizer.bypassSecurityTrustHtml(post.content);
        }
        this.seo.setPage({
          title:       post.title,
          description: post.excerpt ?? '',
          keywords:    post.tags?.join(', ') ?? '',
        });
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

  formatDate(iso: string | null): string {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }
}
