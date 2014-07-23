.pragma library

var SIZE_TINY               = 8,
    SIZE_SMALL              = 10,
    SIZE_NORMAL             = 11,
    SIZE_BIG                = 12,
    SIZE_HUGE               = 20,
    /* Aliases */
    SIZE_PAGE_TITLE         = SIZE_HUGE,
    SIZE_PAGE_DESCRIPTION   = SIZE_NORMAL,
    SIZE_WIDGET_TEXT        = SIZE_BIG,
    SIZE_CHART_TITLE        = SIZE_NORMAL,
    SIZE_CHART_DESCRIPTION  = SIZE_TINY,
    /* Fonts */
    BASE_FONT               = "OpenSansLight",
    BASE_FONT_BOLD          = "OpenSansRegular",
    ICON_FONT               = "Fontawesome",
    /* Icon Sizes */
    ICON_TINY               = 16,
    ICON_SMALL              = 24,
    ICON_NORMAL             = 32,
    ICON_BIG                = 48,
    ICON_HUGE               = 64,
   _ICONS_DEF               = {"glass": "\uE000","music": "\uE001","search": "\uE002","envelope-o": "\uE003","heart": "\uE004","star": "\uE005","star-o": "\uE006","user": "\uE007","film": "\uE008","th-large": "\uE009","th": "\uE00a","th-list": "\uE00b","check": "\uE00c","times": "\uE00d","search-plus": "\uE00e","search-minus": "\uE010","power-off": "\uE011","signal": "\uE012","gear": "\uE013","cog": "\uE013","trash-o": "\uE014","home": "\uE015","file-o": "\uE016","clock-o": "\uE017","road": "\uE018","download": "\uE019","arrow-circle-o-down": "\uE01a","arrow-circle-o-up": "\uE01b","inbox": "\uE01c","play-circle-o": "\uE01d","rotate-right": "\uE01e","repeat": "\uE01e","refresh": "\uE021","list-alt": "\uE022","lock": "\uE023","flag": "\uE024","headphones": "\uE025","volume-off": "\uE026","volume-down": "\uE027","volume-up": "\uE028","qrcode": "\uE029","barcode": "\uE02a","tag": "\uE02b","tags": "\uE02c","book": "\uE02d","bookmark": "\uE02e","print": "\uE02f","camera": "\uE030","font": "\uE031","bold": "\uE032","italic": "\uE033","text-height": "\uE034","text-width": "\uE035","align-left": "\uE036","align-center": "\uE037","align-right": "\uE038","align-justify": "\uE039","list": "\uE03a","dedent": "\uE03b","outdent": "\uE03b","indent": "\uE03c","video-camera": "\uE03d","photo": "\uE03e","image": "\uE03e","picture-o": "\uE03e","pencil": "\uE040","map-marker": "\uE041","adjust": "\uE042","tint": "\uE043","edit": "\uE044","pencil-square-o": "\uE044","share-square-o": "\uE045","check-square-o": "\uE046","arrows": "\uE047","step-backward": "\uE048","fast-backward": "\uE049","backward": "\uE04a","play": "\uE04b","pause": "\uE04c","stop": "\uE04d","forward": "\uE04e","fast-forward": "\uE050","step-forward": "\uE051","eject": "\uE052","chevron-left": "\uE053","chevron-right": "\uE054","plus-circle": "\uE055","add": "\uE055","minus-circle": "\uE056","times-circle": "\uE057","check-circle": "\uE058","question-circle": "\uE059","info-circle": "\uE05a","crosshairs": "\uE05b","times-circle-o": "\uE05c","check-circle-o": "\uE05d","ban": "\uE05e","arrow-left": "\uE060","arrow-right": "\uE061","arrow-up": "\uE062","arrow-down": "\uE063","mail-forward": "\uE064","share": "\uE064","expand": "\uE065","compress": "\uE066","plus": "\uE067","minus": "\uE068","asterisk": "\uE069","exclamation-circle": "\uE06a","gift": "\uE06b","leaf": "\uE06c","fire": "\uE06d","eye": "\uE06e","eye-slash": "\uE070","warning": "\uE071","exclamation-triangle": "\uE071","plane": "\uE072","calendar": "\uE073","random": "\uE074","comment": "\uE075","magnet": "\uE076","chevron-up": "\uE077","chevron-down": "\uE078","retweet": "\uE079","shopping-cart": "\uE07a","folder": "\uE07b","folder-open": "\uE07c","arrows-v": "\uE07d","arrows-h": "\uE07e","bar-chart-o": "\uE080","twitter-square": "\uE081","facebook-square": "\uE082","camera-retro": "\uE083","key": "\uE084","gears": "\uE085","cogs": "\uE085","comments": "\uE086","thumbs-o-up": "\uE087","thumbs-o-down": "\uE088","star-half": "\uE089","heart-o": "\uE08a","sign-out": "\uE08b","linkedin-square": "\uE08c","thumb-tack": "\uE08d","external-link": "\uE08e","sign-in": "\uE090","trophy": "\uE091","github-square": "\uE092","upload": "\uE093","lemon-o": "\uE094","phone": "\uE095","square-o": "\uE096","bookmark-o": "\uE097","phone-square": "\uE098","twitter": "\uE099","facebook": "\uE09a","github": "\uE09b","unlock": "\uE09c","credit-card": "\uE09d","rss": "\uE09e","hdd-o": "\uE0a0","bullhorn": "\uE0a1","bell": "\uE0f3","certificate": "\uE0a3","hand-o-right": "\uE0a4","hand-o-left": "\uE0a5","hand-o-up": "\uE0a6","hand-o-down": "\uE0a7","arrow-circle-left": "\uE0a8","arrow-circle-right": "\uE0a9","arrow-circle-up": "\uE0aa","arrow-circle-down": "\uE0ab","globe": "\uE0ac","wrench": "\uE0ad","tasks": "\uE0ae","filter": "\uE0b0","briefcase": "\uE0b1","arrows-alt": "\uE0b2","group": "\uE0c0","users": "\uE0c0","chain": "\uE0c1","link": "\uE0c1","cloud": "\uE0c2","flask": "\uE0c3","cut:": "\uE0c4","scissors": "\uE0c4","copy:": "\uE0c5","files-o": "\uE0c5","paperclip": "\uE0c6","save": "\uE0c7","floppy-o": "\uE0c7","square": "\uE0c8","navicon": "\uE0c9","reorder": "\uE0c9","bars": "\uE0c9","list-ul": "\uE0ca","list-ol": "\uE0cb","strikethrough": "\uE0cc","underline": "\uE0cd","table": "\uE0ce","magic": "\uE0d0","truck": "\uE0d1","pinterest": "\uE0d2","pinterest-square": "\uE0d3","google-plus-square": "\uE0d4","google-plus": "\uE0d5","money": "\uE0d6","caret-down": "\uE0d7","caret-up": "\uE0d8","caret-left": "\uE0d9","caret-right": "\uE0da","columns": "\uE0db","unsorted": "\uE0dc","sort": "\uE0dc","sort-down": "\uE0dd","sort-desc": "\uE0dd","sort-up": "\uE0de","sort-asc": "\uE0de","envelope": "\uE0e0","linkedin": "\uE0e1","rotate-left": "\uE0e2","undo": "\uE0e2","legal": "\uE0e3","gavel": "\uE0e3","dashboard": "\uE0e4","tachometer": "\uE0e4","comment-o": "\uE0e5","comments-o": "\uE0e6","flash": "\uE0e7","bolt": "\uE0e7","sitemap": "\uE0e8","umbrella": "\uE0e9","paste": "\uE0ea","clipboard": "\uE0ea","lightbulb-o": "\uE0eb","exchange": "\uE0ec","cloud-download": "\uE0ed","cloud-upload": "\uE0ee","user-md": "\uE0f0","stethoscope": "\uE0f1","suitcase": "\uE0f2","bell-o": "\uE0a2","coffee": "\uE0f4","cutlery": "\uE0f5","file-text-o": "\uE0f6","building-o": "\uE0f7","hospital-o": "\uE0f8","ambulance": "\uE0f9","medkit": "\uE0fa","fighter-jet": "\uE0fb","beer": "\uE0fc","h-square": "\uE0fd","plus-square": "\uE0fe","angle-double-left": "\uE100","angle-double-right": "\uE101","angle-double-up": "\uE102","angle-double-down": "\uE103","angle-left": "\uE104","angle-right": "\uE105","angle-up": "\uE106","angle-down": "\uE107","desktop": "\uE108","laptop": "\uE109","tablet": "\uE10a","mobile-phone": "\uE10b","mobile": "\uE10b","circle-o": "\uE10c","quote-left": "\uE10d","quote-right": "\uE10e","spinner": "\uE110","circle": "\uE111","mail-reply": "\uE112","reply": "\uE112","github-alt": "\uE113","folder-o": "\uE114","folder-open-o": "\uE115","smile-o": "\uE118","frown-o": "\uE119","meh-o": "\uE11a","gamepad": "\uE11b","keyboard-o": "\uE11c","flag-o": "\uE11d","flag-checkered": "\uE11e","terminal": "\uE120","code": "\uE121","mail-reply-all": "\uE122","reply-all": "\uE122","star-half-empty": "\uE123","star-half-full": "\uE123","star-half-o": "\uE123","location-arrow": "\uE124","crop": "\uE125","code-fork": "\uE126","unlink": "\uE127","chain-broken": "\uE127","question": "\uE128","info": "\uE129","exclamation": "\uE12a","superscript": "\uE12b","subscript": "\uE12c","eraser": "\uE12d","puzzle-piece": "\uE12e","microphone": "\uE130","microphone-slash": "\uE131","shield": "\uE132","calendar-o": "\uE133","fire-extinguisher": "\uE134","rocket": "\uE135","maxcdn": "\uE136","chevron-circle-left": "\uE137","chevron-circle-right": "\uE138","chevron-circle-up": "\uE139","chevron-circle-down": "\uE13a","html5": "\uE13b","css3": "\uE13c","anchor": "\uE13d","unlock-alt": "\uE13e","bullseye": "\uE140","ellipsis-h": "\uE141","ellipsis-v": "\uE142","rss-square": "\uE143","play-circle": "\uE144","ticket": "\uE145","minus-square": "\uE146","minus-square-o": "\uE147","level-up": "\uE148","level-down": "\uE149","check-square": "\uE14a","pencil-square": "\uE14b","external-link-square": "\uE14c","share-square": "\uE14d","compass": "\uE14e","toggle-down": "\uE150","caret-square-o-down": "\uE150","toggle-up": "\uE151","caret-square-o-up": "\uE151","toggle-right": "\uE152","caret-square-o-right": "\uE152","euro": "\uE153","eur": "\uE153","gbp": "\uE154","dollar": "\uE155","usd": "\uE155","rupee": "\uE156","inr": "\uE156","cny": "\uE157","rmb": "\uE157","yen": "\uE157","jpy": "\uE157","ruble": "\uE158","rouble": "\uE158","rub": "\uE158","won": "\uE159","krw": "\uE159","bitcoin": "\uE15a","btc": "\uE15a","file": "\uE15b","file-text": "\uE15c","sort-alpha-asc": "\uE15d","sort-alpha-desc": "\uE15e","sort-amount-asc": "\uE160","sort-amount-desc": "\uE161","sort-numeric-asc": "\uE162","sort-numeric-desc": "\uE163","thumbs-up": "\uE164","thumbs-down": "\uE165","youtube-square": "\uE166","youtube": "\uE167","xing": "\uE168","xing-square": "\uE169","youtube-play": "\uE16a","dropbox": "\uE16b","stack-overflow": "\uE16c","instagram": "\uE16d","flickr": "\uE16e","adn": "\uE170","bitbucket": "\uE171","bitbucket-square": "\uE172","tumblr": "\uE173","tumblr-square": "\uE174","long-arrow-down": "\uE175","long-arrow-up": "\uE176","long-arrow-left": "\uE177","long-arrow-right": "\uE178","apple": "\uE179","windows": "\uE17a","android": "\uE17b","linux": "\uE17c","dribbble": "\uE17d","skype": "\uE17e","foursquare": "\uE180","trello": "\uE181","female": "\uE182","male": "\uE183","gittip": "\uE184","sun-o": "\uE185","moon-o": "\uE186","archive": "\uE187","bug": "\uE188","vk": "\uE189","weibo": "\uE18a","renren": "\uE18b","pagelines": "\uE18c","stack-exchange": "\uE18d","arrow-circle-o-right": "\uE18e","arrow-circle-o-left": "\uE190","toggle-left": "\uE191","caret-square-o-left": "\uE191","dot-circle-o": "\uE192","wheelchair": "\uE193","vimeo-square": "\uE194","turkish-lira": "\uE195","try": "\uE195","plus-square-o": "\uE196","space-shuttle": "\uE197","slack": "\uE198","envelope-square": "\uE199","wordpress": "\uE19a","openid": "\uE19b","institution": "\uE19c","bank": "\uE19c","university": "\uE19c","mortar-board": "\uE19d","graduation-cap": "\uE19d","yahoo": "\uE19e","google": "\uE1a0","reddit": "\uE1a1","reddit-square": "\uE1a2","stumbleupon-circle": "\uE1a3","stumbleupon": "\uE1a4","delicious": "\uE1a5","digg": "\uE1a6","pied-piper-square": "\uE1a7","pied-piper": "\uE1a7","pied-piper-alt": "\uE1a8","drupal": "\uE1a9","joomla": "\uE1aa","language": "\uE1ab","fax": "\uE1ac","building": "\uE1ad","child": "\uE1ae","paw": "\uE1b0","spoon": "\uE1b1","cube": "\uE1b2","cubes": "\uE1b3","behance": "\uE1b4","behance-square": "\uE1b5","steam": "\uE1b6","steam-square": "\uE1b7","recycle": "\uE1b8","automobile": "\uE1b9","car": "\uE1b9","cab": "\uE1ba","taxi": "\uE1ba","tree": "\uE1bb","spotify": "\uE1bc","deviantart": "\uE1bd","soundcloud": "\uE1be","database": "\uE1c0","file-pdf-o": "\uE1c1","file-word-o": "\uE1c2","file-excel-o": "\uE1c3","file-powerpoint-o": "\uE1c4","file-photo-o": "\uE1c5","file-picture-o": "\uE1c5","file-image-o": "\uE1c5","file-zip-o": "\uE1c6","file-archive-o": "\uE1c6","file-sound-o": "\uE1c7","file-audio-o": "\uE1c7","file-movie-o": "\uE1c8","file-video-o": "\uE1c8","file-code-o": "\uE1c9","vine": "\uE1ca","codepen": "\uE1cb","jsfiddle": "\uE1cc","life-bouy": "\uE1cd","life-saver": "\uE1cd","support": "\uE1cd","life-ring": "\uE1cd","circle-o-notch": "\uE1ce","ra": "\uE1d0","rebel": "\uE1d0","ge": "\uE1d1","empire": "\uE1d1","git-square": "\uE1d2","git": "\uE1d3","hacker-news": "\uE1d4","tencent-weibo": "\uE1d5","qq": "\uE1d6","wechat": "\uE1d7","weixin": "\uE1d7","send": "\uE1d8","paper-plane": "\uE1d8","send-o": "\uE1d9","paper-plane-o": "\uE1d9","history": "\uE1da","circle-thin": "\uE1db","header": "\uE1dc","paragraph": "\uE1dd","sliders": "\uE1de","share-alt": "\uE1e0","share-alt-square": "\uE1e1","bomb": "\uE1e2"};

function getIcon(name){
    return _ICONS_DEF[name];
}

