import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeControlService {
  isDarkTheme = true;

  constructor() {}
}
