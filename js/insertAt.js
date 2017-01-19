(function($) {
    $.fn.insertAt = function(options) {
        return this.each(function() {
            var settings = $.extend({
                value: "sample text"
            }, options);
            var win, doc, body, sel, range, text;
   
            win =(this.nodeName=="IFRAME")?this : document;
            if(this.nodeName=="IFRAME"){doc = $(win).contents();doc = doc[0];}else{doc=document}
            
            if (doc.getSelection) {
                sel = doc.getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                    var lines = settings.value.replace("\r\n", "\n").split("\n");
                    var frag = document.createDocumentFragment();
                    for (var i = 0, len = lines.length; i < len; ++i) {
                        if (i > 0) {frag.appendChild(document.createElement("br"));}
                        			frag.appendChild(document.createTextNode(lines[i]));
                    }

                    range.insertNode(frag);

                }
            } else if (doc.selection && doc.selection.createRange) {
            	debugger;alert(doc.selection.createRange().text);
            	
                doc.selection.createRange().text = settings.value;
            }


        });
    }

})(jQuery)
