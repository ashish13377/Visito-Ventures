"use strict";
//Compliances pie chart : START
var KTChartsWidget19 = {
	init: function () {
		! function () {
			if ("undefined" != typeof am5) {
				var e = document.getElementById("kt_charts_widget_19_chart_1");
				e && am5.ready((function () {
					var a = am5.Root.new(e);
					a.setThemes([am5themes_Animated.new(a)]);
					var t = a.container.children.push(am5radar.RadarChart.new(a, {
							panX: !1,
							panY: !1,
							wheelX: "panX",
							wheelY: "zoomX",
							innerRadius: am5.percent(25),
							startAngle: -90,
							endAngle: 180
						})),
						l = [{
							category: "Green Area",
							value: 80,
							full: 100,
							columnSettings: {
								fillOpacity: 1,
								fill: am5.color(KTUtil.getCssVariableValue("--bs-info"))
							}
						}, {
							category: "Afforestation",
							value: 60,
							full: 100,
							columnSettings: {
								fillOpacity: 1,
								fill: am5.color(KTUtil.getCssVariableValue("--bs-danger"))
							}
						}, {
							category: "Renewable Energy",
							value: 92,
							full: 100,
							columnSettings: {
								fillOpacity: 1,
								fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
							}
						}, {
							category: "Rain Water ",
							value: 60,
							full: 100,
							columnSettings: {
								fillOpacity: 1,
								fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
							}
						}];
					t.set("cursor", am5radar.RadarCursor.new(a, {
						behavior: "zoomX"
					})).lineY.set("visible", !1);
					var o = am5radar.AxisRendererCircular.new(a, {});
					o.labels.template.setAll({
						radius: 10
					}), o.grid.template.setAll({
						forceHidden: !0
					});
					var r = t.xAxes.push(am5xy.ValueAxis.new(a, {
							renderer: o,
							min: 0,
							max: 100,
							strictMinMax: !0,
							numberFormat: "#'%'",
							tooltip: am5.Tooltip.new(a, {})
						})),
						i = am5radar.AxisRendererRadial.new(a, {
							minGridDistance: 20
						});
					i.labels.template.setAll({
						centerX: am5.p100,
						fontWeight: "500",
						fontSize: 16,
						fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
						templateField: "columnSettings"
					}), i.grid.template.setAll({
						forceHidden: !0
					});
					var s = t.yAxes.push(am5xy.CategoryAxis.new(a, {
						categoryField: "category",
						renderer: i
					}));
					s.data.setAll(l);
					var n = t.series.push(am5radar.RadarColumnSeries.new(a, {
						xAxis: r,
						yAxis: s,
						clustered: !1,
						valueXField: "full",
						categoryYField: "category",
						fill: a.interfaceColors.get("alternativeBackground")
					}));
					n.columns.template.setAll({
						width: am5.p100,
						fillOpacity: .08,
						strokeOpacity: 0,
						cornerRadius: 20
					}), n.data.setAll(l);
					var m = t.series.push(am5radar.RadarColumnSeries.new(a, {
						xAxis: r,
						yAxis: s,
						clustered: !1,
						valueXField: "value",
						categoryYField: "category"
					}));
					m.columns.template.setAll({
						width: am5.p100,
						strokeOpacity: 0,
						tooltipText: "{category}: {valueX}%",
						cornerRadius: 40,
						templateField: "columnSettings"
					}), m.data.setAll(l), n.appear(1e3), m.appear(1e3), t.appear(1e3, 100)
				}))
			}
		}(),
		function () {
			if ("undefined" != typeof am5) {
				var e = document.getElementById("kt_charts_widget_19_chart_2");
				e && am5.ready((function () {
					var a = am5.Root.new(e);
					a.setThemes([am5themes_Animated.new(a)]);
					var t = a.container.children.push(am5radar.RadarChart.new(a, {
							panX: !1,
							panY: !1,
							wheelX: "panX",
							wheelY: "zoomX",
							innerRadius: am5.percent(20),
							startAngle: -90,
							endAngle: 180
						})),
						l = [{
							category: "Research",
							value: 40,
							full: 100,
							columnSettings: {
								fillOpacity: 1,
								fill: am5.color(KTUtil.getCssVariableValue("--bs-info"))
							}
						}, {
							category: "Marketing",
							value: 50,
							full: 100,
							columnSettings: {
								fillOpacity: 1,
								fill: am5.color(KTUtil.getCssVariableValue("--bs-danger"))
							}
						}, {
							category: "Distribution",
							value: 80,
							full: 100,
							columnSettings: {
								fillOpacity: 1,
								fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
							}
						}, {
							category: "Human Resources",
							value: 70,
							full: 100,
							columnSettings: {
								fillOpacity: 1,
								fill: am5.color(KTUtil.getCssVariableValue("--bs-success"))
							}
						}];
					t.set("cursor", am5radar.RadarCursor.new(a, {
						behavior: "zoomX"
					})).lineY.set("visible", !1);
					var o = am5radar.AxisRendererCircular.new(a, {});
					o.labels.template.setAll({
						radius: 10
					}), o.grid.template.setAll({
						forceHidden: !0
					});
					var r = t.xAxes.push(am5xy.ValueAxis.new(a, {
							renderer: o,
							min: 0,
							max: 100,
							strictMinMax: !0,
							numberFormat: "#'%'",
							tooltip: am5.Tooltip.new(a, {})
						})),
						i = am5radar.AxisRendererRadial.new(a, {
							minGridDistance: 20
						});
					i.labels.template.setAll({
						centerX: am5.p100,
						fontWeight: "500",
						fontSize: 6,
						fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
						templateField: "columnSettings"
					}), i.grid.template.setAll({
						forceHidden: !0
					});
					var s = t.yAxes.push(am5xy.CategoryAxis.new(a, {
						categoryField: "category",
						renderer: i
					}));
					s.data.setAll(l);
					var n = t.series.push(am5radar.RadarColumnSeries.new(a, {
						xAxis: r,
						yAxis: s,
						clustered: !1,
						valueXField: "full",
						categoryYField: "category",
						fill: a.interfaceColors.get("alternativeBackground")
					}));
					n.columns.template.setAll({
						width: am5.p100,
						fillOpacity: .08,
						strokeOpacity: 0,
						cornerRadius: 20
					}), n.data.setAll(l);
					var m = t.series.push(am5radar.RadarColumnSeries.new(a, {
						xAxis: r,
						yAxis: s,
						clustered: !1,
						valueXField: "value",
						categoryYField: "category"
					}));
					m.columns.template.setAll({
						width: am5.p100,
						strokeOpacity: 0,
						tooltipText: "{category}: {valueX}%",
						cornerRadius: 20,
						templateField: "columnSettings"
					}), m.data.setAll(l), n.appear(1e3), m.appear(1e3), t.appear(1e3, 100)
				}))
			}
		}()
	}
};
"undefined" != typeof module && (module.exports = KTChartsWidget19), KTUtil.onDOMContentLoaded((function () {
	KTChartsWidget19.init()
}));
//Chart : END





//Hazardous Waste Chart : START
var KTChartsWidget33 = function () {
	var e = function (e, a, t, l, o) {
		var r = document.querySelector(a);
		if (r) {
			var i = r.getAttribute("data-kt-chart-color"),
				s = parseInt(KTUtil.css(r, "height")),
				n = KTUtil.getCssVariableValue("--bs-gray-500"),
				m = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
				d = KTUtil.getCssVariableValue("--bs-" + i),
				g = new ApexCharts(r, {
					series: [{
						name: "Stock ",
						data: [30, 32, 32, 33, 35, 35, 33.5, 28, 29.5, 30]
					},{
						name: "Generation ",
						data: [20, 32, 30, 31.5, 35, 35, 33.5, 34, 32.5, 30]
					},{
						name: "Disposal ",
						data: [30, 25, 32, 34.5, 42, 35, 35, 34, 32.5, 33]
					}],
					chart: {
						fontFamily: "inherit",
						type: "area",
						height: s,
						toolbar: {
							show: !1
						}
					},
					legend: {
						show: !1
					},
					dataLabels: {
						enabled: !1
					},
					fill: {
						type: "gradient",
						gradient: {
							shadeIntensity: 1,
							opacityFrom: .4,
							opacityTo: .2,
							stops: [15, 120, 100]
						}
					},
					stroke: {
						curve: "smooth",
						show: !0,
						width: 3,
						colors: [d, "#50CD89", "#F1416C"]
					},
					xaxis: {
						categories: l,
						axisBorder: {
							show: !1
						},
						axisTicks: {
							show: !1
						},
						offsetX: 20,
						tickAmount: 4,
						labels: {
							rotate: 0,
							rotateAlways: !1,
							show: !1,
							style: {
								colors: n,
								fontSize: "12px"
							}
						},
						crosshairs: {
							position: "front",
							stroke: {
								color: d,
								width: 1,
								dashArray: 3
							}
						},
						tooltip: {
							enabled: !0,
							formatter: void 0,
							offsetY: 0,
							style: {
								fontSize: "12px"
							}
						}
					},
					yaxis: {
						tickAmount: 4,
						max: 50,
						min: 20,
						labels: {
							show: !1
						}
					},
					states: {
						normal: {
							filter: {
								type: "none",
								value: 0
							}
						},
						hover: {
							filter: {
								type: "none",
								value: 0
							}
						},
						active: {
							allowMultipleDataPointsSelection: !1,
							filter: {
								type: "none",
								value: 0
							}
						}
					},
					tooltip: {
						style: {
							fontSize: "12px"
						},
						y: {
							formatter: function (e) {
								return e 
							}
						}
					},
					colors: [d, "#50CD89", "#F1416C"],
					grid: {
						borderColor: m,
						strokeDashArray: 3,
						yaxis: {
							lines: {
								show: !0
							}
						}
					},
					markers: {
						strokeColor: d,
						strokeWidth: 3
					}
				}),
				c = !1,
				f = document.querySelector(e);
			!0 === o && (g.render(), c = !0), f.addEventListener("shown.bs.tab", (function (e) {
				0 == c && (g.render(), c = !0)
			}))
		}
	};
	return {
		init: function () {
			e("#kt_charts_widget_33_tab_1", "#kt_charts_widget_33_chart_1", [2100, 3200, 3200, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200, 3e3, 3e3, 3250, 3250], ["10AM", "10.30AM", "11AM", "11.15AM", "11.30AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM"], !0), e("#kt_charts_widget_33_tab_2", "#kt_charts_widget_33_chart_2", [2300, 2300, 2e3, 3200, 3200, 2800, 2400, 2400, 3100, 2900, 3100, 3100, 2600, 2600, 3200], ["Apr 01", "Apr 02", "Apr 03", "Apr 04", "Apr 05", "Apr 06", "Apr 07", "Apr 08", "Apr 09", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 15"], !1), e("#kt_charts_widget_33_tab_3", "#kt_charts_widget_33_chart_3", [2600, 3200, 2300, 2300, 2e3, 3200, 3100, 2900, 3200, 3200, 2600, 3100, 2800, 2400, 2400], ["Apr 02", "Apr 03", "Apr 04", "Apr 05", "Apr 06", "Apr 09", "Apr 10", "Apr 12", "Apr 14", "Apr 17", "Apr 18", "Apr 18", "Apr 20", "Apr 22", "Apr 24"], !1), e("#kt_charts_widget_33_tab_4", "#kt_charts_widget_33_chart_4", [1800, 1800, 2400, 2400, 3200, 3200, 3e3, 2100, 3200, 3300, 2400, 2400, 3e3, 3200, 3100], ["Jun 2021", "Jul 2021", "Aug 2021", "Sep 2021", "Oct 2021", "Nov 2021", "Dec 2021", "Jan 2022", "Feb 2022", "Mar 2022", "Apr 2022", "May 2022", "Jun 2022", "Jul 2022", "Aug 2022"], !1), e("#kt_charts_widget_33_tab_5", "#kt_charts_widget_33_chart_5", [3e3, 2100, 3300, 3100, 1800, 1800, 2400, 2400, 3100, 3100, 2400, 2400, 3e3, 2400, 2800], ["Sep 2021", "Oct 2021", "Nov 2021", "Dec 2021", "Jan 2022", "Feb 2022", "Mar 2022", "Apr 2022", "May 2022", "Jun 2022", "Jul 2022", "Aug 2022", "Sep 2022", "Oct 2022", "Nov 2022"], !1)
		}
	}
}();
"undefined" != typeof module && (module.exports = KTChartsWidget33), KTUtil.onDOMContentLoaded((function () {
	KTChartsWidget33.init()
}));
//Hazardous Waste Chart : END

//Air & Noise Chart
var KTChartsWidget20 = {
	init: function () {
		! function () {
			var e = document.getElementById("kt_charts_widget_20");
			if (e) {
				var a = parseInt(KTUtil.css(e, "height")),
					t = KTUtil.getCssVariableValue("--bs-gray-500"),
					l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
					i = e.getAttribute("data-kt-chart-color"),
					o = KTUtil.getCssVariableValue("--bs-danger"),
					q = KTUtil.getCssVariableValue("--bs-indigo"),
					r = KTUtil.getCssVariableValue("--bs-red"),
					s = new ApexCharts(e, {
						series: [{
							name: "AQ",
							data: [22, 34, 35, 35, 36, 38, 38, 39, 39, 41]
						},{
							name: "Noise Monitoring",
							data: [30, 32, 32, 31.5, 35, 35, 33.5, 34, 32.5, 30]
						}],
						chart: {
							fontFamily: "inherit",
							type: "area",
							height: a,
							toolbar: {
								show: !1
							}
						},
						plotOptions: {},
						legend: {
							show: !1
						},
						dataLabels: {
							enabled: !1
						},
						fill: {
							type: "gradient",
							gradient: {
								shadeIntensity: 1,
								opacityFrom: .4,
								opacityTo: 0,
								stops: [0, 80, 100]
							}
						},
						stroke: {
							curve: "smooth",
							show: !0,
							width: 3,
							colors: [o, q]
						},
						xaxis: {
							categories: ["", "Apr 02", "Apr 03", "Apr 04", "Apr 05", "Apr 06", "Apr 07", "Apr 08", "Apr 09", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 17", "Apr 18", "Apr 19", "Apr 21", ""],
							axisBorder: {
								show: !1
							},
							axisTicks: {
								show: !1
							},
							tickAmount: 6,
							labels: {
								rotate: 0,
								rotateAlways: !0,
								style: {
									colors: t,
									fontSize: "12px"
								}
							},
							crosshairs: {
								position: "front",
								stroke: {
									color: o,
									width: 1,
									dashArray: 3
								}
							},
							tooltip: {
								enabled: !0,
								formatter: void 0,
								offsetY: 0,
								style: {
									fontSize: "12px"
								}
							}
						},
						yaxis: {
							max: 41,
							min: 20,
							tickAmount: 6,
							labels: {
								style: {
									colors: t, q,
									fontSize: "12px"
								},
								formatter: function (e) {
									return parseInt(10* e)
								}
							}
						},
						states: {
							normal: {
								filter: {
									type: "none",
									value: 0
								}
							},
							hover: {
								filter: {
									type: "none",
									value: 0
								}
							},
							active: {
								allowMultipleDataPointsSelection: !1,
								filter: {
									type: "none",
									value: 0
								}
							}
						},
						tooltip: {
							style: {
								fontSize: "12px"
							},
							y: {
								formatter: function (e) {
									return parseInt(10 * e)
								}
							}
						},
						colors: [r, q],
						grid: {
							borderColor: l,
							strokeDashArray: 4,
							yaxis: {
								lines: {
									show: !0
								}
							}
						},
						markers: {
							strokeColor: o,
							strokeWidth: 3
						}
					});
				setTimeout((function () {
					s.render()
				}), 200)
			}
		}()
	}
};
"undefined" != typeof module && (module.exports = KTChartsWidget20), KTUtil.onDOMContentLoaded((function () {
	KTChartsWidget20.init()
}));
//Chart : END

//Waste Waste Chart : START
var KTChartsWidget23 = {
	init: function () {
		! function () {
			if ("undefined" != typeof am5) {
				var e = document.getElementById("kt_charts_widget_23");
				e && am5.ready((function () {
					var a = am5.Root.new(e);
					a.setThemes([am5themes_Animated.new(a)]);
					var t = a.container.children.push(am5xy.XYChart.new(a, {
							panX: !1,
							panY: !1,
							layout: a.verticalLayout
						})),
						l = [{
							year: "2016",
							qty: 23.5,
							ci: 21.1,
							do: 15.3,
							columnSettings: {
								fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
							}
						}, {
							year: "2017",
							qty: 30.2,
							ci: 16.5,
							do: 23.3,
							columnSettings: {
								fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
							}
						}, {
							year: "2018",
							qty: 34.1,
							ci: 19.9,
							do: 15.3,
							columnSettings: {
								fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
							}
						}, {
							year: "2019",
							qty: 31.5,
							ci: 16.2,
							do: 15.3,
							columnSettings: {
								fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
							}
						}, {
							year: "2020",
							qty: 30.6,
							ci: 28.2,
							do: 15.3,
							strokeSettings: {
								strokeWidth: 3,
								strokeDasharray: [5, 5]
							},
							columnSettings: {
								fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
							}
						}, {
							year: "2021",
							qty: 40.6,
							ci: 28.2,							
							do: 15.3,
							strokeSettings: {
								strokeWidth: 3,
								strokeDasharray: [5, 5]
							},
							columnSettings: {
								fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
							}
						}, {
							year: "2022",
							qty: 34.1,
							ci: 32.9,							
							do: 15.3,
							strokeSettings: {
								strokeWidth: 3,
								strokeDasharray: [5, 5]
							},
							columnSettings: {
								fill: am5.color(KTUtil.getCssVariableValue("--bs-primary"))
							}
						}],
						o = t.xAxes.push(am5xy.CategoryAxis.new(a, {
							categoryField: "year",
							renderer: am5xy.AxisRendererX.new(a, {})
						}));
					o.data.setAll(l), o.get("renderer").labels.template.setAll({
						paddingTop: 20,
						fontWeight: "400",
						fontSize: 11,
						fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
					}), o.get("renderer").grid.template.setAll({
						disabled: !0,
						strokeOpacity: 0
					});
					var r = t.yAxes.push(am5xy.ValueAxis.new(a, {
						min: 0,
						extraMax: .1,
						renderer: am5xy.AxisRendererY.new(a, {})
					}));
					r.get("renderer").labels.template.setAll({
						paddingTop: 0,
						fontWeight: "400",
						fontSize: 11,
						fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500"))
					}), r.get("renderer").grid.template.setAll({
						stroke: am5.color(KTUtil.getCssVariableValue("--bs-gray-300")),
						strokeWidth: 1,
						strokeOpacity: 1,
						strokeDasharray: [3]
					});
					var i = t.series.push(am5xy.ColumnSeries.new(a, {
						name: "Generation & Treatment",
						xAxis: o,
						yAxis: r,
						valueYField: "qty",
						categoryXField: "year",
						tooltip: am5.Tooltip.new(a, {
							pointerOrientation: "horizontal",
							labelText: "{name} in {categoryX}: {valueY} {info}"
						})
					}));
					i.columns.template.setAll({
						tooltipY: am5.percent(10),
						templateField: "columnSettings"
					}), i.data.setAll(l);

					var q = t.series.push(am5xy.LineSeries.new(a, {
						name: "Discharged Outside",
						xAxis: o,
						yAxis: r,
						valueYField: "do",
						categoryXField: "year",
						tooltip: am5.Tooltip.new(a, {
							pointerOrientation: "horizontal",
							labelText: "{name} in {categoryX}: {valueY} {info}"
						})
					}));

					var s = t.series.push(am5xy.LineSeries.new(a, {
						name: "Consumed Internally",
						xAxis: o,
						yAxis: r,
						valueYField: "ci",
						categoryXField: "year",
						fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
						stroke: am5.color(KTUtil.getCssVariableValue("--bs-success")),
						tooltip: am5.Tooltip.new(a, {
							pointerOrientation: "horizontal",
							labelText: "{name} in {categoryX}: {valueY} {info}"
						})
					}));
					
					q.strokes.template.setAll({
						stroke: am5.color(KTUtil.getCssVariableValue("--bs-warning"))
					}), q.strokes.template.setAll({
						strokeWidth: 3,
						templateField: "strokeSettings"
					}), q.data.setAll(l), q.bullets.push((function () {
						return am5.Bullet.new(a, {
							sprite: am5.Circle.new(a, {
								strokeWidth: 3,
								stroke: am5.color(KTUtil.getCssVariableValue("--bs-warning")),
								radius: 5,
								fill: am5.color(KTUtil.getCssVariableValue("--bs-warning"))
							})
						})
					})),s.strokes.template.setAll({
						stroke: am5.color(KTUtil.getCssVariableValue("--bs-success"))
					}), s.strokes.template.setAll({
						strokeWidth: 3,
						templateField: "strokeSettings"
					}), s.data.setAll(l), s.bullets.push((function () {
						return am5.Bullet.new(a, {
							sprite: am5.Circle.new(a, {
								strokeWidth: 3,
								stroke: am5.color(KTUtil.getCssVariableValue("--bs-success")),
								radius: 5,
								fill: am5.color(KTUtil.getCssVariableValue("--bs-light-success"))
							})
						})
					})), i.columns.template.setAll({
						strokeOpacity: 0,
						cornerRadiusBR: 0,
						cornerRadiusTR: 6,
						cornerRadiusBL: 0,
						cornerRadiusTL: 6
					}), t.set("cursor", am5xy.XYCursor.new(a, {})), t.get("cursor").lineX.setAll({
						visible: !1
					}), t.get("cursor").lineY.setAll({
						visible: !1
					}), t.children.push(am5.Legend.new(a, {
						centerX: am5.p50,
						x: am5.p50
					})).data.setAll(t.series.values), t.appear(1e3, 100), i.appear()
				}))
			}
		}()
	}
};
"undefined" != typeof module && (module.exports = KTChartsWidget23), KTUtil.onDOMContentLoaded((function () {
	KTChartsWidget23.init()
}));
//Waste Water Chart : END