"use strict";
var KTSigninTwoSteps = function () {
	var t, e;
	return {
		init: function () {
			t = document.querySelector("#kt_sing_in_two_steps_form"), (e = document.querySelector("#kt_sing_in_two_steps_submit")).addEventListener("click", (function (n) {
				n.preventDefault();
				var i = !0,
					o = [].slice.call(t.querySelectorAll('input[maxlength="1"]'));
				o.map((function (t) {
					"" !== t.value && 0 !== t.value.length || (i = !1)
				})), !0 === i ? (e.setAttribute("data-kt-indicator", "on"), e.disabled = !0, setTimeout((function () {
					e.removeAttribute("data-kt-indicator"), e.disabled = !1, Swal.fire({
						text: "You have been successfully verified!",
						icon: "success",
						buttonsStyling: !1,
						confirmButtonText: "Ok, got it!",
						customClass: {
							confirmButton: "btn btn-primary"
						}
					}).then((function (e) {
						if (e.isConfirmed) {
							o.map((function (t) {
								t.value = ""
							}));
							var n = t.getAttribute("data-kt-redirect-url");
							n && (location.href = n)
						}
					}))
				}), 1e3)) : swal.fire({
					text: "Please enter valid securtiy code and try again.",
					icon: "error",
					buttonsStyling: !1,
					confirmButtonText: "Ok, got it!",
					customClass: {
						confirmButton: "btn fw-bold btn-light-primary"
					}
				}).then((function () {
					KTUtil.scrollTop()
				}))
			}))
		}
	}
}();
KTUtil.onDOMContentLoaded((function () {
	KTSigninTwoSteps.init()
}));