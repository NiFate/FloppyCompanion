/*
 * icons.js
 *
 * Central icon registry for the WebUI.
 *
 * Many icons are sourced from Google Material Symbols.
 * https://fonts.google.com/icons
 */

(function () {
	'use strict';

	var SVG_NS = 'http://www.w3.org/2000/svg';

	/**
	 * Icon definitions.
	 *
	 * Format:
	 * - viewBox: string
	 * - paths: array of path "d" strings OR objects { d, fill }
	 */
	var ICONS = {
		// App chrome / navigation (24x24)
		arrow_back: {
			viewBox: '0 0 24 24',
			paths: [
				'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'
			]
		},
		language: {
			viewBox: '0 0 24 24',
			paths: [
				'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'
			]
		},
		restart_alt: {
			viewBox: '0 0 24 24',
			paths: [
				'M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8zm-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z'
			]
		},

		// Material Symbols
		thermal: {
			viewBox: '0 -960 960 960',
			paths: [
				'M480-80q-83 0-141.5-58.5T280-280q0-48 21-89.5t59-70.5v-320q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-80Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240Z'
			]
		},
		undervolt: {
			viewBox: '0 -960 960 960',
			paths: [
				'm422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z'
			]
		},
		misc: {
			viewBox: '0 -960 960 960',
			paths: [
				'M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v80h80v80h-80v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T720-120H160Zm0-80h560v-560H160v560Zm80-80h200v-160H240v160Zm240-280h160v-120H480v120Zm-240 80h200v-200H240v200Zm240 200h160v-240H480v240ZM160-760v560-560Z'
			]
		},
		soundcontrol: {
			viewBox: '0 -960 960 960',
			paths: [
				'M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z'
			]
		},

		// Inline icons moved over from the UI
		chip: {
			viewBox: '0 0 24 24',
			paths: [
				'M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z'
			]
		},
		zram: {
			viewBox: '0 0 24 24',
			paths: [
				'M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z'
			]
		},
		memory: {
			viewBox: '0 0 24 24',
			paths: [
				'M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z'
			]
		},
		iosched: {
			viewBox: '0 0 24 24',
			paths: [
				'M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm6 12c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-5c0 .5-2.13 2-6 2s-6-1.5-6-2V9.77c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V12z'
			]
		},

		// Status / UI glyphs (24x24)
		home: {
			viewBox: '0 0 24 24',
			paths: [
				'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
			]
		},
		extension: {
			viewBox: '0 0 24 24',
			paths: [
				'M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z'
			]
		},
		tune: {
			viewBox: '0 0 24 24',
			paths: [
				'M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'
			]
		},
		build: {
			viewBox: '0 0 24 24',
			paths: [
				'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'
			]
		},
		download: {
			viewBox: '0 0 24 24',
			paths: [
				'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'
			]
		},
		open_in_new: {
			viewBox: '0 0 24 24',
			paths: [
				'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'
			]
		},
		github: {
			viewBox: '0 0 24 24',
			paths: [
				'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
			]
		},
		import: {
			viewBox: '0 0 24 24',
			paths: [
				'M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z'
			]
		},
		export: {
			viewBox: '0 0 24 24',
			paths: [
				'M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z'
			]
		},
		check: {
			viewBox: '0 0 24 24',
			paths: [
				'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'
			]
		},
		refresh: {
			viewBox: '0 0 24 24',
			paths: [
				'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
			]
		},
		warning_triangle: {
			viewBox: '0 0 24 24',
			paths: [
				'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'
			]
		},
		warning: {
			viewBox: '0 0 24 24',
			paths: [
				'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'
			]
		},
		warning_circle: {
			viewBox: '0 0 24 24',
			paths: [
				'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
			]
		},
		info: {
			viewBox: '0 0 24 24',
			paths: [
				'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
			]
		},
		info_outline: {
			viewBox: '0 0 24 24',
			paths: [
				'M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
			]
		},
		reboot: {
			viewBox: '0 0 24 24',
			paths: [
				'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
			]
		},
		check_circle: {
			viewBox: '0 0 24 24',
			paths: [
				'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
			]
		},
		success: {
			viewBox: '0 0 24 24',
			paths: [
				'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
			]
		},
		save: {
			viewBox: '0 0 24 24',
			paths: [
				'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'
			]
		},

		// Theme icons (24x24)
		theme_dark: {
			viewBox: '0 0 24 24',
			paths: [
				'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'
			]
		},
		theme_light: {
			viewBox: '0 0 24 24',
			paths: [
				'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z'
			]
		},
		theme_auto: {
			viewBox: '0 0 24 24',
			paths: [
				// Custom Auto Icon: Sun Rays + Bold Sans-Serif 'A'
				'M11 9 H13 L15.2 15.5 H13.2 L12.7 14 H11.3 L10.8 15.5 H8.8 Z M12 10.5 L12.3 12.5 H11.7 Z M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z'
			]
		}
	};

	function escapeAttr(value) {
		return String(value)
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}

	function getIconDef(name) {
		var key = String(name || '').trim();
		return key ? ICONS[key] || null : null;
	}

	function createSvg(name, opts) {
		opts = opts || {};
		var def = getIconDef(name);
		if (!def) return null;

		var svg = document.createElementNS(SVG_NS, 'svg');
		if (opts.className) svg.setAttribute('class', opts.className);
		svg.setAttribute('viewBox', opts.viewBox || def.viewBox || '0 0 24 24');

		if (opts.width) svg.setAttribute('width', String(opts.width));
		if (opts.height) svg.setAttribute('height', String(opts.height));

		if (opts.ariaLabel) {
			svg.setAttribute('role', 'img');
			svg.setAttribute('aria-label', String(opts.ariaLabel));
		} else {
			svg.setAttribute('aria-hidden', 'true');
		}

		var paths = def.paths || [];
		for (var i = 0; i < paths.length; i++) {
			var p = paths[i];
			var path = document.createElementNS(SVG_NS, 'path');
			if (typeof p === 'string') {
				path.setAttribute('d', p);
			} else if (p && p.d) {
				path.setAttribute('d', p.d);
				if (p.fill) path.setAttribute('fill', p.fill);
			}
			if (!path.getAttribute('fill')) {
				path.setAttribute('fill', opts.fill || 'currentColor');
			}
			svg.appendChild(path);
		}

		return svg;
	}

	function svgString(name, opts) {
		opts = opts || {};
		var def = getIconDef(name);
		if (!def) return '';

		var viewBox = escapeAttr(opts.viewBox || def.viewBox || '0 0 24 24');
		var cls = opts.className ? ' class="' + escapeAttr(opts.className) + '"' : '';
		var w = opts.width ? ' width="' + escapeAttr(opts.width) + '"' : '';
		var h = opts.height ? ' height="' + escapeAttr(opts.height) + '"' : '';
		var aria = opts.ariaLabel
			? ' role="img" aria-label="' + escapeAttr(opts.ariaLabel) + '"'
			: ' aria-hidden="true"';

		var fill = escapeAttr(opts.fill || 'currentColor');

		var paths = def.paths || [];
		var out = '<svg' + cls + ' viewBox="' + viewBox + '"' + w + h + aria + '>';
		for (var i = 0; i < paths.length; i++) {
			var p = paths[i];
			if (typeof p === 'string') {
				out += '<path fill="' + fill + '" d="' + escapeAttr(p) + '"></path>';
			} else if (p && p.d) {
				out += '<path fill="' + escapeAttr(p.fill || fill) + '" d="' + escapeAttr(p.d) + '"></path>';
			}
		}
		out += '</svg>';
		return out;
	}

	function applyToSvg(svgEl, name, opts) {
		opts = opts || {};
		var def = getIconDef(name);
		if (!def || !svgEl) return false;

		svgEl.setAttribute('viewBox', opts.viewBox || def.viewBox || '0 0 24 24');
		while (svgEl.firstChild) svgEl.removeChild(svgEl.firstChild);

		var paths = def.paths || [];
		for (var i = 0; i < paths.length; i++) {
			var p = paths[i];
			var path = document.createElementNS(SVG_NS, 'path');
			if (typeof p === 'string') {
				path.setAttribute('d', p);
			} else if (p && p.d) {
				path.setAttribute('d', p.d);
				if (p.fill) path.setAttribute('fill', p.fill);
			}
			if (!path.getAttribute('fill')) {
				path.setAttribute('fill', opts.fill || 'currentColor');
			}
			svgEl.appendChild(path);
		}

		return true;
	}

	function applyDataIcons(root) {
		var ctx = root || document;
		if (!ctx || !ctx.querySelectorAll) return 0;

		var svgs = ctx.querySelectorAll('svg[data-icon]');
		for (var i = 0; i < svgs.length; i++) {
			var svg = svgs[i];
			var name = svg.getAttribute('data-icon');
			if (!name) continue;
			var fill = svg.getAttribute('data-icon-fill');
			applyToSvg(svg, name, fill ? { fill: fill } : {});
		}

		return svgs.length;
	}

	window.FC = window.FC || {};
	window.FC.icons = {
		get: getIconDef,
		createSvg: createSvg,
		svgString: svgString,
		applyToSvg: applyToSvg,
		applyDataIcons: applyDataIcons
	};
})();

