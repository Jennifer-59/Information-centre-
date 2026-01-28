// // ============================================
// // PROTECTION MEASURES (Consolidated)
// // ============================================
// (function() {
//     'use strict';

//     // ------------------------------------
//     // 1. BASIC COPY/SELECTION PROTECTION
//     // ------------------------------------
//     document.addEventListener('copy', e => e.preventDefault());
//     document.addEventListener('cut', e => e.preventDefault());
//     document.addEventListener('selectstart', e => e.preventDefault());
//     document.addEventListener('contextmenu', e => e.preventDefault());

//     // ------------------------------------
//     // 2. KEYBOARD SHORTCUTS BLOCKING
//     // ------------------------------------
//     document.addEventListener('keydown', function(e) {
//         // Block: F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S
//         if (
//             e.key === 'F12' ||
//             (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
//             (e.ctrlKey && e.key.toLowerCase() === 'u') ||
//             (e.ctrlKey && e.key.toLowerCase() === 's')
//         ) {
//             e.preventDefault();
//             e.stopPropagation();
//             return false;
//         }
//     }, true); // Use capture phase

//     // ------------------------------------
//     // 3. DEVTOOLS DETECTION
//     // ------------------------------------
//     let devtoolsOpen = false;
//     const threshold = 160;

//     const detectDevTools = () => {
//         // Check window size difference
//         const widthDiff = window.outerWidth - window.innerWidth;
//         const heightDiff = window.outerHeight - window.innerHeight;
//         return widthDiff > threshold || heightDiff > threshold;
//     };

//     const handleDevToolsDetected = () => {
//         if (!devtoolsOpen) {
//             devtoolsOpen = true;
//             console.warn('⚠️ Developer tools detected - Redirecting...');
            
//             // Immediate redirect to Google
//             window.location.href = 'https://www.google.com';
//         }
//     };

//     const handleDevToolsClosed = () => {
//         // No need for cleanup since we redirect immediately
//         devtoolsOpen = false;
//     };

//     const check = () => {
//         try {
//             if (detectDevTools()) {
//                 handleDevToolsDetected();
//             } else {
//                 handleDevToolsClosed();
//             }
//         } catch (error) {
//             // Silent fail
//         }
//     };

//     // Check every second
//     setInterval(check, 1000);
    
//     // Check on resize
//     window.addEventListener('resize', check);

//     // Initial check
//     check();

// })();

// // ============================================
// // MOBILE MENU FUNCTIONALITY
// // ============================================
// (function() {
//     const mobileMenuBtn = document.getElementById('mobileMenuBtn');
//     const mobileNavOffcanvas = document.getElementById('mobileNavOffcanvas');
//     const mobileNavOverlay = document.getElementById('mobileNavOverlay');
//     const mobileNavClose = document.getElementById('mobileNavClose');
    
//     if (!mobileMenuBtn || !mobileNavOffcanvas) return;
    
//     function openMobileMenu() {
//         mobileNavOffcanvas.classList.add('active');
//         mobileNavOverlay?.classList.add('active');
//         mobileMenuBtn.setAttribute('aria-expanded', 'true');
//         document.body.style.overflow = 'hidden';
        
//         // Focus trap
//         const focusableElements = mobileNavOffcanvas.querySelectorAll('a, button');
//         if (focusableElements.length) {
//             focusableElements[0].focus();
//         }
//     }
    
//     function closeMobileMenu() {
//         mobileNavOffcanvas.classList.remove('active');
//         mobileNavOverlay?.classList.remove('active');
//         mobileMenuBtn.setAttribute('aria-expanded', 'false');
//         document.body.style.overflow = '';
//         mobileMenuBtn.focus();
//     }
    
//     mobileMenuBtn.addEventListener('click', openMobileMenu);
//     mobileNavClose?.addEventListener('click', closeMobileMenu);
//     mobileNavOverlay?.addEventListener('click', closeMobileMenu);
    
//     // Close on Escape key
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && mobileNavOffcanvas.classList.contains('active')) {
//             closeMobileMenu();
//         }
//     });
    
//     // Mobile dropdown toggles
//     const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
//     dropdownToggles.forEach(toggle => {
//         toggle.addEventListener('click', function() {
//             const targetId = this.getAttribute('data-target');
//             const targetContent = document.getElementById(targetId);
//             const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
//             // Close all other dropdowns
//             dropdownToggles.forEach(t => {
//                 if (t !== this) {
//                     t.setAttribute('aria-expanded', 'false');
//                     const tId = t.getAttribute('data-target');
//                     document.getElementById(tId)?.classList.remove('active');
//                 }
//             });
            
//             // Toggle current dropdown
//             targetContent?.classList.toggle('active');
//             this.setAttribute('aria-expanded', !isExpanded);
//         });
//     });
// })();

// // ============================================
// // BACK TO TOP BUTTON
// // ============================================
// (function() {
//     const backToTop = document.getElementById('backToTop');
//     if (!backToTop) return;
    
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 300) {
//             backToTop.classList.add('visible');
//         } else {
//             backToTop.classList.remove('visible');
//         }
//     });
    
//     backToTop.addEventListener('click', () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });
// })();

//     // Add keyboard accessibility for card clicks
//     document.querySelectorAll('.featured-card, .new-item-card').forEach(card => {
//         card.addEventListener('keypress', function(e) {
//             if (e.key === 'Enter' || e.key === ' ') {
//                 e.preventDefault();
//                 const link = this.querySelector('a');
//                 if (link) {
//                     link.click();
//                 }
//             }
//         });
//     });

//     // Smooth scroll for internal links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             const href = this.getAttribute('href');
//             if (href !== '#') {
//                 e.preventDefault();
//                 const target = document.querySelector(href);
//                 if (target) {
//                     target.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start'
//                     });
//                 }
//             }
//         });
//     });


