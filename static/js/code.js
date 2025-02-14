document.addEventListener("alpine:init", () => {
  Alpine.data("CAPSTONEWIDGET", () => {
    return {
      title: "MAXIMUM UNSUPPORTED SPAN API",
      workflow: false,
      homepage: true,
      about: false,
      UCS_Virgin_Stress_Ratio: false,
      Jn_Description: false,
      Jr_Description: false,
      Ja_Description: false,
      Jw_Description: false,
      Rock_Quality_Designator: false,
      Rock_Quality_Index_Q_Value: false,
      Stress_Reduction_Ratio: false,
      Rock_Mass_Rating: false,
      Excavation_Category: false,
      Maximum_Unsupported_Span: false,
      contact_us: false,
      history: false,
      dashboard: true,
      mainMenu: false,
      message: "",
      keys: "",
      // Jn value declaratipn
      JnDesc: "",
      JnVal: "",
      keys: "",
      value_Jn: "",
      dictJn: [
        "Intact no or few joints(39)",
        "one joint set(34)",
        "one joint set plus random joints(4)",
        "two joint set(20)",
        "two joint set plus random joints(22)",
        "three joint set(31)",
        "three joint set plus random joint(27)",
        "Four or more joint set|random joint|heavily jointed|sugar cube(47)",
        "crushed rock|eathlike(42)",
        "intact or few joints with intersections(37)",
        "one joint set with intersections(35)",
        "one joint set plus random joints with intersections(5)",
        "two joint sets plus intersections(21)",
        "two joint set plus random joints with intersections(23)",
        "three joint sets with intersections(32)",
        "three joint sets plus random joints with intersections(28)",
        "Four or more joint set|random joint|heavily jointed|sugar cube with intersections(49)",
        "crushed rock|eathlike with intersections(48)",
        "intact | no or few joints with portals(38)",
        "one joint set with portals(36)",
        "one joint set plus random joints with portals(3)",
        "two joint sets with portals(19)",
        "two joint sets plus random joints with portals(7)",
        "three joint sets with portals(24)",
        "three joint sets plus random joints with portals(25)",
        "Four or more joint sets| random|heavily jointed|sugar|cubed with portals(39)",
        "crushed rock|earthlike with portals(40)",
        "Massive no or few joints(10)",
        "one joint set(11)",
        "one joint set plus random(0)",
        "two joint set(16)",
        "two joint set plus random(8)",
        "Three joint set(31)",
        "Three joint set plus random(29)",
        "Four or more joint set random heavily jointed sugar cube(45)",
        "crushed rock earthlike(43)",
        "Massive no or few joints with intersections(14)",
        "one joint set with intersections(12)",
        "one joint set plus random with intersections(1)",
        "two joint set with intersections(17)",
        "two joint set plus random with intersections(9)",
        "Three joint set with intersections(32)",
        "Three joint set plus random with intersections(30)",
        "Four or more joint set random heavily jointed sugar cube with intersections(46)",
        "crushed rock earthlike with intersections(44)",
        "Massive no or few joints with portals(15)",
        "one joint set with portals(13)",
        "one joint set plus random with portals(2)",
        "two joint set with portals(18)",
        "two joint set plus random with portals(6)",
        "Three joint set with portals(24)",
        "Three joint set plus random with portals(26)",
        "Four or more joint set random heavily jointed sugar cube with portals(39)",
        "crushed rock earthlike with portals(41)",
        "Intact no or few joints(33)",
        "one joint set(34)",
        "one joint set plus random joints(4)",
        "two joint set(20)",
        "two joint set plus random joints(22)",
        "three joint set(31)",
        "three joint set plus random joint(27)",
        "Four or more joint set|random joint|heavily jointed|sugar cube(47)",
        "crushed rock|eathlike(42)",
        "intact or few joints with intersections(37)",
        "one joint set with intersections(35)",
        "one joint set plus random joints with intersections(5)",
        "two joint sets plus intersections(21)",
        "two joint set plus random joints with intersections(23)",
        "three joint sets with intersections(49)",
        "three joint sets plus random joints with intersections(48)",
        "Four or more joint set|random joint|heavily jointed|sugar cube with intersections(38)",
        "crushed rock|eathlike with intersections(3)",
        "intact | no or few joints with portals(19)",
        "one joint set with portals(7)",
        "one joint set plus random joints with portals(24)",
        "two joint sets with portals(25)",
        "two joint sets plus random joints with portals(39)",
        "three joint sets with portals(40)",
        "three joint sets plus random joints with portals(10)",
        "Four or more joint sets| random|heavily jointed|sugar|cubed with portals(11)",
        "crushed rock|earthlike with portals(0)",
        "Massive no or few joints(16)",
        "one joint set(8)",
        "one joint set plus random(31)",
        "two joint set(29)",
        "two joint set plus random(45)",
        "Three joint set(43)",
        "Three joint set plus random(14)",
        "Four or more joint set random heavily jointed sugar cube(12)",
        "crushed rock earthlike(1)",
        "Massive no or few joints with intersections(17)",
        "one joint set with intersections(9)",
        "one joint set plus random with intersections(32)",
        "two joint set with intersections(30)",
        "two joint set plus random with intersections(46)",
        "Three joint set with intersections(44)",
        "Three joint set plus random with intersections(15)",
        "Four or more joint set random heavily jointed sugar cube with intersections(13)",
        "crushed rock earthlike with intersections(2)",
        "Massive no or few joints with portals(18)",
        "one joint set with portals(31)",
        "one joint set plus random with portals(29)",
        "two joint set with portals(45)",
        "two joint set plus random with portals(43)",
        "Three joint set with portals(14)",
        "Three joint set plus random with portals(12)",
        "Four or more joint set random heavily jointed sugar cube with portals(1)",
        "crushed rock earthlike with portals(17)",
        "one joint set with intersections(9)",
        "one joint set plus random with intersections(32)",
        "two joint set with intersections(30)",
        "two joint set plus random with intersections(46)",
        "Three joint set with intersections(44)",
        "Three joint set plus random with intersections(15)",
        "Four or more joint set random heavily jointed sugar cube with intersections(13)",
        "crushed rock earthlike with intersections(18)",
        "Massive no or few joints with portals(6)",
        "one joint set with portals(34)",
        "one joint set plus random with portals(4)",
        "two joint set with portals(20)",
        "two joint set plus random with portals(31)",
        "Three joint set with portals(27)",
        "Three joint set plus random with portals(47)",
        "Four or more joint set random heavily jointed sugar cube with portals(42)",
        "crushed rock earthlike with portals(35)",
        "Intact no or few joints(5)",
        "one joint set(21)",
        "one joint set plus random joints(23)",
        "two joint set(32)",
        "two joint set plus random joints(49)",
        "three joint set(48)",
        "three joint set plus random joint(38)",
        "Four or more joint set|random joint|heavily jointed|sugar cube(36)",
        "crushed rock|eathlike(3)",
        "intact or few joints with intersections(19)",
        "one joint set with intersections(7)",
        "one joint set plus random joints with intersections(24)",
        "two joint sets plus intersections(25)",
        "two joint set plus random joints with intersections(39)",
        "three joint sets with intersections(40)",
        "three joint sets plus random joints with intersections(10)",
        "Four or more joint set|random joint|heavily jointed|sugar cube with intersections(11)",
        "crushed rock|eathlike with intersections(0)",
        "intact | no or few joints with portals(16)",
        "one joint set with portals(8)",
        "one joint set plus random joints with portals(31)",
        "two joint sets with portals(29)",
        "two joint sets plus random joints with portals(45)",
        "three joint sets with portals(43)",
        "three joint sets plus random joints with portals(14)",
        "Four or more joint sets| random|heavily jointed|sugar|cubed with portals(12)",
        "crushed rock|earthlike with portals(1)",
        "Massive no or few joints(17)",
        "one joint set(9)",
        "one joint set plus random(32)",
        "two joint set(30)",
        "two joint set plus random(46)",
        "Three joint set(44)",
        "Three joint set plus random(15)",
        "Four or more joint set random heavily jointed sugar cube(13)",
        "crushed rock earthlike(2)",
        "Massive no or few joints with intersections(18)",
        "one joint set with intersections(6)",
        "one joint set plus random with intersections(24)",
        "two joint set with intersections(26)",
        "two joint set plus random with intersections(39)",
        "Three joint set with intersections(41)",
        "Three joint set plus random with intersections(33)",
        "Four or more joint set random heavily jointed sugar cube with intersections(34)",
        "crushed rock earthlike with intersections(4)",
        "Massive no or few joints with portals(20)",
        "one joint set with portals(3)",
        "one joint set plus random with portals(24)",
        "two joint set with portals(25)",
        "two joint set plus random with portals(39)",
        "Three joint set with portals(40)",
        "Three joint set plus random with portals(10)",
        "Four or more joint set random heavily jointed sugar cube with portals(11)",
        "crushed rock earthlike with portals(0)",
        "Intact no or few joints(16)",
        "one joint set(8)",
        "one joint set plus random joints(31)",
        "two joint set(29)",
        "two joint set plus random joints(45)",
        "three joint set(43)",
        "three joint set plus random joint(14)",
        "Four or more joint set|random joint|heavily jointed|sugar cube(12)",
        "crushed rock|eathlike(1)",
        "intact or few joints with intersections(17)",
        "one joint set with intersections(9)",
        "one joint set plus random joints with intersections(32)",
        "two joint sets plus intersections(30)",
        "two joint set plus random joints with intersections(46)",
        "three joint sets with intersections(44)",
        "three joint sets plus random joints with intersections(15)",
        "Four or more joint set|random joint|heavily jointed|sugar cube with intersections(13)",
        "crushed rock|eathlike with intersections(2)",
        "intact | no or few joints with portals(18)",
        "one joint set with portals(6)",
        "one joint set plus random joints with portals(24)",
        "two joint sets with portals(26)",
        "two joint sets plus random joints with portals(39)",
        "three joint sets with portals(41)",
        "three joint sets plus random joints with portals(33)",
        "Four or more joint sets| random|heavily jointed|sugar|cubed with portals(34)",
        "crushed rock|earthlike with portals(4)",
        "Massive no or few joints(20)",
        "one joint set(22)",
        "one joint set plus random(31)",
        "two joint set(27)",
        "two joint set plus random(47)",
        "Three joint set(42)",
        "Three joint set plus random(5)",
        "Four or more joint set random heavily jointed sugar cube(32)",
        "crushed rock earthlike(28)",
        "Massive no or few joints with intersections(49)",
        "one joint set with intersections(48)",
        "one joint set plus random with intersections(38)",
        "two joint set with intersections(36)",
        "two joint set plus random with intersections(3)",
        "Three joint set with intersections(19)",
        "Three joint set plus random with intersections(7)",
        "Four or more joint set random heavily jointed sugar cube with intersections(24)",
        "crushed rock earthlike with intersections(25)",
        "Massive no or few joints with portals(39)",
        "one joint set with portals(40)",
        "one joint set plus random with portals(10)",
        "two joint set with portals(11)",
        "two joint set plus random with portals(0)",
        "Three joint set with portals(16)",
        "Three joint set plus random with portals(8)",
        "Four or more joint set random heavily jointed sugar cube with portals(31)",
        "crushed rock earthlike with portals(29)",
        "Intact no or few joints(45)",
        "one joint set(43)",
        "one joint set plus random joints(14)",
        "two joint set(12)",
        "two joint set plus random joints(1)",
        "three joint set(17)",
        "three joint set plus random joint(29)",
        "Four or more joint set|random joint|heavily jointed|sugar cube(45)",
        "crushed rock|eathlike(43)",
        "intact or few joints with intersections(14)",
        "one joint set with intersections(12)",
        "one joint set plus random joints with intersections(1)",
        "two joint sets plus intersections(17)",
        "two joint set plus random joints with intersections(9)",
        "three joint sets with intersections(32)",
        "three joint sets plus random joints with intersections(30)",
        "Four or more joint set|random joint|heavily jointed|sugar cube with intersections(46)",
        "crushed rock|eathlike with intersections(44)",
        "intact | no or few joints with portals(15)",
        "one joint set with portals(13)",
        "one joint set plus random joints with portals(2)",
        "two joint sets with portals(18)",
        "two joint sets plus random joints with portals(6)",
        "three joint sets with portals(24)",
        "three joint sets plus random joints with portals(26)",
        "Four or more joint sets| random|heavily jointed|sugar|cubed with portals(39)",
        "crushed rock|earthlike with portals(41)",
        "Massive no or few joints(33)",
        "one joint set(34)",
        "one joint set plus random(4)",
        "two joint set(20)",
        "two joint set plus random(22)",
        "Three joint set(31)",
        "Three joint set plus random(27)",
        "Four or more joint set random heavily jointed sugar cube(47)",
        "crushed rock earthlike(42)",
        "Massive no or few joints with intersections(37)",
        "one joint set with intersections(35)",
        "one joint set plus random with intersections(5)",
        "two joint set with intersections(21)",
        "two joint set plus random with intersections(23)",
        "Three joint set with intersections(32)",
        "Three joint set plus random with intersections(28)",
        "Four or more joint set random heavily jointed sugar cube with intersections(49)",
        "crushed rock earthlike with intersections(48)",
        "Massive no or few joints with portals(38)",
        "one joint set with portals(36)",
        "one joint set plus random with portals(3)",
        "two joint set with portals(19)",
        "two joint set plus random with portals(7)",
        "Three joint set with portals(24)",
        "Three joint set plus random with portals(25)",
        "Four or more joint set random heavily jointed sugar cube with portals(39)",
        "crushed rock earthlike with portals(40)",
        "one joint set with intersections(10)",
        "one joint set plus random with intersections(11)",
        "two joint set with intersections(0)",
        "two joint set plus random with intersections(16)",
        "Three joint set with intersections(8)",
        "Three joint set plus random with intersections(31)",
        "Four or more joint set random heavily jointed sugar cube with intersections(29)",
        "crushed rock earthlike with intersections(45)",
        "Massive no or few joints with portals(43)",
        "one joint set with portals(14)",
        "one joint set plus random with portals(12)",
        "two joint set with portals(1)",
        "two joint set plus random with portals(17)",
        "Three joint set with portals(9)",
        "Three joint set plus random with portals(32)",
        "Four or more joint set random heavily jointed sugar cube with portals(30)",
        "crushed rock earthlike with portals(46)",
        "Intact no or few joints(44)",
        "one joint set(15)",
        "one joint set plus random joints(13)",
        "two joint set(2)",
        "two joint set plus random joints(18)",
        "three joint set(24)",
        "three joint set plus random joint(25)",
        "Four or more joint set|random joint|heavily jointed|sugar cube(39)",
        "crushed rock|eathlike(40)",
        "intact or few joints with intersections(10)",
        "one joint set with intersections(11)",
        "one joint set plus random joints with intersections(0)",
        "two joint sets plus intersections(16)",
        "two joint set plus random joints with intersections(8)",
        "three joint sets with intersections(31)",
        "three joint sets plus random joints with intersections(29)",
        "Four or more joint set|random joint|heavily jointed|sugar cube with intersections(45)",
        "crushed rock|eathlike with intersections(43)",
        "intact | no or few joints with portals(14)",
        "one joint set with portals(12)",
        "one joint set plus random joints with portals(1)",
        "two joint sets with portals(17)",
        "two joint sets plus random joints with portals(9)",
        "three joint sets with portals(32)",
        "three joint sets plus random joints with portals(44)",
        "Four or more joint sets| random|heavily jointed|sugar|cubed with portals(15)",
        "crushed rock|earthlike with portals(13)",
        "Massive no or few joints(2)",
        "one joint set(6)",
        "one joint set plus random(24)",
        "two joint set(26)",
        "two joint set plus random(39)",
        "Three joint set(41)",
        "Three joint set plus random(33)",
        "Four or more joint set random heavily jointed sugar cube(34)",
        "crushed rock earthlike(4)",
        "Massive no or few joints with intersections(20)",
        "one joint set with intersections(22)",
        "one joint set plus random with intersections(31)",
        "two joint set with intersections(27)",
        "two joint set plus random with intersections(47)",
        "Three joint set with intersections(42)",
        "Three joint set plus random with intersections(37)",
        "Four or more joint set random heavily jointed sugar cube with intersections(5)",
        "crushed rock earthlike with intersections(49)",
        "Massive no or few joints with portals(48)",
        "one joint set with portals(38)",
        "one joint set plus random with portals(36)",
        "two joint set with portals(19)",
        "two joint set plus random with portals(25)",
        "Three joint set with portals(39)",
        "Three joint set plus random with portals(10)",
        "Four or more joint set random heavily jointed sugar cube with portals(11)",
        "crushed rock earthlike with portals(0)",
        "one joint set(16)",
        "one joint set plus random(8)",
        "two joint set(31)",
        "two joint set plus random(32)",
        "Three joint set(30)",
        "Three joint set plus random(46)",
        "Four or more joint set random heavily jointed sugar cube(44)",
        "crushed rock earthlike(15)",
        "Massive no or few joints with intersections(13)",
        "one joint set with intersections(2)",
        "one joint set plus random with intersections(18)",
        "two joint set with intersections(31)",
        "two joint set plus random with intersections(29)",
        "Three joint set with intersections(45)",
        "Three joint set plus random with intersections(43)",
        "Four or more joint set random heavily jointed sugar cube with intersections(9)",
        "crushed rock earthlike with intersections(32)",
        "Massive no or few joints with portals(46)",
        "one joint set with portals(15)",
        "one joint set plus random with portals(13)",
        "two joint set with portals(2)",
        "two joint set plus random with portals(18)",
        "Three joint set with portals(6)",
        "Three joint set plus random with portals(24)",
        "Four or more joint set random heavily jointed sugar cube with portals(26)",
        "crushed rock earthlike with portals(39)",
        "Intact no or few joints(41)",
        "one joint set(33)",
        "one joint set plus random joints(34)",
        "two joint set(4)",
        "two joint set plus random joints(20)",
        "three joint set(22)",
        "three joint set plus random joint(31)",
        "Four or more joint set|random joint|heavily jointed|sugar cube(27)",
        "crushed rock|eathlike(47)",
        "intact or few joints with intersections(42)",
        "one joint set with intersections(37)",
        "one joint set plus random joints with intersections(35)",
        "two joint sets plus intersections(5)",
        "two joint set plus random joints with intersections(21)",
        "three joint sets with intersections(23)",
        "three joint sets plus random joints with intersections(49)",
        "Four or more joint set|random joint|heavily jointed|sugar cube with intersections(36)",
        "crushed rock|eathlike with intersections(19)",
        "intact | no or few joints with portals(7)",
        "one joint set with portals(24)",
        "one joint set plus random joints with portals(39)",
        "two joint sets with portals(40)",
        "two joint sets plus random joints with portals(10)",
        "three joint sets with portals(11)",
        "three joint sets plus random joints with portals(0)",
        "Four or more joint sets| random|heavily jointed|sugar|cubed with portals(8)",
        "crushed rock|earthlike with portals(29)",
        "Massive no or few joints(45)",
        "one joint set(43)",
        "one joint set plus random(14)",
        "two joint set(12)",
        "two joint set plus random(1)",
        "Three joint set(17)",
        "Three joint set plus random(9)",
        "Four or more joint set random heavily jointed sugar cube(32)",
        "crushed rock earthlike(30)",
        "Massive no or few joints with intersections(46)",
        "one joint set with intersections(44)",
        "one joint set plus random with intersections(15)",
        "two joint set with intersections(13)",
        "two joint set plus random with intersections(2)",
        "Three joint set with intersections(18)",
        "Three joint set plus random with intersections(6)",
        "Four or more joint set random heavily jointed sugar cube with intersections(24)",
        "crushed rock earthlike with intersections(26)",
        "Massive no or few joints with portals(39)",
        "one joint set with portals(41)",
        "one joint set plus random with portals(33)",
        "two joint set with portals(34)",
        "two joint set plus random with portals(4)",
        "Three joint set with portals(20)",
        "Three joint set plus random with portals(22)",
        "Four or more joint set random heavily jointed sugar cube with portals(31)",
        "crushed rock earthlike with portals(27)",
        "one joint set with intersections(47)",
        "one joint set plus random with intersections(42)",
        "two joint set with intersections(37)",
        "two joint set plus random with intersections(35)",
        "Three joint set with intersections(5)",
        "Three joint set plus random with intersections(23)",
        "Four or more joint set random heavily jointed sugar cube with intersections(48)",
        "crushed rock earthlike with intersections(3)",
        "Massive no or few joints with portals(19)",
        "one joint set with portals(7)",
        "one joint set plus random with portals(24)",
        "two joint set with portals(25)",
        "two joint set plus random with portals(39)",
        "Three joint set with portals(40)",
        "Three joint set plus random with portals(10)",
        "Four or more joint set random heavily jointed sugar cube with portals(11)",
        "crushed rock earthlike with portals(0)",
        "Intact no or few joints(16)",
        "one joint set(8)",
        "one joint set plus random joints(31)",
        "two joint set(29)",
        "two joint set plus random joints(45)",
        "three joint set(43)",
        "three joint set plus random joint(14)",
        "Four or more joint set|random joint|heavily jointed|sugar cube(12)",
        "crushed rock|eathlike(1)",
        "intact or few joints with intersections(32)",
        "one joint set with intersections(30)",
        "one joint set plus random joints with intersections(46)",
        "two joint sets plus intersections(44)",
        "two joint set plus random joints with intersections(15)",
        "three joint sets with intersections(13)",
        "three joint sets plus random joints with intersections(2)",
        "Four or more joint set|random joint|heavily jointed|sugar cube with intersections(18)",
        "crushed rock|eathlike with intersections(6)",
        "intact | no or few joints with portals(24)",
        "one joint set with portals(26)",
        "one joint set plus random joints with portals(41)",
        "two joint sets with portals(33)",
        "two joint sets plus random joints with portals(34)",
        "three joint sets with portals(4)",
        "three joint sets plus random joints with portals(20)",
        "Four or more joint sets| random|heavily jointed|sugar|cubed with portals(22)",
        "crushed rock|earthlike with portals(31)",
        "Massive no or few joints(27)",
        "one joint set(47)",
        "one joint set plus random(42)",
        "two joint set(37)",
        "two joint set plus random(35)",
        "Three joint set(5)",
        "Three joint set plus random(21)",
        "Four or more joint set random heavily jointed sugar cube(23)",
        "crushed rock earthlike(32)",
        "Massive no or few joints with intersections(28)",
        "one joint set with intersections(49)",
        "one joint set plus random with intersections(48)",
        "two joint set with intersections(38)",
        "two joint set plus random with intersections(36)",
        "Three joint set with intersections(3)",
        "Three joint set plus random with intersections(19)",
        "Four or more joint set random heavily jointed sugar cube with intersections(7)",
        "crushed rock earthlike with intersections(24)",
        "Massive no or few joints with portals(25)",
        "one joint set with portals(39)",
        "one joint set plus random with portals(40)",
        "two joint set with portals(10)",
      ],
      // Ja value declaratipn
      JaDesc: "",
      JaVal: "",
      value_Ja: "",
      dictJa: [
        "tightly healed|hard|non softening|impermeable rock mineral filing less than 1mm of joint seperation(317)",
        "tightly healed|hard|non softening|impermeable rock mineral filing between 10mm to 50mm joint seperation(234)",
        "tightly healed|hard|non softening|impermeable rock mineral filing above 5000mm joint seperation(233)",
        "unaltered joint walls|surface staining only with less than 1mm joint seperation(232)",
        "unaltered joint walls|surface staining only between 10mm to 50mm joint seperation(228)",
        "unaltered joint walls|surface staining only above 5000mm joint seperation(227)",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing less than 1mm of joint seperation(226)",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing between 10mm to 50mm joint seperation(225)",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing above 5000mm joint seperation(223)",
        "non softening|slightly clayey non cohesive less than 1mm of joint seperation(224)",
        "non softening|slightly clayey non cohesive between 10mm to 50mm joint seperation(291)",
        "non softening|slightly clayey non cohesive above 5000mm joint seperation(290)",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock less than 1mm of joint seperation(289)",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock between 10mm to 50mm joint seperation(288)",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock filing above 5000mm joint seperation(287)",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays less than 1mm of joint seperation(286)",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays between 10mm to 50mm joint seperation(231)",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays above 5000mm joint seperation(230)",
        "softening moderately over consolidated clay mineral filing with or without crushed rock less than 1mm of joint seperation(229)",
        "softening moderately over consolidated clay mineral filing with or without crushed rock between 10mm to 50mm joint seperation(171)",
        "softening moderately over consolidated clay mineral filing with or without crushed rock above 5000mm joint seperation(169)",
        "shattered or micro shattered swelling clay gouge with or without crushed rock less than 1mm of joint seperation(173)",
        "shattered or micro shattered swelling clay gouge with or without crushed rock between 10mm to 50mm joint seperation(167)",
        "shattered or micro shattered swelling clay gouge with or without crushed rock above 5000mm joint seperation(167)",
        "Tightly healed impermeable filling(199)",
        "Tightly healed hard and non softening impermeable filling(175)",
        "Tightly healed non softening(292)",
        "Tightly healed(201)",
        "Tightly healed(203)",
        "Unaltered joint walls surface staining only(205)",
        "Unaltered joint walls(207)",
        "surface staining only(209)",
        "Unaltered joint walls surface staining only at residual frictional angle of 25 degrees(211)",
        "Unaltered joint walls surface staining only at residual frictional angle of 26 degrees(213)",
        "Unaltered joint walls surface staining only at residual frictional angle of 27 degrees(215)",
        "Unaltered joint walls surface staining only at residual frictional angle of 28 degrees(217)",
        "Unaltered joint walls surface staining only at residual frictional angle of 29 degrees(219)",
        "Unaltered joint walls surface staining only at residual frictional angle of 30 degrees(221)",
        "Unaltered joint walls surface staining only at residual frictional angle of 31 degrees(177)",
        "Unaltered joint walls surface staining only at residual frictional angle of 32 degrees(179)",
        "Unaltered joint walls surface staining only at residual frictional angle of 33 degrees(181)",
        "Unaltered joint walls surface staining only at residual frictional angle of 34 degrees(183)",
        "Unaltered joint walls surface staining only at residual frictional angle of 35 degrees(185)",
        "Unaltered joint walls at residual frictional angle of 25 degrees(187)",
        "Unaltered joint walls at residual frictional angle of 26 degrees(189)",
        "Unaltered joint walls at residual frictional angle of 27 degrees(191)",
        "Unaltered joint walls at residual frictional angle of 28 degrees(193)",
        "Unaltered joint walls at residual frictional angle of 29 degrees(195)",
        "Unaltered joint walls at residual frictional angle of 30 degrees(197)",
        "Unaltered joint walls at residual frictional angle of 31 degrees(294)",
        "Unaltered joint walls at residual frictional angle of 32 degrees(296)",
        "Unaltered joint walls at residual frictional angle of 33 degrees(298)",
        "Unaltered joint walls at residual frictional angle of 34 degrees(300)",
        "Unaltered joint walls at residual frictional angle of 55 degrees(302)",
        "surface staining only at residual frictional angle of 25 degrees(304)",
        "surface staining only at residual frictional angle of 26 degrees(306)",
        "surface staining only at residual frictional angle of 27 degrees(308)",
        "surface staining only at residual frictional angle of 28 degrees(310)",
        "surface staining only at residual frictional angle of 29 degrees(312)",
        "surface staining only at residual frictional angle of 30 degrees(314)",
        "surface staining only at residual frictional angle of 31 degrees(58)",
        "surface staining only at residual frictional angle of 32 degrees(30)",
        "surface staining only at residual frictional angle of 33 degrees(44)",
        "surface staining only at residual frictional angle of 34 degrees(2)",
        "surface staining only at residual frictional angle of 35 degrees(16)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks(60)",
        "SLightly altered joint walls disintegrated rocks(62)",
        "SLightly altered joint walls non softening mineral coatings(64)",
        "SLightly altered joint sandy particles(70)",
        "SLightly altered joint walls clay free(32)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 25 degrees(34)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 26 degrees(38)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 27 degrees(40)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 28 degrees(42)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 29 degrees(46)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 30 degrees(48)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 25 degrees(50)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 26 degrees(52)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 27 degrees(54)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 28 degrees(56)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 29 degrees(4)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 30 degrees(6)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 25 degrees(8)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 26 degrees(10)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 27 degrees(12)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 28 degrees(14)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 29 degrees(18)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 30 degrees(20)",
        "SLightly altered joint sandy particles at residual frictional angle of 25 degrees(22)",
        "SLightly altered joint sandy particles at residual frictional angle of 26 degrees(24)",
        "SLightly altered joint sandy particles at residual frictional angle of 27 degrees(26)",
        "SLightly altered joint sandy particles at residual frictional angle of 28 degrees(28)",
        "SLightly altered joint sandy particles at residual frictional angle of 29 degrees(120)",
        "SLightly altered joint sandy particles at residual frictional angle of 30 degrees(134)",
        "SLightly altered joint walls clay free at residual frictional angle of 25 degrees(106)",
        "SLightly altered joint walls clay free at residual frictional angle of 26 degrees(72)",
        "SLightly altered joint walls clay free at residual frictional angle of 27 degrees(86)",
        "SLightly altered joint walls clay free at residual frictional angle of 28 degrees(122)",
        "SLightly altered joint walls clay free at residual frictional angle of 29 degrees(124)",
        "SLightly altered joint walls clay free at residual frictional angle of 30 degrees(126)",
        "Silty or sandy clay coatings small clay fractions non softening(128)",
        "Silty small clay fractions non softening(130)",
        "Silty non softening(132)",
        "Sandy clay coatings non softening(136)",
        "Sandy clay coatings with small clay fractions(138)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 20 degrees(140)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 21 degrees(142)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 22 degrees(144)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 23 degrees(146)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 24 degrees(108)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 25 degrees(110)",
        "Silty small clay fractions non softening at residual frictional angle of 20 degrees(112)",
        "Silty small clay fractions non softening at residual frictional angle of 21 degrees(114)",
        "Silty small clay fractions non softening at residual frictional angle of 22 degrees(116)",
        "Silty small clay fractions non softening at residual frictional angle of 23 degrees(118)",
        "Silty small clay fractions non softening at residual frictional angle of 24 degrees(76)",
        "Silty small clay fractions non softening at residual frictional angle of 25 degrees(78)",
        "Silty non softening at residual frictional angle of 20 degrees(92)",
        "Silty non softening at residual frictional angle of 21 degrees(94)",
        "Silty non softening at residual frictional angle of 22 degrees(96)",
        "Silty non softening at residual frictional angle of 23 degrees(172)",
        "Silty non softening at residual frictional angle of 24 degrees(170)",
        "Silty non softening at residual frictional angle of 25 degrees(174)",
        "Sandy clay coatings non softening at residual frictional angle of 20 degrees(168)",
        "Sandy clay coatings non softening at residual frictional angle of 21 degrees(200)",
        "Sandy clay coatings non softening at residual frictional angle of 22 degrees(176)",
        "Sandy clay coatings non softening at residual frictional angle of 23 degrees(293)",
        "Sandy clay coatings non softening at residual frictional angle of 24 degrees(202)",
        "Sandy clay coatings non softening at residual frictional angle of 25 degrees(204)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 20 degrees(208)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 21 degrees(210)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 22 degrees(212)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 23 degrees(214)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 24 degrees(216)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 25 degrees(218)",
        "Tightly healed impermeable filling Rock wall contact(220)",
        "Tightly healed hard and non softening impermeable filling Rock wall contact(222)",
        "Tightly healed non softening Rock wall contact(178)",
        "Tightly healed Rock wall contact(180)",
        "Tightly healed Rock wall contact(182)",
        "Unaltered joint walls surface staining only Rock wall contact(184)",
        "Unaltered joint walls Rock wall contact(186)",
        "surface staining only Rock wall contact(188)",
        "Unaltered joint walls surface staining only at residual frictional angle of 25 degrees Rock wall contact(190)",
        "Unaltered joint walls surface staining only at residual frictional angle of 26 degrees Rock wall contact(192)",
        "Unaltered joint walls surface staining only at residual frictional angle of 27 degrees Rock wall contact(194)",
        "Unaltered joint walls surface staining only at residual frictional angle of 28 degrees Rock wall contact(196)",
        "Unaltered joint walls surface staining only at residual frictional angle of 29 degrees Rock wall contact(198)",
        "Unaltered joint walls surface staining only at residual frictional angle of 30 degrees Rock wall contact(295)",
        "Unaltered joint walls surface staining only at residual frictional angle of 31 degrees Rock wall contact(297)",
        "Unaltered joint walls surface staining only at residual frictional angle of 32 degrees Rock wall contact(299)",
        "Unaltered joint walls surface staining only at residual frictional angle of 33 degrees Rock wall contact(301)",
        "Unaltered joint walls surface staining only at residual frictional angle of 34 degrees Rock wall contact(303)",
        "Unaltered joint walls surface staining only at residual frictional angle of 35 degrees Rock wall contact(305)",
        "Unaltered joint walls at residual frictional angle of 25 degrees Rock wall contact(307)",
        "Unaltered joint walls at residual frictional angle of 26 degrees Rock wall contact(309)",
        "Unaltered joint walls at residual frictional angle of 27 degrees Rock wall contact(311)",
        "Unaltered joint walls at residual frictional angle of 28 degrees Rock wall contact(313)",
        "Unaltered joint walls at residual frictional angle of 29 degrees Rock wall contact(315)",
        "Unaltered joint walls at residual frictional angle of 30 degrees Rock wall contact(59)",
        "Unaltered joint walls at residual frictional angle of 31 degrees Rock wall contact(31)",
        "Unaltered joint walls at residual frictional angle of 32 degrees Rock wall contact(45)",
        "Unaltered joint walls at residual frictional angle of 33 degrees Rock wall contact(3)",
        "Unaltered joint walls at residual frictional angle of 34 degrees Rock wall contact(17)",
        "Unaltered joint walls at residual frictional angle of 55 degrees Rock wall contact(61)",
        "surface staining only at residual frictional angle of 25 degrees Rock wall contact(63)",
        "surface staining only at residual frictional angle of 26 degrees Rock wall contact(65)",
        "surface staining only at residual frictional angle of 27 degrees Rock wall contact(67)",
        "surface staining only at residual frictional angle of 28 degrees Rock wall contact(69)",
        "surface staining only at residual frictional angle of 29 degrees Rock wall contact(71)",
        "surface staining only at residual frictional angle of 30 degrees Rock wall contact(33)",
        "surface staining only at residual frictional angle of 31 degrees Rock wall contact(15)",
        "surface staining only at residual frictional angle of 32 degrees Rock wall contact(23)",
        "surface staining only at residual frictional angle of 33 degrees Rock wall contact(25)",
        "surface staining only at residual frictional angle of 34 degrees Rock wall contact(27)",
        "surface staining only at residual frictional angle of 35 degrees Rock wall contact(29)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks Rock wall contact(121)",
        "SLightly altered joint walls disintegrated rocks Rock wall contact(135)",
        "SLightly altered joint walls non softening mineral coatings Rock wall contact(107)",
        "SLightly altered joint sandy particles Rock wall contact(73)",
        "SLightly altered joint walls clay free Rock wall contact(87)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 25 degrees Rock wall contact(123)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 26 degrees Rock wall contact(125)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 27 degrees Rock wall contact(127)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 28 degrees Rock wall contact(129)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 29 degrees Rock wall contact(131)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 30 degrees Rock wall contact(133)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 25 degrees Rock wall contact(137)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 26 degrees Rock wall contact(139)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 27 degrees Rock wall contact(141)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 28 degrees Rock wall contact(143)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 29 degrees Rock wall contact(145)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 30 degrees Rock wall contact(147)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 25 degrees Rock wall contact(109)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 26 degrees Rock wall contact(111)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 27 degrees Rock wall contact(113)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 28 degrees Rock wall contact(115)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 29 degrees Rock wall contact(117)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 30 degrees Rock wall contact(119)",
        "SLightly altered joint sandy particles at residual frictional angle of 25 degrees Rock wall contact(75)",
        "SLightly altered joint sandy particles at residual frictional angle of 26 degrees Rock wall contact(77)",
        "SLightly altered joint sandy particles at residual frictional angle of 27 degrees Rock wall contact(79)",
        "SLightly altered joint sandy particles at residual frictional angle of 28 degrees Rock wall contact(81)",
        "SLightly altered joint sandy particles at residual frictional angle of 29 degrees Rock wall contact(83)",
        "SLightly altered joint sandy particles at residual frictional angle of 30 degrees Rock wall contact(85)",
        "SLightly altered joint walls clay free at residual frictional angle of 25 degrees Rock wall contact(89)",
        "SLightly altered joint walls clay free at residual frictional angle of 26 degrees Rock wall contact(91)",
        "SLightly altered joint walls clay free at residual frictional angle of 27 degrees Rock wall contact(93)",
        "SLightly altered joint walls clay free at residual frictional angle of 28 degrees Rock wall contact(95)",
        "SLightly altered joint walls clay free at residual frictional angle of 29 degrees Rock wall contact(97)",
        "SLightly altered joint walls clay free at residual frictional angle of 30 degrees Rock wall contact(99)",
        "Silty or sandy clay coatings small clay fractions non softening Rock wall contact(316)",
        "Silty small clay fractions non softening Rock wall contact(317)",
        "Silty non softening Rock wall contact(234)",
        "Sandy clay coatings non softening Rock wall contact(233)",
        "Sandy clay coatings with small clay fractions Rock wall contact(232)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 20 degrees Rock wall contact(228)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 21 degrees Rock wall contact(227)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 22 degrees Rock wall contact(226)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 23 degrees Rock wall contact(225)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 24 degrees Rock wall contact(223)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 25 degrees Rock wall contact(224)",
        "Silty small clay fractions non softening at residual frictional angle of 20 degrees Rock wall contact(291)",
        "Silty small clay fractions non softening at residual frictional angle of 21 degrees Rock wall contact(290)",
        "Silty small clay fractions non softening at residual frictional angle of 22 degrees Rock wall contact(289)",
        "Silty small clay fractions non softening at residual frictional angle of 23 degrees Rock wall contact(288)",
        "Silty small clay fractions non softening at residual frictional angle of 24 degrees Rock wall contact(287)",
        "Silty small clay fractions non softening at residual frictional angle of 25 degrees Rock wall contact(286)",
        "Silty non softening at residual frictional angle of 20 degrees Rock wall contact(231)",
        "Silty non softening at residual frictional angle of 21 degrees Rock wall contact(230)",
        "Silty non softening at residual frictional angle of 22 degrees Rock wall contact(229)",
        "Silty non softening at residual frictional angle of 23 degrees Rock wall contact(171)",
        "Silty non softening at residual frictional angle of 24 degrees Rock wall contact(169)",
        "Silty non softening at residual frictional angle of 25 degrees Rock wall contact(173)",
        "Sandy clay coatings non softening at residual frictional angle of 20 degrees Rock wall contact(167)",
        "Sandy clay coatings non softening at residual frictional angle of 21 degrees Rock wall contact(167)",
        "Sandy clay coatings non softening at residual frictional angle of 22 degrees Rock wall contact(199)",
        "Sandy clay coatings non softening at residual frictional angle of 23 degrees Rock wall contact(175)",
        "Sandy clay coatings non softening at residual frictional angle of 24 degrees Rock wall contact(292)",
        "Sandy clay coatings non softening at residual frictional angle of 25 degrees Rock wall contact(221)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 20 degrees Rock wall contact(177)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 21 degrees Rock wall contact(179)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 22 degrees Rock wall contact(181)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 23 degrees Rock wall contact(183)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 24 degrees Rock wall contact(185)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 25 degrees Rock wall contact(187)",
        "tightly healed|hard|non softening|impermeable rock mineral filing less than 1mm of joint seperation(189)",
        "tightly healed|hard|non softening|impermeable rock mineral filing between 10mm to 50mm joint seperation(191)",
        "tightly healed|hard|non softening|impermeable rock mineral filing above 5000mm joint seperation(193)",
        "unaltered joint walls|surface staining only with less than 1mm joint seperation(195)",
        "unaltered joint walls|surface staining only between 10mm to 50mm joint seperation(197)",
        "unaltered joint walls|surface staining only above 5000mm joint seperation(294)",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing less than 1mm of joint seperation(296)",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing between 10mm to 50mm joint seperation(298)",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing above 5000mm joint seperation(300)",
        "non softening|slightly clayey non cohesive less than 1mm of joint seperation(302)",
        "non softening|slightly clayey non cohesive between 10mm to 50mm joint seperation(304)",
        "non softening|slightly clayey non cohesive above 5000mm joint seperation(306)",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock less than 1mm of joint seperation(308)",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock between 10mm to 50mm joint seperation(310)",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock filing above 5000mm joint seperation(312)",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays less than 1mm of joint seperation(314)",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays between 10mm to 50mm joint seperation(58)",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays above 5000mm joint seperation(30)",
        "softening moderately over consolidated clay mineral filing with or without crushed rock less than 1mm of joint seperation(44)",
        "softening moderately over consolidated clay mineral filing with or without crushed rock between 10mm to 50mm joint seperation(2)",
        "softening moderately over consolidated clay mineral filing with or without crushed rock above 5000mm joint seperation(16)",
        "shattered or micro shattered swelling clay gouge with or without crushed rock less than 1mm of joint seperation(60)",
        "shattered or micro shattered swelling clay gouge with or without crushed rock between 10mm to 50mm joint seperation(62)",
        "shattered or micro shattered swelling clay gouge with or without crushed rock above 5000mm joint seperation(64)",
        "Tightly healed impermeable filling(66)",
        "Tightly healed hard and non softening impermeable filling(68)",
        "Tightly healed non softening(70)",
        "Tightly healed(32)",
        "Tightly healed(34)",
        "Unaltered joint walls surface staining only(36)",
        "Unaltered joint walls(38)",
        "surface staining only(40)",
        "Unaltered joint walls surface staining only at residual frictional angle of 25 degrees(42)",
        "Unaltered joint walls surface staining only at residual frictional angle of 26 degrees(46)",
        "Unaltered joint walls surface staining only at residual frictional angle of 27 degrees(48)",
        "Unaltered joint walls surface staining only at residual frictional angle of 28 degrees(50)",
        "Unaltered joint walls surface staining only at residual frictional angle of 29 degrees(52)",
        "Unaltered joint walls surface staining only at residual frictional angle of 30 degrees(54)",
        "Unaltered joint walls surface staining only at residual frictional angle of 31 degrees(56)",
        "Unaltered joint walls surface staining only at residual frictional angle of 32 degrees(4)",
        "Unaltered joint walls surface staining only at residual frictional angle of 33 degrees(6)",
        "Unaltered joint walls surface staining only at residual frictional angle of 34 degrees(8)",
        "Unaltered joint walls surface staining only at residual frictional angle of 35 degrees(10)",
        "Unaltered joint walls at residual frictional angle of 25 degrees(12)",
        "Unaltered joint walls at residual frictional angle of 26 degrees(14)",
        "Unaltered joint walls at residual frictional angle of 27 degrees(18)",
        "Unaltered joint walls at residual frictional angle of 28 degrees(20)",
        "Unaltered joint walls at residual frictional angle of 29 degrees(22)",
        "Unaltered joint walls at residual frictional angle of 30 degrees(24)",
        "Unaltered joint walls at residual frictional angle of 31 degrees(26)",
        "Unaltered joint walls at residual frictional angle of 32 degrees(28)",
        "Unaltered joint walls at residual frictional angle of 33 degrees(120)",
        "Unaltered joint walls at residual frictional angle of 34 degrees(134)",
        "Unaltered joint walls at residual frictional angle of 55 degrees(106)",
        "surface staining only at residual frictional angle of 25 degrees(72)",
        "surface staining only at residual frictional angle of 26 degrees(86)",
        "surface staining only at residual frictional angle of 27 degrees(122)",
        "surface staining only at residual frictional angle of 28 degrees(124)",
        "surface staining only at residual frictional angle of 29 degrees(126)",
        "surface staining only at residual frictional angle of 30 degrees(128)",
        "surface staining only at residual frictional angle of 31 degrees(130)",
        "surface staining only at residual frictional angle of 32 degrees(132)",
        "surface staining only at residual frictional angle of 33 degrees(136)",
        "surface staining only at residual frictional angle of 34 degrees(138)",
        "surface staining only at residual frictional angle of 35 degrees(140)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks(142)",
        "SLightly altered joint walls disintegrated rocks(144)",
        "SLightly altered joint walls non softening mineral coatings(146)",
        "SLightly altered joint sandy particles(108)",
        "SLightly altered joint walls clay free(110)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 25 degrees(112)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 26 degrees(114)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 27 degrees(116)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 28 degrees(118)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 29 degrees(74)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 30 degrees(76)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 25 degrees(78)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 26 degrees(80)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 27 degrees(82)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 28 degrees(84)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 29 degrees(88)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 30 degrees(90)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 25 degrees(96)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 26 degrees(98)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 27 degrees(172)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 28 degrees(170)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 29 degrees(168)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 30 degrees(168)",
        "SLightly altered joint sandy particles at residual frictional angle of 25 degrees(200)",
        "SLightly altered joint sandy particles at residual frictional angle of 26 degrees(176)",
        "SLightly altered joint sandy particles at residual frictional angle of 27 degrees(293)",
        "SLightly altered joint sandy particles at residual frictional angle of 28 degrees(202)",
        "SLightly altered joint sandy particles at residual frictional angle of 29 degrees(204)",
        "SLightly altered joint sandy particles at residual frictional angle of 30 degrees(206)",
        "SLightly altered joint walls clay free at residual frictional angle of 25 degrees(208)",
        "SLightly altered joint walls clay free at residual frictional angle of 26 degrees(210)",
        "SLightly altered joint walls clay free at residual frictional angle of 27 degrees(212)",
        "SLightly altered joint walls clay free at residual frictional angle of 28 degrees(214)",
        "SLightly altered joint walls clay free at residual frictional angle of 29 degrees(216)",
        "SLightly altered joint walls clay free at residual frictional angle of 30 degrees(218)",
        "Silty or sandy clay coatings small clay fractions non softening(220)",
        "Silty small clay fractions non softening(178)",
        "Silty non softening(188)",
        "Sandy clay coatings non softening(190)",
        "Sandy clay coatings with small clay fractions(192)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 20 degrees(194)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 21 degrees(198)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 22 degrees(299)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 23 degrees(301)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 24 degrees(305)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 25 degrees(307)",
        "Silty small clay fractions non softening at residual frictional angle of 20 degrees(309)",
        "Silty small clay fractions non softening at residual frictional angle of 21 degrees(311)",
        "Silty small clay fractions non softening at residual frictional angle of 22 degrees(313)",
        "Silty small clay fractions non softening at residual frictional angle of 23 degrees(315)",
        "Silty small clay fractions non softening at residual frictional angle of 24 degrees(297)",
        "Silty small clay fractions non softening at residual frictional angle of 25 degrees(299)",
        "Silty non softening at residual frictional angle of 20 degrees(301)",
        "Silty non softening at residual frictional angle of 21 degrees(303)",
        "Silty non softening at residual frictional angle of 22 degrees(305)",
        "Silty non softening at residual frictional angle of 23 degrees(307)",
        "Silty non softening at residual frictional angle of 24 degrees(309)",
        "Silty non softening at residual frictional angle of 25 degrees(311)",
        "Sandy clay coatings non softening at residual frictional angle of 20 degrees(313)",
        "Sandy clay coatings non softening at residual frictional angle of 21 degrees(315)",
        "Sandy clay coatings non softening at residual frictional angle of 22 degrees(59)",
        "Sandy clay coatings non softening at residual frictional angle of 23 degrees(31)",
        "Sandy clay coatings non softening at residual frictional angle of 24 degrees(63)",
        "Sandy clay coatings non softening at residual frictional angle of 25 degrees(65)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 20 degrees(69)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 21 degrees(33)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 22 degrees(35)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 23 degrees(37)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 24 degrees(39)",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 25 degrees(41)",
        "Tightly healed impermeable filling Rock wall contact(43)",
        "Tightly healed hard and non softening impermeable filling Rock wall contact(47)",
        "Tightly healed non softening Rock wall contact(49)",
        "Tightly healed Rock wall contact(51)",
        "Tightly healed Rock wall contact(53)",
        "Unaltered joint walls surface staining only Rock wall contact(55)",
        "Unaltered joint walls Rock wall contact(57)",
        "surface staining only Rock wall contact(5)",
        "Unaltered joint walls surface staining only at residual frictional angle of 25 degrees Rock wall contact(7)",
        "Unaltered joint walls surface staining only at residual frictional angle of 26 degrees Rock wall contact(9)",
        "Unaltered joint walls surface staining only at residual frictional angle of 27 degrees Rock wall contact(11)",
        "Unaltered joint walls surface staining only at residual frictional angle of 28 degrees Rock wall contact(13)",
        "Unaltered joint walls surface staining only at residual frictional angle of 29 degrees Rock wall contact(15)",
        "Unaltered joint walls surface staining only at residual frictional angle of 30 degrees Rock wall contact(19)",
        "Unaltered joint walls surface staining only at residual frictional angle of 31 degrees Rock wall contact(21)",
        "Unaltered joint walls surface staining only at residual frictional angle of 32 degrees Rock wall contact(23)",
        "Unaltered joint walls surface staining only at residual frictional angle of 33 degrees Rock wall contact(25)",
        "Unaltered joint walls surface staining only at residual frictional angle of 34 degrees Rock wall contact(27)",
        "Unaltered joint walls surface staining only at residual frictional angle of 35 degrees Rock wall contact(135)",
        "Unaltered joint walls at residual frictional angle of 25 degrees Rock wall contact(87)",
        "Unaltered joint walls at residual frictional angle of 26 degrees Rock wall contact(125)",
        "Unaltered joint walls at residual frictional angle of 27 degrees Rock wall contact(127)",
        "Unaltered joint walls at residual frictional angle of 28 degrees Rock wall contact(129)",
        "Unaltered joint walls at residual frictional angle of 29 degrees Rock wall contact(133)",
        "Unaltered joint walls at residual frictional angle of 30 degrees Rock wall contact(137)",
        "Unaltered joint walls at residual frictional angle of 31 degrees Rock wall contact(139)",
        "Unaltered joint walls at residual frictional angle of 32 degrees Rock wall contact(141)",
        "Unaltered joint walls at residual frictional angle of 33 degrees Rock wall contact(143)",
        "Unaltered joint walls at residual frictional angle of 34 degrees Rock wall contact(147)",
        "Unaltered joint walls at residual frictional angle of 55 degrees Rock wall contact(111)",
        "surface staining only at residual frictional angle of 25 degrees Rock wall contact(113)",
        "surface staining only at residual frictional angle of 26 degrees Rock wall contact(115)",
        "surface staining only at residual frictional angle of 27 degrees Rock wall contact(117)",
        "surface staining only at residual frictional angle of 28 degrees Rock wall contact(119)",
        "surface staining only at residual frictional angle of 29 degrees Rock wall contact(75)",
        "surface staining only at residual frictional angle of 30 degrees Rock wall contact(77)",
        "surface staining only at residual frictional angle of 31 degrees Rock wall contact(79)",
        "surface staining only at residual frictional angle of 32 degrees Rock wall contact(81)",
        "surface staining only at residual frictional angle of 33 degrees Rock wall contact(83)",
        "surface staining only at residual frictional angle of 34 degrees Rock wall contact(85)",
        "surface staining only at residual frictional angle of 35 degrees Rock wall contact(89)",
        "Unaltered joint walls at residual frictional angle of 29 degrees Rock wall contact(91)",
        "Unaltered joint walls at residual frictional angle of 30 degrees Rock wall contact(93)",
        "Unaltered joint walls at residual frictional angle of 31 degrees Rock wall contact(95)",
        "Unaltered joint walls at residual frictional angle of 32 degrees Rock wall contact(97)",
        "Unaltered joint walls at residual frictional angle of 33 degrees Rock wall contact(99)",
        "Unaltered joint walls at residual frictional angle of 34 degrees Rock wall contact(148)",
        "Unaltered joint walls at residual frictional angle of 55 degrees Rock wall contact(156)",
        "surface staining only at residual frictional angle of 25 degrees Rock wall contact(157)",
        "surface staining only at residual frictional angle of 26 degrees Rock wall contact(149)",
        "surface staining only at residual frictional angle of 27 degrees Rock wall contact(150)",
        "surface staining only at residual frictional angle of 28 degrees Rock wall contact(151)",
        "surface staining only at residual frictional angle of 29 degrees Rock wall contact(152)",
        "surface staining only at residual frictional angle of 30 degrees Rock wall contact(153)",
        "surface staining only at residual frictional angle of 31 degrees Rock wall contact(154)",
        "surface staining only at residual frictional angle of 32 degrees Rock wall contact(155)",
        "surface staining only at residual frictional angle of 33 degrees Rock wall contact(264)",
        "surface staining only at residual frictional angle of 34 degrees Rock wall contact(268)",
        "surface staining only at residual frictional angle of 35 degrees Rock wall contact(235)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks Rock wall contact(278)",
        "SLightly altered joint walls disintegrated rocks Rock wall contact(255)",
        "SLightly altered joint walls non softening mineral coatings Rock wall contact(245)",
        "SLightly altered joint sandy particles Rock wall contact(267)",
        "SLightly altered joint walls clay free Rock wall contact(265)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 25 degrees Rock wall contact(266)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 26 degrees Rock wall contact(276)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 27 degrees Rock wall contact(277)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 28 degrees Rock wall contact(269)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 29 degrees Rock wall contact(270)",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 30 degrees Rock wall contact(271)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 25 degrees Rock wall contact(272)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 26 degrees Rock wall contact(273)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 27 degrees Rock wall contact(274)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 28 degrees Rock wall contact(275)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 29 degrees Rock wall contact(243)",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 30 degrees Rock wall contact(244)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 25 degrees Rock wall contact(236)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 26 degrees Rock wall contact(237)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 27 degrees Rock wall contact(238)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 28 degrees Rock wall contact(239)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 29 degrees Rock wall contact(240)",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 30 degrees Rock wall contact(241)",
        "SLightly altered joint sandy particles at residual frictional angle of 25 degrees Rock wall contact(242)",
        "SLightly altered joint sandy particles at residual frictional angle of 26 degrees Rock wall contact(279)",
        "SLightly altered joint sandy particles at residual frictional angle of 27 degrees Rock wall contact(280)",
        "SLightly altered joint sandy particles at residual frictional angle of 28 degrees Rock wall contact(281)",
        "SLightly altered joint sandy particles at residual frictional angle of 29 degrees Rock wall contact(282)",
        "SLightly altered joint sandy particles at residual frictional angle of 30 degrees Rock wall contact(283)",
        "SLightly altered joint walls clay free at residual frictional angle of 25 degrees Rock wall contact(284)",
        "SLightly altered joint walls clay free at residual frictional angle of 26 degrees Rock wall contact(285)",
        "SLightly altered joint walls clay free at residual frictional angle of 27 degrees Rock wall contact(262)",
        "SLightly altered joint walls clay free at residual frictional angle of 28 degrees Rock wall contact(263)",
        "SLightly altered joint walls clay free at residual frictional angle of 29 degrees Rock wall contact(256)",
        "SLightly altered joint walls clay free at residual frictional angle of 30 degrees Rock wall contact(257)",
        "Silty or sandy clay coatings small clay fractions non softening Rock wall contact(258)",
        "Silty small clay fractions non softening Rock wall contact(259)",
        "Silty non softening Rock wall contact(260)",
        "Sandy clay coatings non softening Rock wall contact(261)",
        "Sandy clay coatings with small clay fractions Rock wall contact(253)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 20 degrees Rock wall contact(254)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 21 degrees Rock wall contact(246)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 22 degrees Rock wall contact(247)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 23 degrees Rock wall contact(248)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 24 degrees Rock wall contact(249)",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 25 degrees Rock wall contact(250)",
        "Silty small clay fractions non softening at residual frictional angle of 20 degrees Rock wall contact(251)",
        "Silty small clay fractions non softening at residual frictional angle of 21 degrees Rock wall contact(252)",
        "Silty small clay fractions non softening at residual frictional angle of 22 degrees Rock wall contact(100)",
        "Silty small clay fractions non softening at residual frictional angle of 23 degrees Rock wall contact(101)",
        "Silty small clay fractions non softening at residual frictional angle of 24 degrees Rock wall contact(102)",
        "Silty small clay fractions non softening at residual frictional angle of 25 degrees Rock wall contact(103)",
        "Silty non softening at residual frictional angle of 20 degrees Rock wall contact(104)",
        "Silty non softening at residual frictional angle of 21 degrees Rock wall contact(105)",
        "Silty non softening at residual frictional angle of 22 degrees Rock wall contact(158)",
        "Silty non softening at residual frictional angle of 23 degrees Rock wall contact(159)",
        "Silty non softening at residual frictional angle of 24 degrees Rock wall contact(160)",
        "Silty non softening at residual frictional angle of 25 degrees Rock wall contact(161)",
        "Sandy clay coatings non softening at residual frictional angle of 20 degrees Rock wall contact(162)",
        "Sandy clay coatings non softening at residual frictional angle of 21 degrees Rock wall contact(163)",
        "Sandy clay coatings non softening at residual frictional angle of 22 degrees Rock wall contact(164)",
        "Sandy clay coatings non softening at residual frictional angle of 23 degrees Rock wall contact(165)",
        "Sandy clay coatings non softening at residual frictional angle of 24 degrees Rock wall contact(166)",
        "Sandy clay coatings non softening at residual frictional angle of 25 degrees Rock wall contact(0)",
      ],
      // Jr value declaratipn
      JrDesc: "",
      JrVal: "",
      value_Jr: "",
      dictJr: [
        "rough and discontinous(44)",
        "rough and undulating(40)",
        "rough and planar(0)",
        "smooth and discountinous(42)",
        "smooth and undulating(21)",
        "smooth and planar(24)",
        "slickenedsided and discountinous(22)",
        " slickenedsided and undulating(28)",
        "slickenedsided and planar(32)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous(30)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating(45)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar(49)",
        "rough and discontinous with mean spacing greater than 3m(47)",
        "rough and undulating with mean spacing greater than 3m(41)",
        "rough and planar with mean spacing greater than 3m(1)",
        "smooth and discountinous with mean spacing greater than 3m(43)",
        "smooth and undulating with mean spacing greater than 3m(26)",
        "smooth and planar with mean spacing greater than 3m(25)",
        "slickenedsided and discountinous with mean spacing greater than 3m(23)",
        " slickenedsided and undulating with mean spacing greater than 3m(4)",
        "slickenedsided and planar with mean spacing greater than 3m(9)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous with mean spacing greater than 3m(56)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating with mean spacing greater than 3m(14)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar with mean spacing greater than 3m(33)",
        "Discontinous joints rock wall intact(52)",
        "Rough and irregular undulating rock wall intact(38)",
        "smooth undulating rock wall intact(2)",
        "SLickenedsided undulating rock wall intact(7)",
        "rough or irregular planar rock wall intact(54)",
        "smooth planar rock wall intact(11)",
        "slickened sided planar rock wall intact(33)",
        "Discontinous joints Rock wall contact before 10 cm shear(50)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear(36)",
        "smooth undulating Rock wall contact before 10 cm shear(19)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear(16)",
        "rough or irregular planar rock wall intact(5)",
        "smooth planar Rock wall contact before 10 cm shear(10)",
        "slickened sided planar Rock wall contact before 10 cm shear(57)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared(15)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared(34)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(53)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(39)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(3)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(8)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(55)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(12)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(34)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(51)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(37)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(20)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3(17)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(5)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(10)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(57)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(15)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(34)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(53)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(39)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(3)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(8)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(55)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(13)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(34)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(51)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(37)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(20)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(17)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(5)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(15)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(34)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(53)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(3)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(8)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(55)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(12)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(34)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(51)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(37)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(20)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(17)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(6)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(18)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3(27)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(31)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(29)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(44)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(48)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(46)",
        "Planar joints having linerations provided that the lineations are oriented for minimum strength(40)",
        "Slickened sided having linearations provided that the lineations are oriented for minimum strength(0)",
        "rough and discontinous(42)",
        "rough and undulating(21)",
        "rough and planar(24)",
        "smooth and discountinous(22)",
        "smooth and undulating(28)",
        "smooth and planar(32)",
        "slickenedsided and discountinous(30)",
        " slickenedsided and undulating(45)",
        "slickenedsided and planar(49)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous(47)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating(41)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar(1)",
        "rough and discontinous with mean spacing greater than 3m(43)",
        "rough and undulating with mean spacing greater than 3m(26)",
        "rough and planar with mean spacing greater than 3m(25)",
        "smooth and discountinous with mean spacing greater than 3m(23)",
        "smooth and undulating with mean spacing greater than 3m(4)",
        "smooth and planar with mean spacing greater than 3m(9)",
        "slickenedsided and discountinous with mean spacing greater than 3m(56)",
        " slickenedsided and undulating with mean spacing greater than 3m(14)",
        "slickenedsided and planar with mean spacing greater than 3m(33)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous with mean spacing greater than 3m(52)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating with mean spacing greater than 3m(38)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar with mean spacing greater than 3m(2)",
        "Discontinous joints rock wall intact(7)",
        "Rough and irregular undulating rock wall intact(11)",
        "smooth undulating rock wall intact(33)",
        "SLickenedsided undulating rock wall intact(10)",
        "rough or irregular planar rock wall intact(57)",
        "smooth planar rock wall intact(15)",
        "slickened sided planar rock wall intact(53)",
        "Discontinous joints Rock wall contact before 10 cm shear(39)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear(3)",
        "smooth undulating Rock wall contact before 10 cm shear(8)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear(12)",
        "rough or irregular planar rock wall intact(34)",
        "smooth planar Rock wall contact before 10 cm shear(51)",
        "slickened sided planar Rock wall contact before 10 cm shear(37)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared(20)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared(5)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(10)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(57)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(15)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(34)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(53)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(39)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(3)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(8)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(55)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(13)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3(34)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(51)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(37)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(20)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(17)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(5)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(10)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(57)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(15)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(34)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(53)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(39)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(3)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(8)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(55)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(12)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(34)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(51)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(37)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(20)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(17)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(6)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(18)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(41)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(1)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(43)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(26)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(25)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(23)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(4)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(9)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(57)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3(53)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(39)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(3)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(8)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(55)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(12)",
        "Planar joints having linerations provided that the lineations are oriented for minimum strength(34)",
        "Slickened sided having linearations provided that the lineations are oriented for minimum strength(51)",
        "slickenedsided and discountinous with mean spacing greater than 3m(37)",
        " slickenedsided and undulating with mean spacing greater than 3m(20)",
        "slickenedsided and planar with mean spacing greater than 3m(17)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous with mean spacing greater than 3m(5)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating with mean spacing greater than 3m(10)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar with mean spacing greater than 3m(57)",
        "Discontinous joints rock wall intact(15)",
        "Rough and irregular undulating rock wall intact(34)",
        "smooth undulating rock wall intact(53)",
        "SLickenedsided undulating rock wall intact(39)",
        "rough or irregular planar rock wall intact(3)",
        "smooth planar rock wall intact(8)",
        "slickened sided planar rock wall intact(55)",
        "Discontinous joints Rock wall contact before 10 cm shear(13)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear(34)",
        "smooth undulating Rock wall contact before 10 cm shear(51)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear(37)",
        "rough or irregular planar rock wall intact(20)",
        "smooth planar Rock wall contact before 10 cm shear(17)",
        "slickened sided planar Rock wall contact before 10 cm shear(5)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared(10)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared(57)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(15)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(34)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(53)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(39)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(3)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(8)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(55)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(12)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(34)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(51)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3(35)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(27)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(31)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(29)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(44)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(48)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(46)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(40)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(0)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(42)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(27)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(31)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(29)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(44)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(48)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(46)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(40)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(0)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(42)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(21)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(24)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(22)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(28)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(32)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(30)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(45)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(49)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(14)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(33)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(52)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(38)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(2)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3(7)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(54)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(11)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(33)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(50)",
        "sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(36)",
        "Planar joints having linerations provided that the lineations are oriented for minimum strength(19)",
        "Slickened sided having linearations provided that the lineations are oriented for minimum strength(16)",
        "rough and discontinous(5)",
        "rough and undulating(10)",
        "rough and planar(57)",
        "smooth and discountinous(15)",
        "smooth and undulating(34)",
        "smooth and planar(53)",
        "slickenedsided and discountinous(39)",
        " slickenedsided and undulating(3)",
        "slickenedsided and planar(8)",
        "rough and discontinous(55)",
        "rough and undulating(12)",
        "rough and planar(34)",
        "smooth and discountinous(51)",
        "smooth and undulating(37)",
        "smooth and planar(20)",
        "slickenedsided and discountinous(17)",
        " slickenedsided and undulating(5)",
        "slickenedsided and planar(10)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous(57)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating(15)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar(34)",
        "rough and discontinous with mean spacing greater than 3m(53)",
        "rough and undulating with mean spacing greater than 3m(39)",
        "rough and planar with mean spacing greater than 3m(3)",
        "smooth and discountinous with mean spacing greater than 3m(8)",
        "smooth and undulating with mean spacing greater than 3m(55)",
        "smooth and planar with mean spacing greater than 3m(13)",
        "slickenedsided and discountinous with mean spacing greater than 3m(34)",
        " slickenedsided and undulating with mean spacing greater than 3m(51)",
        "slickenedsided and planar with mean spacing greater than 3m(37)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous with mean spacing greater than 3m(20)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating with mean spacing greater than 3m(17)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar with mean spacing greater than 3m(5)",
        "Discontinous joints rock wall intact(10)",
        "Rough and irregular undulating rock wall intact(57)",
        "smooth undulating rock wall intact(15)",
        "SLickenedsided undulating rock wall intact(34)",
        "rough or irregular planar rock wall intact(53)",
        "smooth planar rock wall intact(39)",
        "slickened sided planar rock wall intact(3)",
        "Discontinous joints Rock wall contact before 10 cm shear(8)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear(55)",
        "smooth undulating Rock wall contact before 10 cm shear(12)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear(34)",
        "rough or irregular planar rock wall intact(51)",
        "smooth planar Rock wall contact before 10 cm shear(37)",
        "slickened sided planar Rock wall contact before 10 cm shear(20)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared(35)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared(6)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(18)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(27)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(31)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(29)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(44)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(48)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(46)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(40)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(0)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(42)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3(21)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(24)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(22)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(28)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(32)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(30)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(45)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(49)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(47)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(41)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(1)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(43)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(26)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(25)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(23)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(4)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(9)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(33)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(52)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(38)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(2)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(54)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(11)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(33)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(50)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(36)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(19)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(16)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(5)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(10)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(57)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(15)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3(34)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(53)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(39)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(3)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(55)",
        "sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(20)",
        "Planar joints having linerations provided that the lineations are oriented for minimum strength(17)",
        "Slickened sided having linearations provided that the lineations are oriented for minimum strength(5)",
        "rough and discontinous(10)",
        "rough and undulating(15)",
        "rough and planar(39)",
        "smooth and discountinous(3)",
        "smooth and undulating(55)",
        "smooth and planar(13)",
        "slickenedsided and discountinous(34)",
        " slickenedsided and undulating(51)",
        "slickenedsided and planar(37)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous(20)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating(3)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar(8)",
        "rough and discontinous with mean spacing greater than 3m(55)",
        "rough and undulating with mean spacing greater than 3m(12)",
        "rough and planar with mean spacing greater than 3m(34)",
        "smooth and discountinous with mean spacing greater than 3m(51)",
        "smooth and undulating with mean spacing greater than 3m(37)",
        "smooth and planar with mean spacing greater than 3m(20)",
        "slickenedsided and discountinous with mean spacing greater than 3m(35)",
        " slickenedsided and undulating with mean spacing greater than 3m(6)",
        "slickenedsided and planar with mean spacing greater than 3m(18)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous with mean spacing greater than 3m(41)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating with mean spacing greater than 3m(23)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar with mean spacing greater than 3m(4)",
        "Discontinous joints rock wall intact(56)",
        "Rough and irregular undulating rock wall intact(33)",
        "smooth undulating rock wall intact(52)",
        "SLickenedsided undulating rock wall intact(38)",
        "rough or irregular planar rock wall intact(2)",
        "smooth planar rock wall intact(7)",
        "slickened sided planar rock wall intact(54)",
        "Discontinous joints Rock wall contact before 10 cm shear(11)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear(33)",
        "smooth undulating Rock wall contact before 10 cm shear(50)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear(36)",
        "rough or irregular planar rock wall intact(19)",
        "smooth planar Rock wall contact before 10 cm shear(16)",
        "slickened sided planar Rock wall contact before 10 cm shear(5)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared(10)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared(57)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(15)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(34)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(53)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(39)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(3)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(8)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(55)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(12)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(37)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(5)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3(57)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(15)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(34)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(39)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(3)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(8)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(55)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(13)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(51)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(20)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(17)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(5)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(10)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(57)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(15)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(34)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(53)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(39)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(3)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(8)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(55)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(12)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(34)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(51)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(37)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(20)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(35)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(6)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(18)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(27)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(31)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(29)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3(44)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(48)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(46)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(40)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(0)",
        "sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(42)",
        "Planar joints having linerations provided that the lineations are oriented for minimum strength(10)",
        "Slickened sided having linearations provided that the lineations are oriented for minimum strength(57)",
        "slickenedsided and discountinous with mean spacing greater than 3m(15)",
        " slickenedsided and undulating with mean spacing greater than 3m(34)",
        "slickenedsided and planar with mean spacing greater than 3m(39)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous with mean spacing greater than 3m(12)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating with mean spacing greater than 3m(37)",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar with mean spacing greater than 3m(20)",
        "Discontinous joints rock wall intact(35)",
        "Rough and irregular undulating rock wall intact(6)",
        "smooth undulating rock wall intact(18)",
        "SLickenedsided undulating rock wall intact(27)",
        "rough or irregular planar rock wall intact(31)",
        "smooth planar rock wall intact(29)",
        "slickened sided planar rock wall intact(44)",
        "Discontinous joints Rock wall contact before 10 cm shear(48)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear(46)",
        "smooth undulating Rock wall contact before 10 cm shear(40)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear(0)",
        "rough or irregular planar rock wall intact(42)",
        "smooth planar Rock wall contact before 10 cm shear(21)",
        "slickened sided planar Rock wall contact before 10 cm shear(24)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared(22)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared(28)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(32)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(49)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(47)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(41)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(1)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(43)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(26)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(25)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(23)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(4)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3(9)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(56)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(33)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(52)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(38)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(2)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(7)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(54)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(11)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(33)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(50)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(36)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(19)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(16)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(5)",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(10)",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(57)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(15)",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(34)",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(53)",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(39)",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m(3)",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m(8)",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(55)",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(12)",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m(34)",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m(51)",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m(37)",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m(20)",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(17)",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m(5)",
      ],
      // Jw value declaratipn
      JwDesc: "",
      JwVal: "",
      value_Jw: "",
      dictJw: [
        "Dry excavation or minor inflow 5 decays per minute locally with head water less than 10m(343)",
        "Medium inflow occasionally outwash of joints or fissues filings with head water between 10 to 25m(344)",
        "large inflow in competent ground with unfilled joints or fissues(342)",
        "large inflow with considerable outwash of joints or fissues filings(341)",
        "exceptionally high inflow upon excavation decaying with time(0)",
        "exceptionally high inflow continuing without noticeable decay(308)",
        "large inflow with considerable outwash of joints or fissues filings with installed drainage(309)",
        "exceptionally high inflow upon excavation decaying with time with installed drainage(310)",
        "exceptionally high inflow continuing without noticeable decay with installed drainage(311)",
        "Dry excavation or minor inflow that is less than 5litre per meter locally(312)",
        "Medium inflow or pressure occasionally outwash of joints filings(313)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1 pascals(314)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.1 pascals(315)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.2 pascals(316)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.3 pascals(317)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.4 pascals(318)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.5 pascals(319)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.6 pascals(320)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.7 pascals(321)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.8 pascals(322)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.9 pascals(323)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2 pascals(324)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.1 pascals(292)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.2 pascals(293)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.3 pascals(294)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.4 pascals(295)",
        "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.5 pascals(296)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1 pascals(297)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.1 pascals(298)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.2 pascals(299)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.3 pascals(300)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.4 pascals(301)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.5 pascals(302)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.6 pascals(303)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.7 pascals(304)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.8 pascals(305)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.9 pascals(306)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2 pascals(307)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.1 pascals(325)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.2 pascals(326)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.3  pascals(327)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.4  pascals(328)",
        "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.5  pascals(329)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1 pascals(330)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.1 pascals(331)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.2 pascals(332)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.3 pascals(333)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.4 pascals(334)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.5 pascals(335)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.6 pascals(336)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.7 pascals (337)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.8 pascals(338)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 1.9 pascals(339)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2 pascals(340)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2.1 pascals(142)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2.2 pascals(143)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2.3 pascals(72)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2.4 pascals(74)",
        "Pressure occasionally outwash of joints filings approximate water pressure of 2.5 pascals(75)",
        "Large inflow or high pressure in competent rock wit unfilled joints(76)",
        "Large inflow or high pressure in competent rock wit unfilled joints approximate water pressure of 2.5 pascals(77)",
        "Large inflow in competent rock with unfilled joints(78)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 2.5 pascals(79)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 2.6 pascals(80)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 2.7 pascals(81)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 2.8 pascals(82)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 2.9 pascals(83)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3 pascals(84)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.1 pascals(85)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.2 pascals(86)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.3 pascals(87)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.4 pascals(88)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.5 pascals(89)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.6 pascals(90)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.7 pascals(91)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.8 pascals(92)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 3.9 pascals(93)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4 pascals(94)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.1 pascals(95)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.2 pascals(96)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.3 pascals(97)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.4 pascals(98)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.5 pascals(99)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.6 pascals(100)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.7 pascals(101)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.8 pascals(102)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 4.9 pascals(103)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5 pascals(104)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.1 pascals(105)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.2 pascals(106)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.3 pascals(107)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.4 pascals(108)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.5 pascals(109)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.6 pascals(110)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.7 pascals(111)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.8 pascals(112)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 5.9 pascals(113)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6 pascals(114)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.1 pascals(115)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.2 pascals(116)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.3 pascals(117)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.4 pascals(118)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.5 pascals(119)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.6 pascals(120)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.7 pascals(121)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.8 pascals(122)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.9 pascals(123)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7 pascals(124)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.1 pascals(125)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.2 pascals(126)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.3 pascals(127)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.4 pascals(128)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.5 pascals(129)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.6 pascals(130)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.7 pascals(131)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.8 pascals(132)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8 pascals(133)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.1 pascals(137)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.2 pascals(138)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.3 pascals(139)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.4 pascals(140)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.5 pascals(73)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.6 pascals(3)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.7 pascals(5)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.8 pascals(6)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.9 pascals(7)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9 pascals(8)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.1 pascals(9)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.2 pascals(10)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.3 pascals(11)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.4 pascals(12)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.5 pascals(13)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.6 pascals(14)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.7 pascals(15)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.8 pascals(16)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.9 pascals(17)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 10 pascals(18)",
        "High pressure in competent rock with unfilled joints(19)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.5 pascals(20)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.5 pascals(21)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.6 pascals(22)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.7 pascals(23)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.8 pascals(24)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.9 pascals(25)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3 pascals(26)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.1 pascals(27)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.2 pascals(28)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.3 pascals(29)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.4 pascals(30)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.5 pascals(31)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.6 pascals(32)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.7 pascals(33)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.8 pascals(34)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.9 pascals(35)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4 pascals(36)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.1 pascals(37)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.2 pascals(38)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.3 pascals(39)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.4 pascals(40)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.5 pascals(41)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.6 pascals(42)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.7 pascals(43)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.8 pascals(44)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.9 pascals(45)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5 pascals(46)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.1 pascals(47)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.2 pascals(48)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.3 pascals(49)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.4 pascals(50)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.5 pascals(51)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.6 pascals(52)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.7 pascals(63)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.8 pascals(66)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.9 pascals(67)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6 pascals(68)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.1 pascals(69)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.2 pascals(70)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.3 pascals(71)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.4 pascals(4)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.5 pascals(141)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.6 pascals(145)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.7 pascals(146)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.8 pascals(147)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.9 pascals(148)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7 pascals(149)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.1 pascals(150)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.2 pascals(151)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.3 pascals(152)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.4 pascals(153)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.5 pascals(154)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.6 pascals(155)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.7 pascals(156)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.8 pascals(158)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8 pascals(157)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.1 pascals(159)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.2 pascals(160)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.3 pascals(161)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.4 pascals(162)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.5 pascals(163)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.6 pascals(164)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.7 pascals(165)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.8 pascals(166)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.9 pascals(167)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9 pascals(168)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.1 pascals(169)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.2 pascals(170)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.3 pascals(171)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.4 pascals(172)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.5 pascals(173)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.6 pascals(174)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.7 pascals(175)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.8 pascals(176)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.9 pascals(177)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 10 pascals(179)",
        "Large inflow or high pressure(180)",
        "Large inflow with approximate water pressure of 2.5 pascals(181)",
        "Large inflow with approximate water pressure of 2.6 pascals(182)",
        "Large inflow with approximate water pressure of 2.7 pascals(183)",
        "Large inflow with approximate water pressure of 2.8 pascals(184)",
        "Large inflow with approximate water pressure of 2.9 pascals(185)",
        "Large inflow with approximate water pressure of 3 pascals(186)",
        "Large inflow with approximate water pressure of 3.1 pascals(187)",
        "Large inflow with approximate water pressure of 3.2 pascals(188)",
        "Large inflow with approximate water pressure of 3.3 pascals(189)",
        "Large inflow with approximate water pressure of 3.4 pascals(190)",
        "Large inflow with approximate water pressure of 3.5 pascals(191)",
        "Large inflow with approximate water pressure of 3.6 pascals(192)",
        "Large inflow with approximate water pressure of 3.8 pascals(193)",
        "Large inflow with approximate water pressure of 3.7 pascals(194)",
        "Large inflow with approximate water pressure of 3.9 pascals(195)",
        "Large inflow with approximate water pressure of 4 pascals(196)",
        "Large inflow with approximate water pressure of 4.1 pascals(197)",
        "Large inflow with approximate water pressure of 4.2 pascals(198)",
        "Large inflow with approximate water pressure of 4.3 pascals(199)",
        "Large inflow with approximate water pressure of 4.4 pascals(200)",
        "Large inflow with approximate water pressure of 4.5 pascals(201)",
        "Large inflow with approximate water pressure of 4.6 pascals(202)",
        "Large inflow with approximate water pressure of 4.7 pascals(203)",
        "Large inflow with approximate water pressure of 4.8 pascals(204)",
        "Large inflow with approximate water pressure of 4.9 pascals(214)",
        "Large inflow with approximate water pressure of 5 pascals(215)",
        "Large inflow with approximate water pressure of 5.1 pascals(144)",
        "Large inflow with approximate water pressure of 5.2 pascals(217)",
        "Large inflow with approximate water pressure of 5.3 pascals(218)",
        "Large inflow with approximate water pressure of 5.4 pascals(219)",
        "Large inflow with approximate water pressure of 5.5 pascals(220)",
        "Large inflow with approximate water pressure of 5.6 pascals(221)",
        "Large inflow with approximate water pressure of 5.7 pascals(222)",
        "Large inflow with approximate water pressure of 5.8 pascals(223)",
        "Large inflow with approximate water pressure of 5.9 pascals(224)",
        "Large inflow with approximate water pressure of 6 pascals(225)",
        "Large inflow with approximate water pressure of 6.1 pascals(226)",
        "Large inflow with approximate water pressure of 6.2 pascals(227)",
        "Large inflow with approximate water pressure of 6.3 pascals(228)",
        "Large inflow with approximate water pressure of 6.4 pascals(230)",
        "Large inflow with approximate water pressure of 6.5 pascals(229)",
        "Large inflow with approximate water pressure of 6.6 pascals(231)",
        "Large inflow with approximate water pressure of 6.7 pascals(232)",
        "Large inflow with approximate water pressure of 6.8 pascals(233)",
        "Large inflow with approximate water pressure of 6.9 pascals(234)",
        "Large inflow with approximate water pressure of 7 pascals(235)",
        "Large inflow with approximate water pressure of 7.1 pascals(236)",
        "Large inflow with approximate water pressure of 7.2 pascals(237)",
        "Large inflow with approximate water pressure of 7.3 pascals(238)",
        "Large inflow with approximate water pressure of 7.4 pascals(239)",
        "Large inflow with approximate water pressure of 7.5 pascals(240)",
        "Large inflow with approximate water pressure of 7.6 pascals(241)",
        "Large inflow with approximate water pressure of 7.7 pascals(242)",
        "Large inflow with approximate water pressure of 7.8 pascals(243)",
        "Large inflow with approximate water pressure of 7.9 pascals(244)",
        "Large inflow with approximate water pressure of 8 pascals(245)",
        "Large inflow with approximate water pressure of 8.1 pascals(246)",
        "Large inflow with approximate water pressure of 8.2 pascals(247)",
        "Large inflow with approximate water pressure of 8.3 pascals(248)",
        "Large inflow with approximate water pressure of 8.4 pascals(249)",
        "Large inflow with approximate water pressure of 8.5 pascals(250)",
        "Large inflow with approximate water pressure of 8.6 pascals(251)",
        "Large inflow with approximate water pressure of 8.7 pascals(252)",
        "Large inflow with approximate water pressure of 8.8 pascals(253)",
        "Large inflow with approximate water pressure of 8.9 pascals(254)",
        "Large inflow with approximate water pressure of 9 pascals(255)",
        "Large inflow with approximate water pressure of 9.1 pascals(256)",
        "Large inflow with approximate water pressure of 9.2 pascals(257)",
        "Large inflow with approximate water pressure of 9.3 pascals(258)",
        "Large inflow with approximate water pressure of 9.4 pascals(259)",
        "Large inflow with approximate water pressure of 9.5 pascals(260)",
        "Large inflow with approximate water pressure of 9.6 pascals(261)",
        "Large inflow with approximate water pressure of 9.7 pascals(262)",
        "Large inflow with approximate water pressure of 9.8 pascals(263)",
        "Large inflow with approximate water pressure of 9.9 pascals(264)",
        "Large inflow with approximate water pressure of 10 pascals(265)",
        "Large pressure with approximate water pressure of 2.5 pascals(266)",
        "Large pressure with approximate water pressure of 2.6 pascals(267)",
        "Large pressure with approximate water pressure of 2.7 pascals(268)",
        "Large pressure with approximate water pressure of 2.8 pascals(269)",
        "Large pressure with approximate water pressure of 2.9 pascals(270)",
        "Large pressure with approximate water pressure of 3 pascals(271)",
        "Large pressure with approximate water pressure of 3.1 pascals(272)",
        "Large pressure with approximate water pressure of 3.2 pascals(273)",
        "Large pressure with approximate water pressure of 3.3 pascals(274)",
        "Large pressure with approximate water pressure of 3.4 pascals(275)",
        "Large pressure with approximate water pressure of 3.5 pascals(276)",
        "Large pressure with approximate water pressure of 3.6 pascals(277)",
        "Large pressure with approximate water pressure of 3.8 pascals(278)",
        "Large pressure with approximate water pressure of 3.7 pascals(279)",
        "Large pressure with approximate water pressure of 3.9 pascals(280)",
        "Large pressure with approximate water pressure of 4 pascals(281)",
        "Large pressure with approximate water pressure of 4.1 pascals(282)",
        "Large pressure with approximate water pressure of 4.2 pascals(283)",
        "Large pressure with approximate water pressure of 4.3 pascals(284)",
        "Large pressure with approximate water pressure of 4.4 pascals(285)",
        "Large pressure with approximate water pressure of 4.5 pascals(286)",
        "Large pressure with approximate water pressure of 4.6 pascals(287)",
        "Large pressure with approximate water pressure of 4.7 pascals(288)",
        "Large pressure with approximate water pressure of 4.8 pascals(289)",
        "Large pressure with approximate water pressure of 4.9 pascals(290)",
        "Large pressure with approximate water pressure of 5 pascals(291)",
        "Large pressure with approximate water pressure of 5.1 pascals(216)",
        "Large pressure with approximate water pressure of 5.2 pascals(1)",
        "Large pressure with approximate water pressure of 5.3 pascals(1)",
        "Large pressure with approximate water pressure of 5.4 pascals(1)",
        "Large pressure with approximate water pressure of 5.5 pascals(1)",
        "Large pressure with approximate water pressure of 5.6 pascals(1)",
        "Large pressure with approximate water pressure of 5.7 pascals(1)",
        "Large pressure with approximate water pressure of 5.8 pascals(2)",
        "Large pressure with approximate water pressure of 5.9 pascals(2)",
        "Large pressure with approximate water pressure of 6 pascals(2)",
        "Large pressure with approximate water pressure of 6.1 pascals(2)",
        "Large pressure with approximate water pressure of 6.2 pascals(107)",
        "Large pressure with approximate water pressure of 6.3 pascals(108)",
        "Large pressure with approximate water pressure of 6.4 pascals(109)",
        "Large pressure with approximate water pressure of 6.5 pascals(110)",
        "Large pressure with approximate water pressure of 6.6 pascals(112)",
        "Large pressure with approximate water pressure of 6.7 pascals(113)",
        "Large pressure with approximate water pressure of 6.8 pascals(114)",
        "Large pressure with approximate water pressure of 6.9 pascals(115)",
        "Large pressure with approximate water pressure of 7 pascals(116)",
        "Large pressure with approximate water pressure of 7.1 pascals(117)",
        "Large pressure with approximate water pressure of 7.2 pascals(118)",
        "Large pressure with approximate water pressure of 7.3 pascals(119)",
        "Large pressure with approximate water pressure of 7.4 pascals(120)",
        "Large pressure with approximate water pressure of 7.5 pascals(121)",
        "Large pressure with approximate water pressure of 7.6 pascals(122)",
        "Large pressure with approximate water pressure of 7.7 pascals(123)",
        "Large pressure with approximate water pressure of 7.8 pascals(124)",
        "Large pressure with approximate water pressure of 7.9 pascals(125)",
        "Large pressure with approximate water pressure of 8 pascals(126)",
        "Large pressure with approximate water pressure of 8.1 pascals(128)",
        "Large pressure with approximate water pressure of 8.2 pascals(132)",
        "Large pressure with approximate water pressure of 8.3 pascals(133)",
        "Large pressure with approximate water pressure of 8.4 pascals(134)",
        "Large pressure with approximate water pressure of 8.5 pascals(135)",
        "Large pressure with approximate water pressure of 8.6 pascals(136)",
        "Large pressure with approximate water pressure of 8.7 pascals(138)",
        "Large pressure with approximate water pressure of 8.8 pascals(139)",
        "Large pressure with approximate water pressure of 8.9 pascals(140)",
        "Large pressure with approximate water pressure of 9 pascals(73)",
        "Large pressure with approximate water pressure of 9.1 pascals(3)",
        "Large pressure with approximate water pressure of 9.2 pascals(5)",
        "Large pressure with approximate water pressure of 9.3 pascals(5)",
        "Large pressure with approximate water pressure of 9.4 pascals(6)",
        "Large pressure with approximate water pressure of 9.5 pascals(14)",
        "Large pressure with approximate water pressure of 9.6 pascals(15)",
        "Large pressure with approximate water pressure of 9.7 pascals(16)",
        "Large pressure with approximate water pressure of 9.8 pascals(17)",
        "Large pressure with approximate water pressure of 9.9 pascals(18)",
        "Large pressure with approximate water pressure of 10 pascals(19)",
        "Exceptionally high inflow with apprpximate water pressure greater than 10 pascals(20)",
        "Exceptionally high inflow with apprpximate water pressure greater than 10 pascals(21)",
        "Exceptionally high inflow with apprpximate water pressure greater than 10 pascals(22)",
        "Exceptionally high inflow with apprpximate water pressure greater than 10 pascals(23)",
        "Exceptionally high inflow with apprpximate water pressure greater than 10 pascals(24)",
        "Exceptionally high inflow with apprpximate water pressure greater than 10 pascals(25)",
        "Exceptionally high pressure with apprpximate water pressure greater than 10 pascals(30)",
        "Exceptionally high pressure with apprpximate water pressure greater than 10 pascals(31)",
        "Exceptionally high pressure with apprpximate water pressure greater than 10 pascals(33)",
        "Exceptionally high pressure with apprpximate water pressure greater than 10 pascals(35)",
        "Exceptionally high pressure with apprpximate water pressure greater than 10 pascals(36)",
        "Exceptionally high pressure with apprpximate water pressure greater than 10 pascals(37)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.1 pascals(38)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.2 pascals(39)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.3 pascals(40)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.4 pascals(41)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.5 pascals(42)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.6 pascals(43)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.7 pascals(44)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.8 pascals(45)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 6.9 pascals(46)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7 pascals(47)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.1 pascals(48)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.2 pascals(49)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.3 pascals(50)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.4 pascals(51)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.5 pascals(52)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.6 pascals(53)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.7 pascals(54)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 7.8 pascals(55)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8 pascals(56)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.1 pascals(57)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.2 pascals(58)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.3 pascals(59)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.4 pascals(60)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.5 pascals(61)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.6 pascals(62)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.7 pascals(63)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.8 pascals(64)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 8.9 pascals(65)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9 pascals(66)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.1 pascals(67)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.2 pascals(69)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.3 pascals(71)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.4 pascals(4)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.5 pascals(141)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.6 pascals(145)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.7 pascals(146)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.8 pascals(147)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 9.9 pascals(148)",
        "Large inflow in competent rock with unfilled joints approximate water pressure of 10 pascals(149)",
        "High pressure in competent rock with unfilled joints(150)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.5 pascals(151)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.5 pascals(152)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.6 pascals(153)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.7 pascals(154)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.8 pascals(155)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 2.9 pascals(156)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3 pascals(158)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.1 pascals(157)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.2 pascals(159)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.3 pascals(160)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.4 pascals(161)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.5 pascals(162)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.6 pascals(163)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.7 pascals(164)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.8 pascals(165)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 3.9 pascals(166)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4 pascals(167)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.1 pascals(168)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.2 pascals(169)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.3 pascals(170)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.4 pascals(171)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.5 pascals(172)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.6 pascals(173)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.7 pascals(174)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.8 pascals(176)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 4.9 pascals(178)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5 pascals(180)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.1 pascals(181)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.2 pascals(182)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.3 pascals(183)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.4 pascals(184)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.5 pascals(185)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.6 pascals(186)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.7 pascals(187)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.8 pascals(188)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 5.9 pascals(189)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6 pascals(190)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.1 pascals(191)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.2 pascals(192)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.3 pascals(193)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.4 pascals(194)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.5 pascals(195)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.6 pascals(196)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.7 pascals(197)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.8 pascals(198)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 6.9 pascals(201)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7 pascals(202)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.1 pascals(203)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.2 pascals(204)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.3 pascals(205)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.4 pascals(206)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.5 pascals(207)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.6 pascals(208)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.7 pascals(209)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 7.8 pascals(210)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8 pascals(211)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.1 pascals(212)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.2 pascals(213)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.3 pascals(214)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.4 pascals(215)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.5 pascals(144)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.6 pascals(217)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.7 pascals(218)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.8 pascals(219)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 8.9 pascals(220)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9 pascals(221)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.1 pascals(222)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.2 pascals(223)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.3 pascals(224)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.4 pascals(225)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.5 pascals(226)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.6 pascals(227)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.7 pascals(228)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.8 pascals(230)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 9.9 pascals(229)",
        "High pressure in competent rock with unfilled joints approximate water pressure of 10 pascals(231)",
        "Large inflow or high pressure(232)",
        "Large inflow with approximate water pressure of 2.5 pascals(233)",
        "Large inflow with approximate water pressure of 2.6 pascals(234)",
        "Large inflow with approximate water pressure of 2.7 pascals(235)",
        "Large inflow with approximate water pressure of 2.8 pascals(236)",
        "Large inflow with approximate water pressure of 2.9 pascals(237)",
        "Large inflow with approximate water pressure of 3 pascals(238)",
        "Large inflow with approximate water pressure of 3.1 pascals(239)",
        "Large inflow with approximate water pressure of 3.2 pascals(240)",
      ],

      // ESR Value declaration
      EsrDesc: "",
      EsrVal: "",
      value_Esr: "",
      dictEsr: [
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(2)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers  access tunnels(2)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers  access tunnels(2)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers  access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(4)",
        "Temporary mine openings(0)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(3)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(1)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(5)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(5)",
        "Underground nuclear power stations railway stations sports and public facilities factories(4)",
        "Temporary mine openings(0)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(3)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(0)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(3)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(1)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(5)",
        "Underground nuclear power stations railway stations sports and public facilities factories(4)",
        "Temporary mine openings(0)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(5)",
        "Temporary mine openings(4)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(0)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(3)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(1)",
        "Underground nuclear power stations railway stations sports and public facilities factories(4)",
        "Temporary mine openings(0)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(3)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(1)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(5)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(0)",
        "Underground nuclear power stations railway stations sports and public facilities factories(3)",
        "Temporary mine openings(1)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(5)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(4)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(1)",
        "Temporary mine openings(5)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(4)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(0)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(3)",
        "Underground nuclear power stations railway stations sports and public facilities factories(4)",
        "Temporary mine openings(0)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(3)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(1)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(5)",
        "Underground nuclear power stations railway stations sports and public facilities factories(4)",
        "Temporary mine openings(0)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(3)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(1)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(5)",
        "Underground nuclear power stations railway stations sports and public facilities factories(4)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
        "Underground nuclear power stations railway stations sports and public facilities factories(0)",
        "Temporary mine openings(3)",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations(1)",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels(5)",
        "Power stations major road and railway tunnels civil defence chambers portal intersections(4)",
      ],
      // RMR value declaratipn
      Q_Value: "",
      rmr_val: "",
      // RQD value declaration
      Depth_from_surface: "",
      depth_to_surface: "",
      true_thickness: "",
      hardness_property: "",
      RQDValue: "",
      NumRQD: "",
      ImpMessage: "",
      SuppMessage: "",
      ExcMessage: "",

      // Rock mass quality function based on RQD value declarations
      rmqMessage: "",
      rmq_value: 0,
      openRockMassQuality: false,
      closeRockMassQuality: true,

      // Q value declaration
      RQDValue: "",
      JnValue: "",
      JrValue: "",
      JaValue: "",
      JwValue: "",
      QValue: "",
      SRFValue: "",
      QMessage: "",
      // Q_value: 0,
      NumQ: "",
      Jn_predictedValue: '',
      Jr_predictedValue: '',
      Ja_predictedValue: '',
      Jw_predictedValue: '',
      RQD_PredictedValue: '',
      Q_Value_PredictedValue: '',
      RMR_PredictedValue: '',
      Maximum_unsupported_span: '',

      // Analysys function based on the Q value declarations
      qAnalysMessage1: "",
      qAnalysMessage2: "",
      qAnalysMessage3: "",

      // SRF value declarations
      Virgin_stress_ratio: "",
      srf_predicted: '',
      srf_value: "",

      // MUS value declarations
      MUSValue: "",
      Q_Value: "",
      ESR_VALUE: "",

      // UCS/VSR value declaration
      Depth: "",
      UCS: "",
      Density: "",
      UCS_Predicted: '',
      ucsvsr_value: "",

      openHome(currentSection) {
        this.homepage = true;
        this.UCS_Virgin_Stress_Ratio = false;
        // this.homepage = false;
        this.about = false;
        this.Jn_Description = false;
        this.Jr_Description = false;
        this.Ja_Description = false;
        this.Jw_Description = false;
        this.Rock_Quality_Designator = false;
        this.Rock_Quality_Index_Q_Value = false;
        this.Stress_Reduction_Ratio = false;
        this.Rock_Mass_Rating = false;
        this.Excavation_Category = false;
        this.Maximum_Unsupported_Span = false;
        this.contact_us = false;
        this.history = false;
        this.dashboard = true;
        if (currentSection == "UCS_Virgin_Stress_Ratio") {
          this.UCS_Virgin_Stress_Ratio = true;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Jn_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = true;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Ja_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = true;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Jr_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = true;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Jw_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = true;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Rock_Quality_Designator") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.depth_to_surface = this.use_Depth_To;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = true;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Rock_Quality_Index_Q_Value") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;

          this.JnValue = this.use_Jn;
          this.JrValue = this.use_Jr;
          this.JaValue = this.use_Ja;
          this.JwValue = this.use_Jw;
          this.SRFValue = this.use_SRF;
          this.RQDValue = this.use_RQD;

          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = true;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Stress_Reduction_Ratio") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Virgin_stress_ratio = this.use_UCS;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = true;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Rock_Mass_Rating") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Q_Value = this.use_Q_Value;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = true;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Excavation_Category") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = true;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Maximum_Unsupported_Span") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.ESR_VALUE = this.use_ESR_Value;
          this.Q_Value = this.use_Q_Value;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = true;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "contact_us") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = true;
          this.history = false;
          this.dashboard = false;
        } else if (currentSection == "history") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = true;
          this.dashboard = false;
        } else if (currentSection == "about") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = true;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = false;
        } else if (currentSection == "mainMenu") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = true;
          this.dashboard = true;
          this.contact_us = false;
          this.history = false;
          this.about = false;
        }
      },
      ucs_vsr() {
        axios
          .post("/api/ucs_model", {
            Depth: this.Depth,
            Density: this.Density,
            UCS: this.UCS
          })
          .then((res) => {
            console.log(res.data);
            this.UCS_Predicted = res.data.prediction;
            console.log('111 predicted value: ' + this.UCS_Predicted);



            this.Post_UCS()

            this.ucsvsr_value =
              "Based on your input, the ratio of the Uniaxial compressive strength to the virgin stress is " +
              this.UCS_Predicted;

          });
      },

      SRF() {
        axios
          .post("/api/srf_model", {
            Virgin_stress_ratio: this.Virgin_stress_ratio,
          })
          .then((res) => {
            console.log(res.data);
            this.srf_predicted = res.data.prediction;

            this.Post_SRF()
            this.srf_value =
              "Based on your input, the predicted Stress Reduction value is " +
              this.srf_predicted;
          });
      },

      JnDescription() {
        for (let i = 0; i < this.dictJn.length - 1; i++) {
          if (this.JnDesc.trim() == this.dictJn[i]) {
            this.value_Jn = this.JnDesc.split("(")[1];
            this.value_Jn = this.value_Jn.split(")")[0];
          }
        }

        axios
          .post("/api/Jn_model", {
            description: parseInt(this.value_Jn),
          })
          .then((res) => {
            Jn_predictedValue = res.data.predictions[0];
            this.Post_Jn()
            val = val.split("[")[1];
            val = val.split("]")[0];
            console.log(res.data);
            this.JnVal =
              "Based on your input, the predicted Jn value is " + Jn_predictedValue;
          });
        setTimeout(() => (this.JnVal = ""), 30000);
      },

      // Ja frontend function definition

      JaDescription() {
        for (let i = 0; i < this.dictJa.length - 1; i++) {
          if (this.JaDesc.trim() == this.dictJa[i]) {
            this.value_Ja = this.JaDesc.split("(")[1];
            this.value_Ja = this.value_Ja.split(")")[0];
          }
        }

        axios
          .post("/api/Ja_model", {
            description: parseInt(this.value_Ja),
          })
          .then((res) => {
            let val = res.data.predictions[0];
            val = val.split("[")[1];
            val = val.split("]")[0];
            console.log(res.data);
            this.JaVal =
              "Based on your input, the predicted Ja value is " + val;
          });
        setTimeout(() => (this.JaVal = ""), 30000);
      },

      // Jr front end function definition
      JrDescription() {
        for (let i = 0; i < this.dictJr.length - 1; i++) {
          if (this.JrDesc.trim() == this.dictJr[i]) {
            this.value_Jr = this.JrDesc.split("(")[1];
            this.value_Jr = this.value_Jr.split(")")[0];
          }
        }

        axios
          .post("/api/Jr_model", {
            description: parseInt(this.value_Jr),
          })
          .then((res) => {
            let val = res.data.predictions[0];
            val = val.split("[")[1];
            val = val.split("]")[0];
            console.log(res.data);
            this.JrVal =
              "Based on your input, the predicted Jr value is " + val;
          });
        setTimeout(() => (this.JrVal = ""), 30000);
      },

      JwDescription() {
        for (let i = 0; i < this.dictJw.length - 1; i++) {
          if (this.JwDesc.trim() == this.dictJw[i]) {
            this.value_Jw = this.JwDesc.split("(")[1];
            this.value_Jw = this.value_Jw.split(")")[0];
          }
        }

        axios
          .post("/api/Jw_model", {
            description: parseInt(this.value_Jw),
          })
          .then((res) => {
            let val = res.data.predictions[0];
            val = val.split("[")[1];
            val = val.split("]")[0];
            console.log(res.data);
            this.JwVal =
              "Based on your input, the predicted Jw value is " + val;
          });
        setTimeout(() => (this.JwVal = ""), 30000);
      },

      RQD() {
        axios
          .post("/api/rqd_model", {
            DepthFrom: this.Depth_from_surface,
            DepthTo: this.depth_to_surface,
            TrueThickness: this.true_thickness,
            Hardness: this.hardness_property,
          })
          .then((res) => {
            this.RQD_PredictedValue = res.data.prediction;
            console.log(this.RQD_PredictedValue);
            this.Post_rqd()

            //this.rmq_value = parseInt(this.RQD_PredictedValue);

            this.RQDValue =
              "Based on your input, the predicted Q value is " + this.RQD_PredictedValue.toFixed(2) + "%";
            this.NumRQD = this.RQD_PredictedValue;
          });
      },
      rock_mass_quality() {
        this.RQDValue = "";
        this.openRockMassQuality = true;
        this.closeRockMassQuality = false;
        val = this.rmq_value;
        if (val < 25 && val > 0) {
          this.rmqMessage =
            "The rock mass quality based on your input is very poor.";
          this.ImpMessage =
            "Tunneling, Room and Pillar, Cut and Fill, Sub-level Stoping, Block Caving, Drift and Fill,Hydraulic Fracturing";
          this.SuppMessage = "bolting, shotcrete, or mesh";
          this.ExcMessage =
            "Temporal mine openings,Storage rooms, water treatment plants, minor road and railway tunnels, surge chambers and access tunnels";
        } else if (val > 25 && val <= 50) {
          this.rmqMessage = "The rock mass quality based on your input is poor";
          this.ImpMessage =
            "Open-Pit Mining,Room and Pillar Mining,Cut and Fill Mining,Sublevel Stoping,Block Caving,Room and Bench Mining,Drift Mining,Hydraulic Fracturing and Grouting";
          this.SuppMessage =
            "Rock Bolting,Mesh and Shotcrete,Cable Bolting,Ground Monitoring,Rock Reinforcement,Rib and Roof Bolting,Rockfall Protection Systems,Shotcrete Lining,Grouting,Rockfall Drapery";
          this.ExcMessage =
            "Temporal mine openings,Storage rooms, water treatment plants, minor road and railway tunnels, surge chambers and access tunnels,Power stations, major road and railway tunnels, civil defence chambers, portal intersections";
        } else if (val > 50 && val <= 75) {
          this.rmqMessage =
            "The rock mass quality based on your input is fair.";
          this.ImpMessage =
            "Open Pit Mining,Room and Pillar Mining,Cut and Fill Mining,Block Caving,Sublevel Stoping,Benching,Heap Leach Mining,";
          this.SuppMessage =
            "Rock Bolting,Shotcrete (Sprayed Concrete),Mesh and Wire Mesh,Cable Bolting,Grouting,Arch and Beam Supports,Rock Reinforcement Mesh,Rock Grillage or Rock Bolster,Ground Monitoring and Instrumentation";
          this.ExcMessage =
            "Storage rooms, water treatment plants, minor road and railway tunnels, surge chambers and access tunnels,Power stations, major road and railway tunnels, civil defence chambers, portal intersections";
        } else if (val > 75 && val <= 90) {
          this.rmqMessage = "The rock mass quality based on your input is Good";
          this.ImpMessage =
            "Open-Pit Mining,Underground Room and Pillar Mining,Block Caving,Sublevel Stoping,Cut and Fill Mining,Shaft Sinking,Room and Bench Mining,Drift Mining,Quarrying";
          this.SuppMessage =
            "Rock Bolting,Shotcrete,Mesh and Meshing Systems,Cable Bolting,Grouting,Reinforced Shotcrete,Rib and Lagging Support,Rockfall Protection Systems,Anchor Systems,Grout Curtain";
          this.ExcMessage =
            "Power stations, major road and railway tunnels, civil defence chambers, portal intersections,Underground nuclear power station, railway stations, sports and public facilities,Permanent mine openings, water tunnels for hydro(power high pressure penstocks),pilot tunnels, drifts and headings for large excavation";
        } else if (val > 90 && val <= 100) {
          this.rmqMessage =
            "The rock mass quality based on your input is Excellent";
          this.ImpMessage =
            "Open-Pit Mining,Tunneling and Drifting,Room and Pillar Mining,Sublevel Stoping,Cut and Fill Mining,Pillarless Mining,Longwall Mining";
          this.SuppMessage = "Rock Bolting,Shotcrete and Mesh,";
          this.ExcMessage =
            "Power stations, major road and railway tunnels, civil defence chambers, portal intersections,Underground nuclear power station, railway stations, sports and public facilities,Permanent mine openings, water tunnels for hydro(power high pressure penstocks),pilot tunnels, drifts and headings for large excavation";
        }
      },

      Q() {
        axios
          .post("/api/q_model", {
            RQD: this.RQDValue,
            Jn: this.JnValue,
            Jr: this.JrValue,
            Ja: this.JaValue,
            Jw: this.JwValue,
            SRF: this.SRFValue,
          })
          .then((res) => {
            this.Q_Value_PredictedValue = res.data.prediction;
            console.log('predicted value: ' + this.Q_Value_PredictedValue)
            this.Post_Q();
            console.log(res.data);
            this.QValue =
              "Based on your input, the predicted Q value is " + this.Q_Value_PredictedValue;
            this.NumQ = this.Q_Value_PredictedValue;
          });
      },

      Q_value_analysis() {
        val = this.Q_value;
        if (val <= 0 && val < 10) {
          this.qAnalysMessage1 =
            "Indicates an extremely poor and unstable rock mass,";
          this.qAnalysMessage2 =
            "Severe support requirements are necessary to ensure safety during mining or tunneling,";
          this.qAnalysMessage3 = "High risk of rockfalls and ground collapses";
        } else if (val > 10 && val <= 20) {
          this.qAnalysMessage1 =
            "Suggests a weak rock mass with significant stability concerns,";
          this.qAnalysMessage2 =
            "Substantial support measures are needed for safe mining or tunneling";
          this.qAnalysMessage3 =
            "Increased risk of rockfalls and ground instability";
        } else if (val > 20 && val <= 40) {
          this.qAnalysMessage1 = "Signifies a moderately stable rock mass, .";
          this.qAnalysMessage2 =
            "Support requirements are moderate but should still be considered,";
          this.qAnalysMessage3 =
            "Reasonable conditions for mining or tunneling, with proper engineering measures";
        } else if (val > 40 && val <= 60) {
          this.qAnalysMessage = "Indicates a strong and stable rock mass,";
          this.qAnalysMessage2 = "Support requirements are generally low,";
          this.qAnalysMessage3 =
            "Favorable conditions for mining or tunneling with minimal support";
        } else if (val <= 60) {
          this.qAnalysMessage1 =
            "Represents an exceptionally stable and strong rock mass,";
          this.qAnalysMessage2 = "Minimal to no support is typically required,";
          this.qAnalysMessage3 =
            "Ideal conditions for mining or tunneling operations";
        }
      },
      RMR() {
        axios
          .post("/api/rmr_model", {
            Q_Value: this.Q_Value,
          })
          .then((res) => {
            this.RMR_PredictedValue = res.data.prediction;

            this.Post_RMR()
            // val = val.split("[")[1];
            // val = val.split("]")[0];
            console.log(res.data);
            this.rmr_val =
              "Based on your input, the rock mass rating value is " + this.RMR_PredictedValue;
          });
      },

      ESR() {
        for (let i = 0; i < this.dictEsr.length - 1; i++) {
          if (this.EsrDesc.trim() == this.dictEsr[i]) {
            this.value_Esr = this.EsrDesc.split("(")[1];
            this.value_Esr = this.value_Esr.split(")")[0];
          }
        }

        axios
          .post("/api/esr_model", {
            ESR_Conditions: parseInt(this.value_Esr),
          })
          .then((res) => {
            console.log(res.data);
            this.EsrVal =
              "Based on your input, the predicted Excavation Category value is " +
              res.data.predictions[0];
          });
        setTimeout(() => (this.EsrVal = ""), 30000);
      },

      MUS() {
        axios
          .post("/api/mus_model", {
            Q_Value: this.Q_Value,
            ESR_VALUE: this.ESR_VALUE,
          })
          .then((res) => {
            this.Maximum_unsupported_span = res.data.prediction;
      
            this.Post_MUS()

            this.MUSValue = parseInt(Maximum_unsupported_span);
            console.log(res.data);
            this.MUSValue = "Based on your input, the predicted Maximum Unsupported span value is " + this.Maximum_unsupported_span / 2 + "m";
          });
      },
      refresh() {
        this.ExcMessage = "";
        this.SuppMessage = "";
        this.ImpMessage = "";
        this.rmr_val = "";
        this.SRFValue = "";
        this.Virgin_stress_ratio = "";
        this.srf_value = "";
        this.Q_Value = "";
        this.RQDValue = "";
        this.JnValue = "";
        this.JrValue = "";
        this.JaValue = "";
        this.JwValue = "";
        this.JnDesc = "";
        this.JaDesc = "";
        this.JwDesc = "";
        this.JrDesc = "";
        this.QValue = "";
        this.JwVal = "";
        this.Depth_from_surface = "";
        this.depth_to_surface = "";
        this.true_thickness = "";
        this.hardness_property = "";
        this.rmqMessage = "";
        this.RQDValue = "";
        this.MUSValue = "";
        this.ESR_VALUE = "";
        this.NumRQD = "";
        (this.rmqMessage = ""),
          (this.Depth = ""),
          (this.UCS = ""),
          (this.Density = ""),
          (this.ucsvsr_value = "");
      },
      init() {
        this.historicalData();
        this.getUCS();
        this.getSRF();
        this.getJN();
        this.getJr();
        this.getJa();
        this.getJw();
        this.getrqd();
        this.get_Q();
        this.get_RMR();
        this.get_ESR();
        this.get_MUS();

      },
      // WORK WITH HISSTORICAL DATA
      history_list: [],
      MainID: '',
      EditID: '',
      UCS_Hist: [],
      use_UCS: '',
      SRF_Hist: [],
      JnHist: [],
      JrHist: [],
      JaHist: [],
      JwHist: [],
      use_Depth_To: '',
      RQD_Hist: [],
      Q_Hist: [],
      use_Jn: '',
      use_Jr: '',
      use_Ja: '',
      use_Jw: '',
      use_SRF: '',
      use_RQD: '',
      use_Q_Value: '',
      RMR_Hist: [],
      ESR_Hist: [],
      MUS_Hist: [],
      use_ESR_Value: '',


      historicalData() {
        axios.get("/api/historical_data/")
          .then((res) => {
            console.log(res.data.historical_data);
            this.history_list = res.data.historical_data;
            console.log(this.history_list);
          });
      },
      // GetUCS_virginStress
      getUCS() {
        axios.get("/api/get_ucs_model")
          .then((res) => {
            this.UCS_Hist = res.data.historical_data;
            console.log(this.UCS_Hist);
          });
      },

      Post_UCS() {
        axios.post('/api/ucs_model_save',
          {
            Depth_To: this.Depth,
            Density: this.Density,
            UCS_Mpa: this.UCS,
            UCS_PredictedValue: this.UCS_Predicted,

          })
          .then((res) => {
            console.log(res.data);
            console.log('predicted value: ' + this.UCS_Predicted)
            this.getUCS();
          })
      },

      // WORK with SRF [get and post data to database]
      getSRF() {
        axios.get("/api/get_srf_model")
          .then((res) => {
            this.SRF_Hist = res.data.historical_data;
            this.use_UCS = res.data.historical_data[0].UCS_PredictedValue;
            this.use_Depth_To = res.data.historical_data[0].Depth_To;
            console.log(res.data.historical_data[0].Depth_To);
          });
      },
      Post_SRF() {
        axios.post('/api/srf_model_save',
          {

            MainID: this.EditID,
            SRF_PredictedValue: this.srf_predicted

          })
          .then((res) => {
            console.log(res.data);
            console.log('predicted value: ' + this.srf_predicted)
            this.getSRF();
          })
      },

      //JN MODEL
      getJN() {
        axios.get('/api/get_Jn_model')
          .then((res) => {
            console.log(res.data)
            this.JnHist = res.data.Jn_historical_data
          })
      },

      Post_Jn() {
        axios.post('/api/Jn_model_save', {
          Jn_predictedValue: this.Jn_predictedValue,
        })
          .then((res) => {
            console.log(res.data);
            this.getJN()
          })
      },
      //Jr MODEL
      getJr() {
        axios.get('/api/get_Jr_model')
          .then((res) => {
            console.log(res.data)
            this.JrHist = res.data.Jr_historical_data
          })
      },

      Post_Jr() {
        axios.post('/api/Jr_model_save', {
          Jr_predictedValue: this.Jr_predictedValue,
        })
          .then((res) => {
            console.log(res.data);
            this.getJr()
          })
      },
      //Ja MODEL
      getJa() {
        axios.get('/api/get_Ja_model')
          .then((res) => {
            console.log(res.data)
            this.JaHist = res.data.Ja_historical_data
          })
      },

      Post_Ja() {
        axios.post('/api/Ja_model_save', {
          Ja_predictedValue: this.Ja_predictedValue,
        })
          .then((res) => {
            console.log(res.data);
            this.getJa()
          })
      },
      //Jw MODEL
      getJw() {
        axios.get('/api/get_Jw_model')
          .then((res) => {
            console.log(res.data)
            this.JwHist = res.data.Jw_historical_data
          })
      },

      Post_Jw() {
        axios.post('/api/Jw_model_save', {
          Jw_predictedValue: this.Jw_predictedValue,
        })
          .then((res) => {
            console.log(res.data);
            this.getJw()
          })
      },
      //rqd MODEL
      getrqd() {
        axios.get('/api/get_RQD_model')
          .then((res) => {
            console.log(res.data)
            this.RQD_Hist = res.data.rqd_historical_data
          })
      },

      Post_rqd() {
        axios.post('/api/RQD_model_save', {
          Depth_From: this.Depth_from_surface,
          Depth_To: this.depth_to_surface,
          True_Thickness: this.true_thickness,
          Hardness: this.hardness_property,
          RQD_PredictedValue: this.RQD_PredictedValue
        })
          .then((res) => {
            console.log(res.data);
            console.log('RQD VALUE IS: ' + this.RQD_PredictedValue);
            this.getrqd();
          })
      },
      //Q Value MODEL
      get_Q() {
        axios.get('/api/get_Q_model')
          .then((res) => {
            console.log(res.data)
            console.log('JN VAL: ' + res.data.Q_historical_data[0].Jn_PredictedValue);

            this.use_Jn = res.data.Q_historical_data[0].Jn_PredictedValue;
            this.use_Jr = res.data.Q_historical_data[0].Jr_PredictedValue;
            this.use_Ja = res.data.Q_historical_data[0].Ja_PredictedValue;
            this.use_Jw = res.data.Q_historical_data[0].Jw_PredictedValue;
            this.use_SRF = res.data.Q_historical_data[0].SRF_PredictedValue;
            this.use_RQD = res.data.Q_historical_data[0].RQD_PredictedValue;
            
            this.Q_Hist = res.data.Q_historical_data;

          })
      },

      Post_Q() {
        axios.post('/api/Q_model_save', {
          RQD_PredictedValue: this.RQDValue,
          Jn_PredictedValue: this.JnValue,
          Jr_PredictedValue: this.JrValue,
          Ja_PredictedValue: this.JaValue,
          Jw_PredictedValue: this.JwValue,
          SRF_PredictedValue: this.SRFValue,
          
          Q_Value_PredictedValue: this.Q_Value_PredictedValue

        })
          .then((res) => {
            console.log(res.data);
            console.log('Q VALUE IS: ' + this.Q_Value_PredictedValue);
            this.get_Q();
          })
      },

      //RMR Value MODEL
      get_RMR() {
        axios.get('/api/get_RMR_model')
          .then((res) => {
            console.log(res.data)


            this.use_Q_Value = res.data.RMR_historical_data[0].Q_Value_PredictedValue;
            
            this.RMR_Hist = res.data.RMR_historical_data;

          })
      },

      Post_RMR() {
        axios.post('/api/RMR_model_save', {          
          RMR_PredictedValue: this.RMR_PredictedValue

        })
          .then((res) => {
            console.log(res.data);
            console.log('RMR VALUE IS: ' + this.RMR_PredictedValue);
            this.get_RMR();
          })
      },
        //ESR Value MODEL
        get_ESR() {
          axios.get('/api/get_ESR_model')
            .then((res) => {
              console.log(res.data)
  
  
              this.use_Q_Value = res.data.ESR_historical_data[0].Q_Value_PredictedValue;
              
              this.ESR_Hist = res.data.ESR_historical_data;
  
            })
        },
  
        Post_ESR() {
          axios.post('/api/ESR_model_save', {          
            ESR_PredictedValue: this.ESR_PredictedValue
  
          })
            .then((res) => {
              console.log(res.data);
              console.log('ESR VALUE IS: ' + this.ESR_PredictedValue);
              this.get_ESR();
            })
        },
         //ESR Value MODEL
         get_MUS() {
          axios.get('/api/get_MUS_model')
            .then((res) => {
              console.log(res.data)
  
  
              this.use_Q_Value = res.data.MUS_historical_data[0].Q_Value_PredictedValue;
              this.use_ESR_Value = res.data.MUS_historical_data[0].ESR_PredictedValue;
              
              this.MUS_Hist = res.data.MUS_historical_data;
  
            })
        },
  
        Post_MUS() {
          axios.post('/api/MUS_model_save', {          
            Maximum_unsupported_span: this.Maximum_unsupported_span
  
          })
            .then((res) => {
              console.log(res.data);
              console.log('MUS VALUE IS: ' + this.Maximum_unsupported_span);
              this.get_MUS();
            })
        }
  
  





















    };
  });
});
