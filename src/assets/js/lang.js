export function getBrowserLang() {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
        return undefined;
    }

    let browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
    browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
    console.log('browserLang', browserLang);
    
    if (browserLang.indexOf('-') !== -1) {
        console.log('found hyphen');
        browserLang = browserLang.split('-')[0];
    }
    
    if (browserLang.indexOf('_') !== -1) {
        console.log('found underscore');
        browserLang = browserLang.split('_')[0];
    }
    
    console.log('FINAL browserLang', browserLang);
    return browserLang;
}
