jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),function(a){"use strict";function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function c(a,b){var c=d(a,b)?f:e;c(a,b)}var d,e,f;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},f=function(a,b){a.classList.remove(b)}):(d=function(a,c){return b(c).test(a.className)},e=function(a,b){d(a,b)||(a.className=a.className+" "+b)},f=function(a,c){a.className=a.className.replace(b(c)," ")});var g={hasClass:d,addClass:e,removeClass:f,toggleClass:c,has:d,add:e,remove:f,toggle:c};"function"==typeof define&&define.amd?define(g):a.classie=g}(window);var cbpAnimatedHeader=function(){function a(){window.addEventListener("scroll",function(a){f||(f=!0,setTimeout(b,250))},!1)}function b(){var a=c();a>=g?classie.add(e,"navbar-shrink"):classie.remove(e,"navbar-shrink"),f=!1}function c(){return window.pageYOffset||d.scrollTop}var d=document.documentElement,e=document.querySelector(".navbar-default"),f=!1,g=300;a()}();!function(a){function b(a){return new RegExp("^"+a+"$")}function c(a,b){for(var c=Array.prototype.slice.call(arguments).splice(2),d=a.split("."),e=d.pop(),f=0;f<d.length;f++)b=b[d[f]];return b[e].apply(this,c)}var d=[],e={options:{prependExistingHelpBlock:!1,sniffHtml:!0,preventSubmit:!0,submitError:!1,submitSuccess:!1,semanticallyStrict:!1,autoAdd:{helpBlocks:!0},filter:function(){return!0}},methods:{init:function(b){var c=a.extend(!0,{},e);c.options=a.extend(!0,c.options,b);var h=this,i=a.unique(h.map(function(){return a(this).parents("form")[0]}).toArray());return a(i).bind("submit",function(b){var d=a(this),e=0,f=d.find("input,textarea,select").not("[type=submit],[type=image]").filter(c.options.filter);f.trigger("submit.validation").trigger("validationLostFocus.validation"),f.each(function(b,c){var d=a(c),f=d.parents(".form-group").first();f.hasClass("warning")&&(f.removeClass("warning").addClass("error"),e++)}),f.trigger("validationLostFocus.validation"),e?(c.options.preventSubmit&&b.preventDefault(),d.addClass("error"),a.isFunction(c.options.submitError)&&c.options.submitError(d,b,f.jqBootstrapValidation("collectErrors",!0))):(d.removeClass("error"),a.isFunction(c.options.submitSuccess)&&c.options.submitSuccess(d,b))}),this.each(function(){var b=a(this),e=b.parents(".form-group").first(),h=e.find(".help-block").first(),i=b.parents("form").first(),j=[];if(!h.length&&c.options.autoAdd&&c.options.autoAdd.helpBlocks&&(h=a('<div class="help-block" />'),e.find(".controls").append(h),d.push(h[0])),c.options.sniffHtml){var k="";if(void 0!==b.attr("pattern")&&(k="Not in the expected format<!-- data-validation-pattern-message to override -->",b.data("validationPatternMessage")&&(k=b.data("validationPatternMessage")),b.data("validationPatternMessage",k),b.data("validationPatternRegex",b.attr("pattern"))),void 0!==b.attr("max")||void 0!==b.attr("aria-valuemax")){var l=void 0!==b.attr("max")?b.attr("max"):b.attr("aria-valuemax");k="Too high: Maximum of '"+l+"'<!-- data-validation-max-message to override -->",b.data("validationMaxMessage")&&(k=b.data("validationMaxMessage")),b.data("validationMaxMessage",k),b.data("validationMaxMax",l)}if(void 0!==b.attr("min")||void 0!==b.attr("aria-valuemin")){var m=void 0!==b.attr("min")?b.attr("min"):b.attr("aria-valuemin");k="Too low: Minimum of '"+m+"'<!-- data-validation-min-message to override -->",b.data("validationMinMessage")&&(k=b.data("validationMinMessage")),b.data("validationMinMessage",k),b.data("validationMinMin",m)}void 0!==b.attr("maxlength")&&(k="Too long: Maximum of '"+b.attr("maxlength")+"' characters<!-- data-validation-maxlength-message to override -->",b.data("validationMaxlengthMessage")&&(k=b.data("validationMaxlengthMessage")),b.data("validationMaxlengthMessage",k),b.data("validationMaxlengthMaxlength",b.attr("maxlength"))),void 0!==b.attr("minlength")&&(k="Too short: Minimum of '"+b.attr("minlength")+"' characters<!-- data-validation-minlength-message to override -->",b.data("validationMinlengthMessage")&&(k=b.data("validationMinlengthMessage")),b.data("validationMinlengthMessage",k),b.data("validationMinlengthMinlength",b.attr("minlength"))),(void 0!==b.attr("required")||void 0!==b.attr("aria-required"))&&(k=c.builtInValidators.required.message,b.data("validationRequiredMessage")&&(k=b.data("validationRequiredMessage")),b.data("validationRequiredMessage",k)),void 0!==b.attr("type")&&"number"===b.attr("type").toLowerCase()&&(k=c.builtInValidators.number.message,b.data("validationNumberMessage")&&(k=b.data("validationNumberMessage")),b.data("validationNumberMessage",k)),void 0!==b.attr("type")&&"email"===b.attr("type").toLowerCase()&&(k="Not a valid email address<!-- data-validator-validemail-message to override -->",b.data("validationValidemailMessage")?k=b.data("validationValidemailMessage"):b.data("validationEmailMessage")&&(k=b.data("validationEmailMessage")),b.data("validationValidemailMessage",k)),void 0!==b.attr("minchecked")&&(k="Not enough options checked; Minimum of '"+b.attr("minchecked")+"' required<!-- data-validation-minchecked-message to override -->",b.data("validationMincheckedMessage")&&(k=b.data("validationMincheckedMessage")),b.data("validationMincheckedMessage",k),b.data("validationMincheckedMinchecked",b.attr("minchecked"))),void 0!==b.attr("maxchecked")&&(k="Too many options checked; Maximum of '"+b.attr("maxchecked")+"' required<!-- data-validation-maxchecked-message to override -->",b.data("validationMaxcheckedMessage")&&(k=b.data("validationMaxcheckedMessage")),b.data("validationMaxcheckedMessage",k),b.data("validationMaxcheckedMaxchecked",b.attr("maxchecked")))}void 0!==b.data("validation")&&(j=b.data("validation").split(",")),a.each(b.data(),function(a,b){var c=a.replace(/([A-Z])/g,",$1").split(",");"validation"===c[0]&&c[1]&&j.push(c[1])});var n=j,o=[];do a.each(j,function(a,b){j[a]=f(b)}),j=a.unique(j),o=[],a.each(n,function(d,e){if(void 0!==b.data("validation"+e+"Shortcut"))a.each(b.data("validation"+e+"Shortcut").split(","),function(a,b){o.push(b)});else if(c.builtInValidators[e.toLowerCase()]){var g=c.builtInValidators[e.toLowerCase()];"shortcut"===g.type.toLowerCase()&&a.each(g.shortcut.split(","),function(a,b){b=f(b),o.push(b),j.push(b)})}}),n=o;while(n.length>0);var p={};a.each(j,function(d,e){var g=b.data("validation"+e+"Message"),h=void 0!==g,i=!1;if(g=g?g:"'"+e+"' validation failed <!-- Add attribute 'data-validation-"+e.toLowerCase()+"-message' to input to change this message -->",a.each(c.validatorTypes,function(c,d){void 0===p[c]&&(p[c]=[]),i||void 0===b.data("validation"+e+f(d.name))||(p[c].push(a.extend(!0,{name:f(d.name),message:g},d.init(b,e))),i=!0)}),!i&&c.builtInValidators[e.toLowerCase()]){var j=a.extend(!0,{},c.builtInValidators[e.toLowerCase()]);h&&(j.message=g);var k=j.type.toLowerCase();"shortcut"===k?i=!0:a.each(c.validatorTypes,function(c,d){void 0===p[c]&&(p[c]=[]),i||k!==c.toLowerCase()||(b.data("validation"+e+f(d.name),j[d.name.toLowerCase()]),p[k].push(a.extend(j,d.init(b,e))),i=!0)})}i||a.error("Cannot find validation info for '"+e+"'")}),h.data("original-contents",h.data("original-contents")?h.data("original-contents"):h.html()),h.data("original-role",h.data("original-role")?h.data("original-role"):h.attr("role")),e.data("original-classes",e.data("original-clases")?e.data("original-classes"):e.attr("class")),b.data("original-aria-invalid",b.data("original-aria-invalid")?b.data("original-aria-invalid"):b.attr("aria-invalid")),b.bind("validation.validation",function(d,e){var f=g(b),h=[];return a.each(p,function(d,g){(f||f.length||e&&e.includeEmpty||c.validatorTypes[d].blockSubmit&&e&&e.submitting)&&a.each(g,function(a,e){c.validatorTypes[d].validate(b,f,e)&&h.push(e.message)})}),h}),b.bind("getValidators.validation",function(){return p}),b.bind("submit.validation",function(){return b.triggerHandler("change.validation",{submitting:!0})}),b.bind(["keyup","focus","blur","click","keydown","keypress","change"].join(".validation ")+".validation",function(d,f){var j=g(b),k=[];e.find("input,textarea,select").each(function(c,d){var e=k.length;if(a.each(a(d).triggerHandler("validation.validation",f),function(a,b){k.push(b)}),k.length>e)a(d).attr("aria-invalid","true");else{var g=b.data("original-aria-invalid");a(d).attr("aria-invalid",void 0!==g?g:!1)}}),i.find("input,select,textarea").not(b).not('[name="'+b.attr("name")+'"]').trigger("validationLostFocus.validation"),k=a.unique(k.sort()),k.length?(e.removeClass("success error").addClass("warning"),c.options.semanticallyStrict&&1===k.length?h.html(k[0]+(c.options.prependExistingHelpBlock?h.data("original-contents"):"")):h.html('<ul role="alert"><li>'+k.join("</li><li>")+"</li></ul>"+(c.options.prependExistingHelpBlock?h.data("original-contents"):""))):(e.removeClass("warning error success"),j.length>0&&e.addClass("success"),h.html(h.data("original-contents"))),"blur"===d.type&&e.removeClass("success")}),b.bind("validationLostFocus.validation",function(){e.removeClass("success")})})},destroy:function(){return this.each(function(){var b=a(this),c=b.parents(".form-group").first(),e=c.find(".help-block").first();b.unbind(".validation"),e.html(e.data("original-contents")),c.attr("class",c.data("original-classes")),b.attr("aria-invalid",b.data("original-aria-invalid")),e.attr("role",b.data("original-role")),d.indexOf(e[0])>-1&&e.remove()})},collectErrors:function(b){var c={};return this.each(function(b,d){var e=a(d),f=e.attr("name"),g=e.triggerHandler("validation.validation",{includeEmpty:!0});c[f]=a.extend(!0,g,c[f])}),a.each(c,function(a,b){0===b.length&&delete c[a]}),c},hasErrors:function(){var b=[];return this.each(function(c,d){b=b.concat(a(d).triggerHandler("getValidators.validation")?a(d).triggerHandler("validation.validation",{submitting:!0}):[])}),b.length>0},override:function(b){e=a.extend(!0,e,b)}},validatorTypes:{callback:{name:"callback",init:function(a,b){return{validatorName:b,callback:a.data("validation"+b+"Callback"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(a,b,d){if(d.lastValue===b&&d.lastFinished)return!d.lastValid;if(d.lastFinished===!0){d.lastValue=b,d.lastValid=!0,d.lastFinished=!1;var e=d,f=a;c(d.callback,window,a,b,function(a){e.lastValue===a.value&&(e.lastValid=a.valid,a.message&&(e.message=a.message),e.lastFinished=!0,f.data("validation"+e.validatorName+"Message",e.message),setTimeout(function(){f.trigger("change.validation")},1))})}return!1}},ajax:{name:"ajax",init:function(a,b){return{validatorName:b,url:a.data("validation"+b+"Ajax"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(b,c,d){return""+d.lastValue==""+c&&d.lastFinished===!0?d.lastValid===!1:(d.lastFinished===!0&&(d.lastValue=c,d.lastValid=!0,d.lastFinished=!1,a.ajax({url:d.url,data:"value="+c+"&field="+b.attr("name"),dataType:"json",success:function(a){""+d.lastValue==""+a.value&&(d.lastValid=!!a.valid,a.message&&(d.message=a.message),d.lastFinished=!0,b.data("validation"+d.validatorName+"Message",d.message),setTimeout(function(){b.trigger("change.validation")},1))},failure:function(){d.lastValid=!0,d.message="ajax call failed",d.lastFinished=!0,b.data("validation"+d.validatorName+"Message",d.message),setTimeout(function(){b.trigger("change.validation")},1)}})),!1)}},regex:{name:"regex",init:function(a,c){return{regex:b(a.data("validation"+c+"Regex"))}},validate:function(a,b,c){return!c.regex.test(b)&&!c.negative||c.regex.test(b)&&c.negative}},required:{name:"required",init:function(a,b){return{}},validate:function(a,b,c){return!(0!==b.length||c.negative)||!!(b.length>0&&c.negative)},blockSubmit:!0},match:{name:"match",init:function(a,b){var c=a.parents("form").first().find('[name="'+a.data("validation"+b+"Match")+'"]').first();return c.bind("validation.validation",function(){a.trigger("change.validation",{submitting:!0})}),{element:c}},validate:function(a,b,c){return b!==c.element.val()&&!c.negative||b===c.element.val()&&c.negative},blockSubmit:!0},max:{name:"max",init:function(a,b){return{max:a.data("validation"+b+"Max")}},validate:function(a,b,c){return parseFloat(b,10)>parseFloat(c.max,10)&&!c.negative||parseFloat(b,10)<=parseFloat(c.max,10)&&c.negative}},min:{name:"min",init:function(a,b){return{min:a.data("validation"+b+"Min")}},validate:function(a,b,c){return parseFloat(b)<parseFloat(c.min)&&!c.negative||parseFloat(b)>=parseFloat(c.min)&&c.negative}},maxlength:{name:"maxlength",init:function(a,b){return{maxlength:a.data("validation"+b+"Maxlength")}},validate:function(a,b,c){return b.length>c.maxlength&&!c.negative||b.length<=c.maxlength&&c.negative}},minlength:{name:"minlength",init:function(a,b){return{minlength:a.data("validation"+b+"Minlength")}},validate:function(a,b,c){return b.length<c.minlength&&!c.negative||b.length>=c.minlength&&c.negative}},maxchecked:{name:"maxchecked",init:function(a,b){var c=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return c.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{maxchecked:a.data("validation"+b+"Maxchecked"),elements:c}},validate:function(a,b,c){return c.elements.filter(":checked").length>c.maxchecked&&!c.negative||c.elements.filter(":checked").length<=c.maxchecked&&c.negative},blockSubmit:!0},minchecked:{name:"minchecked",init:function(a,b){var c=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return c.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{minchecked:a.data("validation"+b+"Minchecked"),elements:c}},validate:function(a,b,c){return c.elements.filter(":checked").length<c.minchecked&&!c.negative||c.elements.filter(":checked").length>=c.minchecked&&c.negative},blockSubmit:!0}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",message:"Not a valid email address<!-- data-validator-validemail-message to override -->"},passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Does not match the given password<!-- data-validator-paswordagain-message to override -->"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",message:"Must be a number<!-- data-validator-number-message to override -->"},integer:{name:"Integer",type:"regex",regex:"[+-]?\\d+",message:"No decimal places allowed<!-- data-validator-integer-message to override -->"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Must be a positive number<!-- data-validator-positivenumber-message to override -->"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Must be a negative number<!-- data-validator-negativenumber-message to override -->"},required:{name:"Required",type:"required",message:"This is required<!-- data-validator-required-message to override -->"},checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Check at least one option<!-- data-validation-checkone-message to override -->"}}},f=function(a){return a.toLowerCase().replace(/(^|\s)([a-z])/g,function(a,b,c){return b+c.toUpperCase()})},g=function(b){var c=b.val(),d=b.attr("type");return"checkbox"===d&&(c=b.is(":checked")?c:""),"radio"===d&&(c=a('input[name="'+b.attr("name")+'"]:checked').length>0?c:""),c};a.fn.jqBootstrapValidation=function(b){return e.methods[b]?e.methods[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?(a.error("Method "+b+" does not exist on jQuery.jqBootstrapValidation"),null):e.methods.init.apply(this,arguments)},a.jqBootstrapValidation=function(b){a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)}}(jQuery),$(function(){$("#contactForm input,#contactForm textarea").jqBootstrapValidation({preventSubmit:!0,submitError:function(a,b,c){},submitSuccess:function(a,b){b.preventDefault();var c=$("input#name").val(),d=$("input#email").val(),e=$("input#phone").val(),f=$("textarea#message").val(),g=c;g.indexOf(" ")>=0&&(g=c.split(" ").slice(0,-1).join(" ")),$.ajax({url:"././mail/contact_me.php",type:"POST",data:{name:c,phone:e,email:d,message:f},cache:!1,success:function(){$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),$("#success > .alert-success").append("</div>"),$("#contactForm").trigger("reset")},error:function(){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append("<strong>Sorry "+g+", it seems that my mail server is not responding. Please try again later!"),$("#success > .alert-danger").append("</div>"),$("#contactForm").trigger("reset")}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(a){a.preventDefault(),$(this).tab("show")})}),$("#name").focus(function(){$("#success").html("")}),$(function(){$("a.page-scroll").bind("click",function(a){var b=$(this);$("html, body").stop().animate({scrollTop:$(b.attr("href")).offset().top},1500,"easeInOutExpo"),a.preventDefault()})}),$("body").scrollspy({target:".navbar-fixed-top"}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});