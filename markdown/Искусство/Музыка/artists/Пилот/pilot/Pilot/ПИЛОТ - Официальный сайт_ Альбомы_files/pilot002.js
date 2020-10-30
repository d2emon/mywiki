function get_rslogan() {
    //a=Date.getTime();
    a=Math.random();
    randomnum=Math.abs(Math.sin(a));
    rslogan=Math.round(randomnum*10);
    if (rslogan==0) { rslogan=7};
    if (rslogan>7) {
        rslogan=10-rslogan;
    };
    return rslogan;
}

function make_br(n) {
    for (i=0; i<n; i++)
        document.writeln("<p>&nbsp;</p>")
}

function load(page_name,width,height) {
    window.open(page_name, "dmWin","width=" + width + ",height=" + height + ",toolbar=yes,location=no,directories=no,status=no,menubar=no");
}

function chatLoad(chat_url) {
    ChatWin = window.open(chat_url, '_blank', 'toolbar=yes,location=no,directories=no,status=no,menubar=no,resizable=yes,copyhistory=no,scrollbars=yes,width=640,height=480');
}