import { Component } from '@angular/core';

@Component({
  selector: 'eo-logo',
  template: `
    <svg class="logo" xmlns="http://www.w3.org/2000/svg" data-name="图层 1" viewBox="0 0 194 194">
      <defs>
        <radialGradient id="b" cx="97.14" cy="153.04" fx="68.107" fy="144.196" r="42.24" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#35126a" />
          <stop offset=".11" stop-color="#601268" />
          <stop offset=".4" stop-color="#cd1364" />
          <stop offset=".53" stop-color="#f91362" />
          <stop offset="1" stop-color="#ff8e44" />
        </radialGradient>
        <clipPath id="a"><rect fill="none" data-name="矩形 1-12" width="194" height="194" rx="50" /></clipPath>
      </defs>
      <rect data-follow-fill="#142765" fill="#142765" data-name="矩形 1-12" width="194" height="194" rx="50" />
      <g clip-path="url(#a)">
        <path
          fill="#ff5a00"
          d="M179 194H15l31.42-54.41a73.11 73.11 0 0 0 11.7 6.41A97 97 0 0 0 97 153.8a96.93 96.93 0 0 0 38.88-7.8 73.11 73.11 0 0 0 11.66-6.41Z"
        />
        <path fill="#fff" d="M151.16 194H42.85l15.27-48A97 97 0 0 0 97 153.8a96.93 96.93 0 0 0 38.88-7.8Z" />
        <path
          fill="url(#b)"
          d="M140.2 146.65c0 8.22-19.34 14.88-43.2 14.88s-43.2-6.66-43.2-14.88a5.54 5.54 0 0 1 .57-2.42c11.93 6 26.68 9.57 42.63 9.57s30.7-3.55 42.63-9.57a5.54 5.54 0 0 1 .57 2.42Z"
        />
        <path
          fill="#fff"
          d="M169 104.46c0 13.76-8.21 26.19-21.46 35.13a73.11 73.11 0 0 1-11.66 6.41A96.93 96.93 0 0 1 97 153.8a97 97 0 0 1-38.88-7.8 73.11 73.11 0 0 1-11.66-6.41C33.21 130.65 25 118.22 25 104.46c0-11.11 5.37-21.36 14.41-29.61l8.66-32.92a9.18 9.18 0 0 1 15.35-4.19L82.05 56.2a105 105 0 0 1 29.9 0l18.63-18.46a9.18 9.18 0 0 1 15.35 4.19l8.66 32.92c9.05 8.25 14.41 18.5 14.41 29.61Z"
        />
        <rect x="72.33" y="80.38" width="8.17" height="32.28" rx="4.08" />
        <rect x="113.5" y="80.38" width="8.17" height="32.28" rx="4.08" />
      </g>
    </svg>
  `,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  constructor() {}
}
