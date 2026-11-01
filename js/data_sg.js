/* 新加坡 P3–P4 英文版（对照 MOE Primary Mathematics Syllabus 2021，2025 年 10 月更新版）
 * 条目为英文内容，_zh 为中文镜像；语言切换见 data_sg2.js（apply + push）。
 */
(function () {
  window.SG_ENTRIES = [
  {
    id: "sg_num3", grade: "P3", stage: "新加坡", anim: null,
    name: "Whole Numbers to 10 000",
    summary: "Place value to 10 000, four operations up to 4 digits, and division with remainder.",
    kou: "Line up the digits. Division with remainder: the remainder must be smaller than the divisor.",
    steps: [
      "<b>Place value</b>: 4 267 = 4 thousands, 2 hundreds, 6 tens, 7 ones; compare digit by digit from the left.",
      "<b>+/−</b> (up to 4 digits): line up the digits and regroup as needed; mental calc helps for two 2-digit numbers.",
      "<b>×/÷</b>: know tables 6–9; multiply/divide up to 3 digits by 1 digit.",
      "<b>Division with remainder</b>: 47 ÷ 6 = 7 remainder 5, because 7 × 6 = 42 and 47 − 42 = 5 (< 6)."
    ],
    prereq: null,
    questions: [
      { q: "In 4 267, the digit 2 stands for", opts: ["200", "20", "2", "2 000"], ans: 0, level: "Basic",
        explain: "The 2 is in the hundreds place: 2 hundreds = 200.", point: "Place value" },
      { q: "6 × 8 = ?", opts: ["48", "42", "54", "36"], ans: 0, level: "Basic",
        explain: "6 × 8 = 48 (from the 6 and 8 times tables).", point: "Times tables" },
      { q: "47 ÷ 6 = ?", opts: ["7 remainder 5", "7 remainder 6", "8 remainder 1", "6 remainder 11"], ans: 0, level: "Intermediate",
        explain: "7 × 6 = 42, and 47 − 42 = 5; a remainder must be smaller than the divisor.", point: "Division with remainder" },
      { q: "392 × 2 = ?", opts: ["784", "748", "694", "984"], ans: 0, level: "Intermediate",
        explain: "2 × 392 = 784 (2 × 300 + 2 × 90 + 2 × 2 = 600 + 180 + 4).", point: "Multiplication algorithm" }
    ],
    _zh: {
      name: "万以内的数（10 000 以内）（新加坡 P3）",
      summary: "10 000 以内的位值、四则运算（不超过 4 位数）与带余除法。",
      kou: "数位对齐；带余除法：余数必须小于除数。",
      steps: [
        "<b>位值</b>：4 267 = 4 个千、2 个百、6 个十、7 个一；从左到右逐位比较。",
        "<b>加减</b>（不超过 4 位）：数位对齐，进位退位；两个两位数可用心算。",
        "<b>乘除</b>：熟记 6~9 的乘法口诀；三位数乘/除以一位数。",
        "<b>带余除法</b>：47÷6=7 余 5，因为 7×6=42，47−42=5（<6）。"
      ],
      questions: [
        { q: "4 267 中的数字 2 表示？", opts: ["200", "20", "2", "2 000"], ans: 0, level: "基础",
          explain: "2 在百位上：2 个百 = 200。", point: "位值" },
        { q: "6 × 8 = ？", opts: ["48", "42", "54", "36"], ans: 0, level: "基础",
          explain: "6×8=48（口诀）。", point: "乘法口诀" },
        { q: "47 ÷ 6 = ？", opts: ["7 余 5", "7 余 6", "8 余 1", "6 余 11"], ans: 0, level: "进阶",
          explain: "7×6=42，47−42=5；余数必须小于除数。", point: "带余除法" },
        { q: "392 × 2 = ？", opts: ["784", "748", "694", "984"], ans: 0, level: "进阶",
          explain: "2×392=784（600+180+4）。", point: "乘法竖式" }
      ]
    }
  },
  {
    id: "sg_frac3", grade: "P3", stage: "新加坡", anim: null,
    name: "Equivalent Fractions & Simplest Form",
    summary: "Equivalent fractions, simplest form, comparing unlike fractions, adding related ones.",
    kou: "Same value, different names: multiply top and bottom by the same number. Simplest: divide by the HCF.",
    steps: [
      "<b>Equivalent</b>: 1/2 = 2/4 = 3/6 — multiply numerator and denominator by the same number.",
      "<b>Simplest form</b>: divide both by the HCF: 6/8 = 3/4.",
      "<b>Compare</b>: rename to the same denominator first, then compare numerators: 3/4 > 2/3 because 9/12 > 8/12.",
      "<b>Add related</b> (within one whole): 1/4 + 1/8 = 2/8 + 1/8 = 3/8."
    ],
    prereq: null,
    questions: [
      { q: "Which fraction is equivalent to 1/2?", opts: ["3/6", "2/5", "3/8", "4/6"], ans: 0, level: "Basic",
        explain: "1/2 = 1×3 / 2×3 = 3/6.", point: "Equivalent fractions" },
      { q: "6/8 written in its simplest form is", opts: ["3/4", "2/3", "1/2", "6/4"], ans: 0, level: "Basic",
        explain: "Divide both by the HCF 2: 6/8 = 3/4.", point: "Simplest form" },
      { q: "Which is greater: 3/4 or 2/3?", opts: ["3/4", "2/3", "They are equal", "Cannot compare"], ans: 0, level: "Intermediate",
        explain: "Same denominator: 9/12 vs 8/12 → 3/4 is greater.", point: "Compare unlike" },
      { q: "1/3 + 1/6 = ? (the whole is one)", opts: ["1/2", "2/9", "1/9", "2/3"], ans: 0, level: "Intermediate",
        explain: "1/3 = 2/6; 2/6 + 1/6 = 3/6 = 1/2.", point: "Related fractions +" }
    ],
    _zh: {
      name: "等值分数与最简分数（新加坡 P3）",
      summary: "等值分数、最简分数、异分母分数比较，以及相关分数的加减（一个整体内）。",
      kou: "同值不同名：分子分母同乘同数；最简：同除最大公因数。",
      steps: [
        "<b>等值</b>：1/2 = 2/4 = 3/6 —— 分子分母同乘一个数。",
        "<b>最简分数</b>：分子分母同除最大公因数：6/8 = 3/4。",
        "<b>比较</b>：先通分再比分子：3/4 > 2/3，因为 9/12 > 8/12。",
        "<b>相关分数相加</b>（一个整体内）：1/4 + 1/8 = 2/8 + 1/8 = 3/8。"
      ],
      questions: [
        { q: "下面哪个分数与 1/2 等值？", opts: ["3/6", "2/5", "3/8", "4/6"], ans: 0, level: "基础",
          explain: "1/2 = 1×3 / 2×3 = 3/6。", point: "等值分数" },
        { q: "6/8 的最简分数是？", opts: ["3/4", "2/3", "1/2", "6/4"], ans: 0, level: "基础",
          explain: "同除最大公因数 2：6/8 = 3/4。", point: "最简分数" },
        { q: "3/4 与 2/3 哪个大？", opts: ["3/4", "2/3", "一样大", "无法比较"], ans: 0, level: "进阶",
          explain: "通分后比分子：9/12 > 8/12，3/4 更大。", point: "异分母比较" },
        { q: "1/3 + 1/6 = ？（整体为一）", opts: ["1/2", "2/9", "1/9", "2/3"], ans: 0, level: "进阶",
          explain: "1/3 = 2/6；2/6 + 1/6 = 3/6 = 1/2。", point: "相关分数加法" }
      ]
    }
  },
  {
    id: "sg_money3", grade: "P3", stage: "新加坡", anim: null,
    name: "Money in Decimal Notation",
    summary: "Add and subtract money written as dollars and cents ($x.yz).",
    kou: "Line up the $ signs and decimal points; add the cents first.",
    steps: [
      "<b>Notation</b>: $3.50 is 3 dollars 50 cents; money is written with two decimal places.",
      "<b>Adding</b>: line up the amounts, add the cents column first.",
      "<b>Subtracting</b>: change = paid − cost; write $10 as $10.00 to subtract.",
      "<b>Check</b>: cents cannot exceed 99 — regroup: 100 cents = $1."
    ],
    prereq: null,
    questions: [
      { q: "$3.50 + $2.25 = ?", opts: ["$5.75", "$6.75", "$5.25", "$1.25"], ans: 0, level: "Basic",
        explain: "50¢ + 25¢ = 75¢; $3 + $2 = $5 → $5.75.", point: "Money +" },
      { q: "$10 − $4.65 = ?", opts: ["$5.35", "$5.65", "$6.35", "$4.35"], ans: 0, level: "Intermediate",
        explain: "$10.00 − $4.65 = $5.35.", point: "Money −" },
      { q: "A pen costs $1.85 and a ruler $0.95. Together they cost", opts: ["$2.80", "$1.90", "$2.90", "$2.70"], ans: 0, level: "Basic",
        explain: "Regroup: 95¢ = 15¢ + 80¢; $1.85 + 15¢ = $2.00, + 80¢ = $2.80.", point: "Money +" },
      { q: "You pay $20 for items costing $13.40. Your change is", opts: ["$6.60", "$7.60", "$6.40", "$6.50"], ans: 0, level: "Basic",
        explain: "$20.00 − $13.40 = $6.60.", point: "Change" }
    ],
    _zh: {
      name: "钱币与小数（新加坡 P3）",
      summary: "以元和分（$x.yz）的小数记法做加减。",
      kou: "$号与小数点对齐；先加/减“分”。",
      steps: [
        "<b>记法</b>：$3.50 是 3 元 50 分；钱币统一写两位小数。",
        "<b>相加</b>：数位对齐，先算分这一列。",
        "<b>相减</b>：找零 = 已付 − 价钱；把 $10 写成 $10.00 再减。",
        "<b>检查</b>：分不能超过 99 —— 100 分 = $1，需要进位。"
      ],
      questions: [
        { q: "$3.50 + $2.25 = ？", opts: ["$5.75", "$6.75", "$5.25", "$1.25"], ans: 0, level: "基础",
          explain: "50分+25分=75分；$3+$2=$5 → $5.75。", point: "钱币加法" },
        { q: "$10 − $4.65 = ？", opts: ["$5.35", "$5.65", "$6.35", "$4.35"], ans: 0, level: "进阶",
          explain: "$10.00 − $4.65 = $5.35。", point: "钱币减法" },
        { q: "一支笔 $1.85，一把尺 $0.95，一共？", opts: ["$2.80", "$1.90", "$2.90", "$2.70"], ans: 0, level: "基础",
          explain: "$1.85 + $0.95 = $2.80。", point: "钱币加法" },
        { q: "商品共 $13.40，付 $20，找零？", opts: ["$6.60", "$7.60", "$6.40", "$6.50"], ans: 0, level: "基础",
          explain: "$20.00 − $13.40 = $6.60。", point: "找零" }
      ]
    }
  },
  {
    id: "sg_unit3", grade: "P3", stage: "新加坡", anim: null,
    name: "Length, Mass, Volume & Units",
    summary: "Measure in km and ml; work with compound units and convert between units.",
    kou: "km→m and m→cm: ×100. kg→g and ℓ→ml: ×1000. Compound: split, convert, combine.",
    steps: [
      "<b>New units</b>: longer lengths are measured in kilometres (km); small liquid volumes in millilitres (ml).",
      "<b>Compound units</b>: 2 km 500 m; 3 ℓ 200 ml — two units side by side.",
      "<b>To the smaller unit</b>: × (1 km = 1 000 m; 1 m = 100 cm; 1 kg = 1 000 g; 1 ℓ = 1 000 ml).",
      "<b>Back again</b>: ÷ and regroup: 4 050 g = 4 kg 50 g."
    ],
    prereq: null,
    questions: [
      { q: "2 km 500 m = ? m", opts: ["2 500", "2 050", "205", "2 005"], ans: 0, level: "Basic",
        explain: "2 km = 2 000 m; 2 000 + 500 = 2 500 m.", point: "Compound units" },
      { q: "1 kg 300 g = ? g", opts: ["1 300", "1 030", "30", "1 100"], ans: 0, level: "Basic",
        explain: "1 kg = 1 000 g; 1 000 + 300 = 1 300 g.", point: "Compound units" },
      { q: "3 ℓ 200 ml = ? ml", opts: ["3 200", "320", "3 020", "3 005"], ans: 0, level: "Basic",
        explain: "3 ℓ = 3 000 ml; 3 000 + 200 = 3 200 ml.", point: "Compound units" },
      { q: "4 050 g written in kg and grams is", opts: ["4 kg 50 g", "40 kg 50 g", "4 kg 500 g", "4 kg 5 g"], ans: 0, level: "Intermediate",
        explain: "4 000 g = 4 kg, leaving 50 g.", point: "Regroup units" }
    ],
    _zh: {
      name: "长度、质量、容积与单位（新加坡 P3）",
      summary: "用千米和毫升度量；认识复合单位并互相换算。",
      kou: "km→m、m→cm：×100；kg→g、ℓ→ml：×1000。复合单位：拆开、换算、合并。",
      steps: [
        "<b>新单位</b>：更长的长度用千米（km）；小的液体体积用毫升（ml）。",
        "<b>复合单位</b>：2 千米 500 米；3 ℓ 200 ml —— 两个单位并排。",
        "<b>化小单位</b>：乘进率（1 km = 1 000 m；1 m = 100 cm；1 kg = 1 000 g；1 ℓ = 1 000 ml）。",
        "<b>化回大单位</b>：除以进率再合并：4 050 g = 4 kg 50 g。"
      ],
      questions: [
        { q: "2 千米 500 米 = ？米", opts: ["2 500", "2 050", "205", "2 005"], ans: 0, level: "基础",
          explain: "2 千米 = 2 000 米；2 000 + 500 = 2 500 米。", point: "复合单位" },
        { q: "1 千克 300 克 = ？克", opts: ["1 300", "1 030", "30", "1 100"], ans: 0, level: "基础",
          explain: "1 千克 = 1 000 克；1 000 + 300 = 1 300 克。", point: "复合单位" },
        { q: "3 ℓ 200 ml = ？ml", opts: ["3 200", "320", "3 020", "3 005"], ans: 0, level: "基础",
          explain: "3 ℓ = 3 000 ml；3 000 + 200 = 3 200 ml。", point: "复合单位" },
        { q: "4 050 克用千克和克表示是？", opts: ["4 千克 50 克", "40 千克 50 克", "4 千克 500 克", "4 千克 5 克"], ans: 0, level: "进阶",
          explain: "4 000 克 = 4 千克，余 50 克。", point: "单位重组" }
      ]
    }
  },
  {
    id: "sg_time3", grade: "P3", stage: "新加坡", anim: null,
    name: "Time: Seconds & 24-hour Clock",
    summary: "Measure in seconds, find start/finish time or duration, read the 24-hour clock.",
    kou: "60 seconds = 1 minute. 24-hour clock: p.m. hours add 12. Duration = end − start.",
    steps: [
      "<b>Seconds</b>: 60 seconds = 1 minute, so 2 min = 120 s.",
      "<b>24-hour clock</b>: 3:45 p.m. = 15:45; morning keeps its hours (8:30 a.m. = 08:30).",
      "<b>Duration</b>: finish − start; jump to the next whole hour first to make it easy.",
      "<b>Start/finish</b>: start + duration = finish; finish − duration = start."
    ],
    prereq: null,
    questions: [
      { q: "2 minutes = ? seconds", opts: ["120", "100", "60", "200"], ans: 0, level: "Basic",
        explain: "1 min = 60 s, so 2 × 60 = 120 s.", point: "Seconds" },
      { q: "15:45 in 12-hour (a.m./p.m.) time is", opts: ["3.45 p.m.", "3.45 a.m.", "5.45 p.m.", "1.45 p.m."], ans: 0, level: "Basic",
        explain: "15 − 12 = 3, afternoon → 3.45 p.m.", point: "24-hour clock" },
      { q: "A film starts at 14:50 and ends at 16:20. Its duration is", opts: ["1 h 30 min", "1 h 20 min", "2 h 30 min", "1 h 50 min"], ans: 0, level: "Intermediate",
        explain: "14:50 → 15:00 is 10 min; 15:00 → 16:00 is 1 h; 16:00 → 16:20 is 20 min → 1 h 30 min.", point: "Duration" },
      { q: "A bus ride of 2 h 25 min starts at 09:35. It arrives at", opts: ["12:00", "12:35", "11:50", "12:10"], ans: 0, level: "Intermediate",
        explain: "09:35 + 2 h = 11:35; + 25 min = 12:00.", point: "Finish time" }
    ],
    _zh: {
      name: "时间：秒与 24 小时制（新加坡 P3）",
      summary: "用秒度量、求开始/结束时间与经过时长、认识 24 小时制。",
      kou: "60 秒 = 1 分；24 小时制下午时数 +12；时长 = 结束 − 开始。",
      steps: [
        "<b>秒</b>：60 秒 = 1 分，所以 2 分 = 120 秒。",
        "<b>24 小时制</b>：下午 3:45 = 15:45；上午不变（8:30 a.m. = 08:30）。",
        "<b>时长</b>：结束 − 开始；先跳到下一个整点更好算。",
        "<b>开始/结束</b>：开始 + 时长 = 结束；结束 − 时长 = 开始。"
      ],
      questions: [
        { q: "2 分钟 = ？秒", opts: ["120", "100", "60", "200"], ans: 0, level: "基础",
          explain: "1 分 = 60 秒，2×60 = 120 秒。", point: "秒" },
        { q: "15:45 用 12 小时制表示是？", opts: ["下午 3:45", "上午 3:45", "下午 5:45", "下午 1:45"], ans: 0, level: "基础",
          explain: "15−12=3，下午 → 下午 3:45。", point: "24 小时制" },
        { q: "电影 14:50 开演、16:20 结束，时长是？", opts: ["1 小时 30 分", "1 小时 20 分", "2 小时 30 分", "1 小时 50 分"], ans: 0, level: "进阶",
          explain: "14:50→15:00 是 10 分；15:00→16:00 是 1 时；16:00→16:20 是 20 分 → 1 时 30 分。", point: "经过时长" },
        { q: "车程 2 时 25 分，09:35 出发，几点到达？", opts: ["12:00", "12:35", "11:50", "12:10"], ans: 0, level: "进阶",
          explain: "09:35+2 时 = 11:35；+25 分 = 12:00。", point: "结束时间" }
      ]
    }
  },
  {
    id: "sg_area3", grade: "P3", stage: "新加坡", anim: null,
    name: "Area & Perimeter Basics",
    summary: "Concepts of area and perimeter in square units; rectangle and square formulas.",
    kou: "Perimeter = walk the edge; area = cover with squares. Rectangle: P = 2(l + b), A = l × b.",
    steps: [
      "<b>Concepts</b>: perimeter is the distance around the edge; area is the number of square units that cover it.",
      "<b>Square units</b>: cm² and m² — a 1 cm² square is 1 cm by 1 cm.",
      "<b>Perimeter</b>: add all sides of a rectilinear figure; rectangle = 2 × (length + breadth); square = 4 × side.",
      "<b>Area</b>: rectangle = length × breadth; square = side × side."
    ],
    prereq: null,
    questions: [
      { q: "The perimeter of a 7 cm × 4 cm rectangle is", opts: ["22 cm", "28 cm", "11 cm", "14 cm"], ans: 0, level: "Basic",
        explain: "2 × (7 + 4) = 22 cm.", point: "Perimeter" },
      { q: "The area of a 7 cm × 4 cm rectangle is", opts: ["28 cm²", "22 cm²", "14 cm²", "11 cm²"], ans: 0, level: "Basic",
        explain: "7 × 4 = 28 cm².", point: "Area" },
      { q: "A square has perimeter 36 cm. Its side length is", opts: ["9 cm", "6 cm", "18 cm", "12 cm"], ans: 0, level: "Intermediate",
        explain: "36 ÷ 4 = 9 cm.", point: "Square side" },
      { q: "A room floor is 5 m by 4 m. Its area is", opts: ["20 m²", "10 m²", "18 m²", "9 m²"], ans: 0, level: "Basic",
        explain: "5 × 4 = 20 m².", point: "Area" }
    ],
    _zh: {
      name: "面积与周长基础（新加坡 P3）",
      summary: "面积与周长的概念（平方单位）；长方形与正方形公式。",
      kou: "周长=沿边走一圈；面积=铺满需要几个方格。长方形：周长=2×(长+宽)，面积=长×宽。",
      steps: [
        "<b>概念</b>：周长是绕边一圈的距离；面积是盖住它所需要的平方单位数。",
        "<b>平方单位</b>：厘米²（cm²）与米²（m²）—— 1 cm² 是 1 厘米 × 1 厘米的小方格。",
        "<b>周长</b>：折线图形把各边相加；长方形 = 2×(长+宽)；正方形 = 4×边长。",
        "<b>面积</b>：长方形 = 长×宽；正方形 = 边长×边长。"
      ],
      questions: [
        { q: "长 7 厘米、宽 4 厘米的长方形周长是？", opts: ["22 厘米", "28 厘米", "11 厘米", "14 厘米"], ans: 0, level: "基础",
          explain: "2×(7+4)=22 厘米。", point: "周长" },
        { q: "同一长方形的面积是？", opts: ["28 厘米²", "22 厘米²", "14 厘米²", "11 厘米²"], ans: 0, level: "基础",
          explain: "7×4=28 厘米²。", point: "面积" },
        { q: "正方形周长 36 厘米，边长是？", opts: ["9 厘米", "6 厘米", "18 厘米", "12 厘米"], ans: 0, level: "进阶",
          explain: "36÷4=9 厘米。", point: "求边长" },
        { q: "房间地面 5 米 × 4 米，面积是？", opts: ["20 米²", "10 米²", "18 米²", "9 米²"], ans: 0, level: "基础",
          explain: "5×4=20 米²。", point: "面积" }
      ]
    }
  },
  {
    id: "sg_geo3", grade: "P3", stage: "新加坡", anim: null,
    name: "Right Angles, Perpendicular & Parallel",
    summary: "Angle concept, comparing with right angles, perpendicular and parallel lines.",
    kou: "A right angle looks like the corner of a page. Perpendicular lines meet at 90°; parallel lines never meet.",
    steps: [
      "<b>Angle concept</b>: an angle is the amount of turn between two arms.",
      "<b>Right angle</b>: exactly a quarter turn; compare other angles as 'greater than' or 'smaller than' a right angle.",
      "<b>Perpendicular lines</b>: they meet at a right angle (90°).",
      "<b>Parallel lines</b>: they stay the same distance apart and never meet."
    ],
    prereq: null,
    questions: [
      { q: "A door opens wider than a right angle. Its opening angle is", opts: ["greater than a right angle", "smaller than a right angle", "exactly a right angle", "not an angle"], ans: 0, level: "Basic",
        explain: "Wider than 90° means the angle is greater than a right angle.", point: "Compare with right angle" },
      { q: "Which pair of lines meets at a right angle?", opts: ["Perpendicular lines", "Parallel lines", "Two lines that never meet", "A curved line and itself"], ans: 0, level: "Basic",
        explain: "Perpendicular lines form right angles where they meet.", point: "Perpendicular" },
      { q: "Railway tracks stay the same distance apart and never meet. They are", opts: ["parallel", "perpendicular", "crossing", "curved"], ans: 0, level: "Basic",
        explain: "Same distance apart and never meeting = parallel.", point: "Parallel" },
      { q: "How many right angles does a rectangle have?", opts: ["4", "2", "1", "8"], ans: 0, level: "Basic",
        explain: "All four corners of a rectangle are right angles.", point: "Right angles" }
    ],
    _zh: {
      name: "直角、垂直与平行（新加坡 P3）",
      summary: "角的概念、与直角比大小，以及垂直线与平行线。",
      kou: "直角像书页的角；垂直线相交成 90°；平行线永不相交。",
      steps: [
        "<b>角的概念</b>：角是两条边之间旋转的大小。",
        "<b>直角</b>：恰好四分之一圈；其他角用『比直角大/小』来描述。",
        "<b>垂直线</b>：相交成直角（90°）的线。",
        "<b>平行线</b>：距离始终相同，永不相交。"
      ],
      questions: [
        { q: "一扇门开得比直角大，这个角是？", opts: ["比直角大的角", "比直角小的角", "恰好是直角", "不是角"], ans: 0, level: "基础",
          explain: "比 90° 大 → 比直角大。", point: "与直角比较" },
        { q: "下面哪组线相交成直角？", opts: ["垂直线", "平行线", "永不相交的两条线", "自己与自己的曲线"], ans: 0, level: "基础",
          explain: "垂直线相交成直角。", point: "垂直" },
        { q: "铁轨距离始终相同、永不相交，它们是？", opts: ["平行线", "垂直线", "相交线", "曲线"], ans: 0, level: "基础",
          explain: "距离相同且永不相交 = 平行。", point: "平行" },
        { q: "长方形有几个直角？", opts: ["4 个", "2 个", "1 个", "8 个"], ans: 0, level: "基础",
          explain: "长方形四个角都是直角。", point: "直角" }
      ]
    }
  },
  {
    id: "sg_data3", grade: "P3", stage: "新加坡", anim: null,
    name: "Bar Graphs",
    summary: "Read and interpret bar graphs; work with different scales on the axis.",
    kou: "Scale first: one square may stand for 1, 2 or more. Taller bar = bigger value.",
    steps: [
      "<b>Values</b>: the height of each bar gives its value.",
      "<b>Scales</b>: check the axis — 1 square may count as 1, 2, 5 or 10 units.",
      "<b>Comparing</b>: taller = larger; find differences with subtraction.",
      "<b>Reporting</b>: answer in data terms — 'how many more', which is the most popular, and totals."
    ],
    prereq: null,
    questions: [
      { q: "A bar graph's scale is 1 square = 2 children. A bar of 6 squares stands for", opts: ["12 children", "6 children", "8 children", "60 children"], ans: 0, level: "Basic",
        explain: "6 × 2 = 12 children.", point: "Scales" },
      { q: "Baseball has 15 children, Tennis has 9. How many more chose Baseball?", opts: ["6", "5", "24", "18"], ans: 0, level: "Basic",
        explain: "15 − 9 = 6.", point: "Compare data" },
      { q: "Reading 14, Drawing 10, Singing 18 children. Which is the most popular activity?", opts: ["Singing", "Reading", "Drawing", "All equal"], ans: 0, level: "Basic",
        explain: "The tallest value is Singing with 18.", point: "Most popular" },
      { q: "Altogether, Reading 14 + Drawing 10 + Singing 18 is", opts: ["42", "38", "40", "28"], ans: 0, level: "Basic",
        explain: "14 + 10 + 18 = 42.", point: "Totals" }
    ],
    _zh: {
      name: "条形统计图（新加坡 P3）",
      summary: "读条形图、理解条形图；注意坐标轴上的不同刻度。",
      kou: "先看刻度：一格可能代表 1、2 或更多。条越高，数量越大。",
      steps: [
        "<b>读数值</b>：每根条的高度就是数量。",
        "<b>刻度</b>：先查坐标轴 —— 1 格可能代表 1、2、5 或 10 个单位。",
        "<b>比较</b>：条更高 = 更大；相差多少用减法。",
        "<b>汇报</b>：用数据语言回答——『多几个』『最受欢迎』『总数』。"
      ],
      questions: [
        { q: "条形图刻度为 1 格 = 2 人。6 格的条代表多少人？", opts: ["12 人", "6 人", "8 人", "60 人"], ans: 0, level: "基础",
          explain: "6×2=12 人。", point: "刻度" },
        { q: "棒球 15 人，网球 9 人。选棒球的多几人？", opts: ["6", "5", "24", "18"], ans: 0, level: "基础",
          explain: "15−9=6 人。", point: "数据比较" },
        { q: "阅读 14 人、画画 10 人、唱歌 18 人。最受欢迎的活动是？", opts: ["唱歌", "阅读", "画画", "一样多"], ans: 0, level: "基础",
          explain: "最大值是唱歌（18 人）。", point: "最受欢迎" },
        { q: "阅读 14 + 画画 10 + 唱歌 18，一共？", opts: ["42", "38", "40", "28"], ans: 0, level: "基础",
          explain: "14+10+18=42 人。", point: "求总数" }
      ]
    }
  },
  {
    id: "sg_num4", grade: "P4", stage: "新加坡", anim: null,
    name: "Whole Numbers to 100 000",
    summary: "Read, write, compare and round numbers up to 100 000.",
    kou: "Place by place: ten-thousands, thousands, hundreds, tens, ones. 5 000+ rounds up.",
    steps: [
      "<b>Place value</b>: 45 678 = 4 ten-thousands, 5 thousands, 6 hundreds, 7 tens, 8 ones.",
      "<b>Compare</b>: more digits wins; same digits → compare from the left.",
      "<b>Round</b>: to the nearest hundred/thousand, look at the next digit: 5 or more rounds <b>up</b>.",
      "<b>Pattern</b>: find the rule (+100, +250, ×10 …) before filling the blank."
    ],
    prereq: null,
    questions: [
      { q: "In 45 678, what is the value of the digit 5?", opts: ["5 000", "500", "50", "45 678"], ans: 0, level: "Basic",
        explain: "The 5 is in the thousands place: 5 thousands = 5 000.", point: "Place value" },
      { q: "38 521 rounded to the nearest thousand is", opts: ["39 000", "38 000", "39 500", "38 600"], ans: 0, level: "Basic",
        explain: "Hundreds digit is 5, so round up: 38 521 → 39 000.", point: "Rounding" },
      { q: "Which of these numbers is the greatest?", opts: ["41 000", "40 998", "40 891", "39 999"], ans: 0, level: "Intermediate",
        explain: "41 000 > 40 998 > 40 891 > 39 999. Compare thousands digit first.", point: "Compare" },
      { q: "Continue the pattern: 3 200, 3 500, 3 800, ……", opts: ["4 100", "4 000", "4 300", "3 900"], ans: 0, level: "Basic",
        explain: "Each term is +300, so 3 800 + 300 = 4 100.", point: "Pattern" }
    ],
    _zh: {
      name: "万位数与近似数（新加坡 P4）",
      summary: "读写、比较 100 000 以内的数并求近似值。",
      kou: "逐位看：万位、千位、百位、十位、个位；下一位逢 5 进一。",
      steps: [
        "<b>位值</b>：45 678 = 4 个万、5 个千、6 个百、7 个十、8 个一。",
        "<b>比大小</b>：位数多的大；位数相同从高位比起。",
        "<b>近似数</b>：看下一位，满 5 向上取整。",
        "<b>找规律</b>：先确定规则（+100、+250、×10…）再填空。"
      ],
      questions: [
        { q: "45 678 中，数字 5 表示多少？", opts: ["5 000", "500", "50", "45 678"], ans: 0, level: "基础",
          explain: "5 在千位上，表示 5 个千，即 5 000。", point: "位值" },
        { q: "38 521 精确到千位的近似数是？", opts: ["39 000", "38 000", "39 500", "38 600"], ans: 0, level: "基础",
          explain: "百位是 5，向上取整：38 521 → 39 000。", point: "近似数" },
        { q: "下面哪个数最大？", opts: ["41 000", "40 998", "40 891", "39 999"], ans: 0, level: "进阶",
          explain: "41 000 > 40 998 > 40 891 > 39 999，先比千位。", point: "比大小" },
        { q: "按规律填数：3 200、3 500、3 800、……", opts: ["4 100", "4 000", "4 300", "3 900"], ans: 0, level: "基础",
          explain: "每次 +300：3 800 + 300 = 4 100。", point: "找规律" }
      ]
    }
  },
  {
    id: "sg_fact4", grade: "P4", stage: "新加坡", anim: null,
    name: "Factors & Multiples",
    summary: "Find factors and multiples; common factors and common multiples.",
    kou: "Factors come in pairs and stop at the number; multiples go on forever. Share → common.",
    steps: [
      "<b>Factor</b>: a×b = N ⇔ a and b are factors of N; find them in pairs.",
      "<b>Multiple</b>: N × 1, N × 2, N × 3 … never runs out.",
      "<b>Common factor</b> divides both numbers; the largest is the HCF.",
      "<b>Common multiple</b>: both numbers divide into it; the first is the LCM."
    ],
    prereq: null,
    questions: [
      { q: "How many factors does 24 have?", opts: ["8", "6", "12", "24"], ans: 0, level: "Basic",
        explain: "1×24, 2×12, 3×8, 4×6 → 8 factors.", point: "Factors" },
      { q: "Which of these is NOT a factor of 36?", opts: ["8", "9", "6", "12"], ans: 0, level: "Basic",
        explain: "8 does not divide 36 evenly; 9, 6, 12 all do.", point: "Factor check" },
      { q: "The greatest common factor of 12 and 18 is", opts: ["6", "3", "12", "36"], ans: 0, level: "Intermediate",
        explain: "12: 1,2,3,4,6,12. 18: 1,2,3,6,9,18. Common: 1,2,3,6 → greatest 6.", point: "Common factor" },
      { q: "The first two common multiples of 4 and 6 are", opts: ["12 and 24", "8 and 12", "24 and 36", "12 and 18"], ans: 0, level: "Intermediate",
        explain: "Multiples of 4: 4,8,12,16,20,24… Multiples of 6: 6,12,18,24… Common first: 12, then 24.", point: "Common multiple" }
    ],
    _zh: {
      name: "因数与倍数（新加坡 P4）",
      summary: "找因数与倍数，再认识公因数与公倍数。",
      kou: "因数成对找，到本身为止；倍数无限多；“共同”再看交叉。",
      steps: [
        "<b>因数</b>：a×b=N，则 a、b 都是 N 的因数，成对找。",
        "<b>倍数</b>：N×1、N×2、N×3…无穷多。",
        "<b>公因数</b>：两数共有的因数；最大的是最大公因数。",
        "<b>公倍数</b>：被两数同时整除；最先出现的是最小公倍数。"
      ],
      questions: [
        { q: "24 的因数有几个？", opts: ["8", "6", "12", "24"], ans: 0, level: "基础",
          explain: "1×24、2×12、3×8、4×6 → 共 8 个。", point: "因数" },
        { q: "下面哪个不是 36 的因数？", opts: ["8", "9", "6", "12"], ans: 0, level: "基础",
          explain: "8 不能整除 36；9、6、12 都可以。", point: "因数判断" },
        { q: "12 和 18 的最大公因数是？", opts: ["6", "3", "12", "36"], ans: 0, level: "进阶",
          explain: "12 的因数：1,2,3,4,6,12；18 的：1,2,3,6,9,18；公有最大是 6。", point: "公因数" },
        { q: "4 和 6 最小的两个公倍数是？", opts: ["12 和 24", "8 和 12", "24 和 36", "12 和 18"], ans: 0, level: "进阶",
          explain: "4 的倍数：4,8,12,16,20,24…；6 的倍数：6,12,18,24…最先共同的有 12、24。", point: "公倍数" }
      ]
    }
  },
  {
    id: "sg_model4", grade: "P4", stage: "新加坡", anim: null,
    name: "Bar Model Method",
    summary: "Draw part-whole and comparison bars; work with “units”.",
    kou: "Draw the bar: whole = sum of parts; difference = the gap. Then count units.",
    steps: [
      "<b>Part-whole model</b>: the long bar = all parts joined together.",
      "<b>Comparison model</b>: two bars; the extra bit is the <b>difference</b>.",
      "<b>Units</b>: label equal pieces “1 unit”, then find what 1 unit is worth.",
      "Total & difference known: bigger = (total + difference) ÷ 2."
    ],
    prereq: null,
    questions: [
      { q: "Ali has $45. Ben has $18 more than Ali. How much do they have altogether?", opts: ["$108", "$63", "$90", "$126"], ans: 0, level: "Basic",
        explain: "Ben = 45 + 18 = 63. Total = 45 + 63 = 108.", point: "Part-whole model" },
      { q: "A ribbon is 36 cm long. Another ribbon is 9 cm shorter. How long is the shorter ribbon?", opts: ["27 cm", "45 cm", "18 cm", "36 cm"], ans: 0, level: "Basic",
        explain: "36 − 9 = 27 cm.", point: "Comparison model" },
      { q: "Two numbers have a total of 40 and a difference of 8. What is the larger number?", opts: ["24", "16", "20", "26"], ans: 0, level: "Intermediate",
        explain: "Larger = (40 + 8) ÷ 2 = 24; smaller = 16.", point: "Units method" },
      { q: "A pen costs $6. A book costs 4 times as much. How much do one pen and one book cost altogether?", opts: ["$30", "$24", "$10", "$18"], ans: 0, level: "Intermediate",
        explain: "Book = 6 × 4 = 24. Total = 6 + 24 = 30.", point: "Model with units" }
    ],
    _zh: {
      name: "线段图法（模型法）",
      summary: "画部分—整体图与比较图，用“份”解题。",
      kou: "先画图：整体=各部分相加；差=多出的那段；再数份数。",
      steps: [
        "<b>部分-整体模型</b>：长条=所有部分拼起来。",
        "<b>比较模型</b>：两条并排，多出的一段是<b>差</b>。",
        "<b>份数（units）</b>：把相等的段标为“1 份”，先求 1 份是多少。",
        "已知和与差：大数=(和+差)÷2。"
      ],
      questions: [
        { q: "阿里有 45 元，本比阿里多 18 元，两人一共有多少元？", opts: ["108 元", "63 元", "90 元", "126 元"], ans: 0, level: "基础",
          explain: "本=45+18=63 元；共 45+63=108 元。", point: "部分-整体" },
        { q: "一根丝带长 36 厘米，另一根比它短 9 厘米。短的有多少厘米？", opts: ["27 厘米", "45 厘米", "18 厘米", "36 厘米"], ans: 0, level: "基础",
          explain: "36−9=27 厘米。", point: "比较模型" },
        { q: "两个数的和是 40，差是 8。较大的数是多少？", opts: ["24", "16", "20", "26"], ans: 0, level: "进阶",
          explain: "大数=(40+8)÷2=24；小数=16。", point: "份数法" },
        { q: "一支钢笔 6 元，一本书的价钱是它的 4 倍。一钢笔一本书共多少钱？", opts: ["30 元", "24 元", "10 元", "18 元"], ans: 0, level: "进阶",
          explain: "书=6×4=24 元；共 6+24=30 元。", point: "份数模型" }
      ]
    }
  },
  {
    id: "sg_dec4", grade: "P4", stage: "新加坡", anim: null,
    name: "Decimals (up to 3 d.p.)",
    summary: "Tenths, hundredths, thousandths; the four operations; rounding and fraction ↔ decimal.",
    kou: "Line up the decimal points to add/subtract; ≈5 rounds up; 3/10 = 0.3.",
    steps: [
      "1 tenth = 0.1, 1 hundredth = 0.01, 1 thousandth = 0.001; 10 hundredths = 1 tenth.",
      "<b>+/−</b> (up to 2 d.p.): line up the decimal points. <b>×/÷ by a 1-digit whole number</b>: treat digits then place the point.",
      "<b>Fractions ↔ decimals</b>: 3/10 = 0.3, 3/100 = 0.03; when the denominator is a factor of 10 or 100, rename: 1/4 = 25/100 = 0.25.",
      "<b>Rounding</b>: to the nearest whole number / 0.1 / 0.01 — look at the next digit; 5 or more rounds <b>up</b>."
    ],
    prereq: null,
    questions: [
      { q: "3.4 + 2.85 = ?", opts: ["6.25", "6.35", "5.25", "6.89"], ans: 0, level: "Basic",
        explain: "Line up: 3.40 + 2.85 = 6.25.", point: "Decimal addition" },
      { q: "10 − 4.55 = ?", opts: ["5.45", "5.55", "4.55", "6.55"], ans: 0, level: "Basic",
        explain: "10.00 − 4.55 = 5.45.", point: "Decimal subtraction" },
      { q: "2.4 × 3 = ?", opts: ["7.2", "6.8", "72", "0.72"], ans: 0, level: "Basic",
        explain: "24 × 3 = 72; one decimal place in 2.4 → 7.2.", point: "Decimal multiplication" },
      { q: "Round 2.365 to 1 decimal place.", opts: ["2.4", "2.3", "2.36", "2.37"], ans: 0, level: "Basic",
        explain: "The hundredths digit is 6 (≥5), so round up: 2.365 → 2.4.", point: "Rounding decimals" },
      { q: "3/10 written as a decimal is", opts: ["0.3", "0.03", "3.0", "0.13"], ans: 0, level: "Basic",
        explain: "Three tenths = 0.3; three HUNDREDTHS would be 0.03.", point: "Fraction ↔ decimal" },
      { q: "Which of these decimals is the greatest?", opts: ["1.35", "1.3", "1.29", "1.32"], ans: 0, level: "Intermediate",
        explain: "1.35 > 1.32 > 1.3 > 1.29. Compare tenths, then hundredths.", point: "Compare decimals" }
    ],
    _zh: {
      name: "小数（三位小数）（新加坡 P4）",
      summary: "十分位、百分位、千分位；四则运算；取近似值与分数↔小数。",
      kou: "加减对齐小数点；下一位满 5 进一；3/10 = 0.3。",
      steps: [
        "1 个十分之一 = 0.1；10 个百分之一 = 1 个十分之一；10 个千分之一 = 1 个百分之一。",
        "<b>加减</b>（不超过两位小数）：小数点对齐。<b>×/÷ 一位数</b>：按数字算好再点小数点。",
        "<b>分数↔小数</b>：3/10 = 0.3，3/100 = 0.03；分母是 10 或 100 的因数时先改名：1/4 = 25/100 = 0.25。",
        "<b>近似值</b>：精确到整数 / 0.1 / 0.01 —— 看下一位，满 5 向上取整。"
      ],
      questions: [
        { q: "3.4 + 2.85 = ？", opts: ["6.25", "6.35", "5.25", "6.89"], ans: 0, level: "基础",
          explain: "对齐：3.40 + 2.85 = 6.25。", point: "小数加法" },
        { q: "10 − 4.55 = ？", opts: ["5.45", "5.55", "4.55", "6.55"], ans: 0, level: "基础",
          explain: "10.00 − 4.55 = 5.45。", point: "小数减法" },
        { q: "2.4 × 3 = ？", opts: ["7.2", "6.8", "72", "0.72"], ans: 0, level: "基础",
          explain: "24×3=72；2.4 有一位小数 → 7.2。", point: "小数乘法" },
        { q: "把 2.365 精确到 0.1。", opts: ["2.4", "2.3", "2.36", "2.37"], ans: 0, level: "基础",
          explain: "百分位是 6（满 5），向上取整：2.365 → 2.4。", point: "小数近似" },
        { q: "3/10 写成小数是？", opts: ["0.3", "0.03", "3.0", "0.13"], ans: 0, level: "基础",
          explain: "十分之三 = 0.3；百分之三才是 0.03。", point: "分数↔小数" },
        { q: "下面哪个小数最大？", opts: ["1.35", "1.3", "1.29", "1.32"], ans: 0, level: "进阶",
          explain: "1.35 > 1.32 > 1.3 > 1.29。", point: "小数比较" }
      ]
    }
  },
  {
    id: "sg_fract4", grade: "P4", stage: "新加坡", anim: null,
    name: "Fractions: Mixed Numbers & Improper",
    summary: "Mixed numbers, improper fractions, fraction of a set, and adding related fractions.",
    kou: "Mixed → improper: whole × bottom + top. Improper → mixed: divide; the remainder sits on top.",
    steps: [
      "<b>Mixed → improper</b>: (whole × denominator + numerator) on top: 3 1/4 = (3×4+1)/4 = 13/4.",
      "<b>Improper → mixed</b>: divide; quotient = whole number, remainder over divisor: 17/5 = 3 2/5.",
      "<b>Fraction of a set</b>: divide by the denominator first, then take the numerator: 1/4 of 24 = 6; 3/4 of 24 = 18.",
      "<b>Related fractions</b>: rename to a common denominator before adding or subtracting: 5/12 − 1/3 = 5/12 − 4/12 = 1/12."
    ],
    prereq: null,
    questions: [
      { q: "3 1/4 written as an improper fraction is", opts: ["13/4", "12/4", "31/4", "7/4"], ans: 0, level: "Basic",
        explain: "3 × 4 + 1 = 13 → 13/4.", point: "Mixed → improper" },
      { q: "17/5 written as a mixed number is", opts: ["3 2/5", "3 1/5", "2 3/5", "7 2/5"], ans: 0, level: "Basic",
        explain: "17 ÷ 5 = 3 remainder 2 → 3 2/5.", point: "Improper → mixed" },
      { q: "There are 21 pens. What is 1/3 of them?", opts: ["7", "3", "6", "14"], ans: 0, level: "Basic",
        explain: "21 ÷ 3 = 7 pens.", point: "Fraction of a set" },
      { q: "5/12 − 1/3 = ?", opts: ["1/12", "4/12", "1/3", "3/12"], ans: 0, level: "Intermediate",
        explain: "1/3 = 4/12; 5/12 − 4/12 = 1/12.", point: "Related fractions" }
    ],
    _zh: {
      name: "分数：带分数与假分数（新加坡 P4）",
      summary: "带分数、假分数、占一组物体的几分之几，以及相关分数的加减。",
      kou: "带分数→假分数：整数×分母+分子；假分数→带分数：除一除，余数留在上面。",
      steps: [
        "<b>带分数→假分数</b>：(整数×分母+分子) 作分子：3 1/4 = (3×4+1)/4 = 13/4。",
        "<b>假分数→带分数</b>：分子÷分母，商做整数、余数做分子：17/5 = 3 2/5。",
        "<b>分数占一组</b>：先除以分母再取分子：24 颗的 1/4 = 6；3/4 = 18。",
        "<b>相关分数加减</b>：先通分（分母为 12 以内的相关分数）：5/12 − 1/3 = 5/12 − 4/12 = 1/12。"
      ],
      questions: [
        { q: "3 1/4 化成假分数是？", opts: ["13/4", "12/4", "31/4", "7/4"], ans: 0, level: "基础",
          explain: "3×4+1=13 → 13/4。", point: "带分数→假分数" },
        { q: "17/5 化成带分数是？", opts: ["3 2/5", "3 1/5", "2 3/5", "7 2/5"], ans: 0, level: "基础",
          explain: "17÷5=3 余 2 → 3 2/5。", point: "假分数→带分数" },
        { q: "共有 21 支笔，1/3 是多少支？", opts: ["7 支", "3 支", "6 支", "14 支"], ans: 0, level: "基础",
          explain: "21÷3=7 支。", point: "分数占一组" },
        { q: "5/12 − 1/3 = ？", opts: ["1/12", "4/12", "1/3", "3/12"], ans: 0, level: "进阶",
          explain: "1/3 = 4/12；5/12 − 4/12 = 1/12。", point: "相关分数" }
      ]
    }
  },
  {
    id: "sg_area4", grade: "P4", stage: "新加坡", anim: null,
    name: "Area & Perimeter of Composite Figures",
    summary: "Rectangle/square formulas, find a missing dimension, and composite figures.",
    kou: "Area = length × breadth; perimeter = walk the outline once. Composite = split, then add.",
    steps: [
      "<b>Rectangle</b>: area = length × breadth; perimeter = 2 × (length + breadth).",
      "<b>Missing side</b>: breadth = area ÷ length (or perimeter ÷ 2 − length).",
      "<b>Square</b>: area = side × side; side = perimeter ÷ 4.",
      "<b>Composite figures</b>: split into rectangles and squares, add the areas; for perimeter, walk the outer outline only."
    ],
    prereq: null,
    questions: [
      { q: "A rectangle is 12 cm by 8 cm. Its perimeter is", opts: ["40 cm", "96 cm", "20 cm", "44 cm"], ans: 0, level: "Basic",
        explain: "2 × (12 + 8) = 40 cm. (96 cm² is the area!)", point: "Perimeter" },
      { q: "A square has side 9 cm. Its area is", opts: ["81 cm²", "36 cm²", "72 cm²", "18 cm²"], ans: 0, level: "Basic",
        explain: "9 × 9 = 81 cm².", point: "Area of square" },
      { q: "A rectangle has area 96 cm² and length 12 cm. Its breadth is", opts: ["8 cm", "9 cm", "6 cm", "10 cm"], ans: 0, level: "Intermediate",
        explain: "Breadth = 96 ÷ 12 = 8 cm.", point: "Missing dimension" },
      { q: "A figure is made by joining an 8 cm × 5 cm rectangle and a 4 cm × 3 cm rectangle (no overlap). The total area is", opts: ["52 cm²", "44 cm²", "32 cm²", "56 cm²"], ans: 0, level: "Intermediate",
        explain: "8 × 5 = 40; 4 × 3 = 12; total = 40 + 12 = 52 cm².", point: "Composite area" }
    ],
    _zh: {
      name: "组合图形的面积与周长（新加坡 P4）",
      summary: "长方形/正方形公式、求缺边，以及组合图形。",
      kou: "面积=长×宽；周长=沿外框走一圈。组合图形：先分割，再相加。",
      steps: [
        "<b>长方形</b>：面积=长×宽；周长=2×(长+宽)。",
        "<b>求缺边</b>：宽=面积÷长（或 周长÷2−长）。",
        "<b>正方形</b>：面积=边长×边长；边长=周长÷4。",
        "<b>组合图形</b>：分割成长方形与正方形后面积相加；求周长只沿外框走一圈。"
      ],
      questions: [
        { q: "长方形长 12 厘米、宽 8 厘米，周长是？", opts: ["40 厘米", "96 厘米", "20 厘米", "44 厘米"], ans: 0, level: "基础",
          explain: "2×(12+8)=40 厘米（96 厘米² 是面积，别混）。", point: "周长" },
        { q: "正方形边长 9 厘米，面积是？", opts: ["81 厘米²", "36 厘米²", "72 厘米²", "18 厘米²"], ans: 0, level: "基础",
          explain: "9×9=81 厘米²。", point: "正方形面积" },
        { q: "长方形面积 96 厘米²，长 12 厘米，宽是？", opts: ["8 厘米", "9 厘米", "6 厘米", "10 厘米"], ans: 0, level: "进阶",
          explain: "宽=96÷12=8 厘米。", point: "求缺边" },
        { q: "把 8×5 厘米² 与 4×3 厘米² 两个长方形拼在一起（不重叠），总面积是？", opts: ["52 厘米²", "44 厘米²", "32 厘米²", "56 厘米²"], ans: 0, level: "进阶",
          explain: "8×5=40；4×3=12；共 40+12=52 厘米²。", point: "组合面积" }
      ]
    }
  },
  {
    id: "sg_ang4", grade: "P4", stage: "新加坡", anim: null,
    name: "Angles (Naming & Measuring)",
    summary: "Name angles, measure in degrees, and know the properties of rectangles and squares.",
    kou: "Acute < 90°, right = 90°, obtuse 90°–180°, straight = 180°. Quarter turn = 90°.",
    steps: [
      "<b>Naming</b>: ∠ABC (vertex in the middle) or with a small letter, e.g. ∠a.",
      "<b>Measuring</b>: place the protractor centre on the vertex, baseline on one arm, read the degrees.",
      "<b>Sizes</b>: acute < 90°, right = 90°, obtuse between 90° and 180°, straight = 180°.",
      "<b>Figures</b>: a rectangle has 4 right angles and equal opposite sides; a square has 4 equal sides and 4 right angles."
    ],
    prereq: null,
    questions: [
      { q: "An angle of 92° is", opts: ["an obtuse angle", "an acute angle", "a right angle", "a straight angle"], ans: 0, level: "Basic",
        explain: "92° is just above 90°, so it is obtuse.", point: "Angle type" },
      { q: "How many degrees is a quarter turn?", opts: ["90°", "45°", "180°", "360°"], ans: 0, level: "Basic",
        explain: "A full turn is 360°, so a quarter turn is 360 ÷ 4 = 90°.", point: "Turns" },
      { q: "Each angle of a rectangle measures", opts: ["90°", "180°", "45°", "360°"], ans: 0, level: "Basic",
        explain: "All four angles of a rectangle (and of a square) are right angles.", point: "Rectangle & square" },
      { q: "An angle of 35° is", opts: ["an acute angle", "an obtuse angle", "a right angle", "a straight angle"], ans: 0, level: "Basic",
        explain: "35° < 90°, so it is acute.", point: "Angle type" }
    ],
    _zh: {
      name: "角（命名与度量）（新加坡 P4）",
      summary: "给角命名、用度数度量，并掌握长方形与正方形的性质。",
      kou: "锐角<90°，直角=90°，钝角在 90°~180°，平角=180°；四分之一圈=90°。",
      steps: [
        "<b>命名</b>：∠ABC（顶点在中间）或用小写字母，如 ∠a。",
        "<b>度量</b>：量角器中心对顶点、0 线贴一条边，读出度数。",
        "<b>大小</b>：锐角<90°，直角=90°，钝角在 90°~180°，平角=180°。",
        "<b>图形</b>：长方形四个角都是直角、对边相等；正方形四边相等、四个直角。"
      ],
      questions: [
        { q: "92° 的角是？", opts: ["钝角", "锐角", "直角", "平角"], ans: 0, level: "基础",
          explain: "92° 刚超过 90°，所以是钝角。", point: "角的种类" },
        { q: "四分之一圈是多少度？", opts: ["90°", "45°", "180°", "360°"], ans: 0, level: "基础",
          explain: "一圈 360°，四分之一圈 = 360÷4 = 90°。", point: "旋转角" },
        { q: "长方形的每个角都是？", opts: ["90°", "180°", "45°", "360°"], ans: 0, level: "基础",
          explain: "长方形（和正方形）四个角都是直角。", point: "长方形与正方形" },
        { q: "35° 的角是？", opts: ["锐角", "钝角", "直角", "平角"], ans: 0, level: "基础",
          explain: "35° < 90°，是锐角。", point: "角的种类" }
      ]
    }
  },
  {
    id: "sg_sym4", grade: "P4", stage: "新加坡", anim: null,
    name: "Line Symmetry & Nets",
    summary: "Lines of symmetry, completing symmetric figures, and nets of 3-D solids.",
    kou: "Fold test: both halves must match exactly. Cube net = 6 faces.",
    steps: [
      "<b>Line symmetry</b>: fold the figure along the line — the two halves match exactly.",
      "<b>Counting lines</b>: square 4, rectangle 2, equilateral triangle 3, isosceles triangle 1.",
      "<b>Completing a figure</b>: every point and its mirror point are equally far from the line of symmetry (on square grid).",
      "<b>Nets</b>: cube, cuboid, prism and pyramid unfold into flat nets; a cube's net shows 6 faces."
    ],
    prereq: null,
    questions: [
      { q: "How many lines of symmetry does a square have?", opts: ["4", "2", "1", "8"], ans: 0, level: "Basic",
        explain: "Fold 4 ways: middle vertical, middle horizontal, and two diagonals.", point: "Lines of symmetry" },
      { q: "How many lines of symmetry does a rectangle (not a square) have?", opts: ["2", "1", "4", "0"], ans: 0, level: "Basic",
        explain: "Only the two middle lines work; diagonals do NOT fold a rectangle into matching halves.", point: "Lines of symmetry" },
      { q: "The net of a cube is made of how many equal faces?", opts: ["6", "4", "8", "12"], ans: 0, level: "Basic",
        explain: "A cube has 6 square faces, so its net has 6 squares.", point: "Nets" },
      { q: "A net has a square base with 4 triangles around it. Which solid does it form?", opts: ["a square pyramid", "a cube", "a cuboid", "a triangular prism"], ans: 0, level: "Intermediate",
        explain: "Square base + 4 triangles meeting at the top = square pyramid.", point: "Identify the solid" }
    ],
    _zh: {
      name: "轴对称与展开图（新加坡 P4）",
      summary: "对称轴条数、在方格纸上补全对称图形，以及立体图形的展开图。",
      kou: "对折检验：两半完全重合。正方体展开图有 6 个面。",
      steps: [
        "<b>轴对称</b>：沿对称线对折，两半完全重合。",
        "<b>数对称轴</b>：正方形 4 条，长方形 2 条，等边三角形 3 条，等腰三角形 1 条。",
        "<b>补全图形</b>：每个点与它的对称点到对称线距离相等（方格纸上找点）。",
        "<b>展开图</b>：正方体、长方体、棱柱、棱锥都能展开成平面图；正方体展开图有 6 个面。"
      ],
      questions: [
        { q: "正方形有几条对称轴？", opts: ["4 条", "2 条", "1 条", "8 条"], ans: 0, level: "基础",
          explain: "横中线、竖中线加两条对角线，共 4 条。", point: "对称轴" },
        { q: "长方形（非正方形）有几条对称轴？", opts: ["2 条", "1 条", "4 条", "0 条"], ans: 0, level: "基础",
          explain: "只有两条中线；对角线对折不重合。", point: "对称轴" },
        { q: "正方体的展开图由几个相等的面组成？", opts: ["6 个", "4 个", "8 个", "12 个"], ans: 0, level: "基础",
          explain: "正方体有 6 个正方形面，展开图就是 6 个正方形。", point: "展开图" },
        { q: "一个展开图由 1 个正方形底和 4 个三角形组成，它是哪个立体？", opts: ["正四棱锥", "正方体", "长方体", "三棱柱"], ans: 0, level: "进阶",
          explain: "正方形底 + 4 个三角形聚于顶点 = 正四棱锥。", point: "辨认立体" }
      ]
    }
  },
  {
    id: "sg_data4", grade: "P4", stage: "新加坡", anim: null,
    name: "Tables, Line Graphs & Pie Charts",
    summary: "Complete tables from data; read and interpret line graphs and pie charts.",
    kou: "Scale first, then read. Line up = increase, down = decrease. Whole pie = the total.",
    steps: [
      "<b>Tables</b>: fill missing cells using row and column totals.",
      "<b>Line graphs</b>: read the axis scale first; each point is one value.",
      "<b>Trends</b>: a rising segment = increase; falling = decrease; flat = no change.",
      "<b>Pie charts</b>: the whole circle is the total; equal slices are equal parts of it."
    ],
    prereq: null,
    questions: [
      { q: "In a survey: Football 12, Swimming 8, Badminton 5, Chess 3 children. Altogether how many children were surveyed?", opts: ["28", "25", "26", "30"], ans: 0, level: "Basic",
        explain: "12 + 8 + 5 + 3 = 28.", point: "Totals" },
      { q: "How many more children chose Football than Swimming (12 vs 8)?", opts: ["4", "5", "3", "9"], ans: 0, level: "Basic",
        explain: "12 − 8 = 4.", point: "Compare data" },
      { q: "A line graph shows temperature: 8 a.m. 24°C, 12 p.m. 30°C. The temperature rose by", opts: ["6 °C", "8 °C", "4 °C", "54 °C"], ans: 0, level: "Basic",
        explain: "30 − 24 = 6 °C (never subtract temperatures to say “rose by” incorrectly — trend = end − start).", point: "Line graph" },
      { q: "A pie chart is cut into 4 equal slices. Each slice represents", opts: ["1/4 of the whole", "1/3 of the whole", "1/8 of the whole", "the whole"], ans: 0, level: "Basic",
        explain: "Equal slices are equal parts: 4 slices → each is 1/4.", point: "Pie chart" }
    ],
    _zh: {
      name: "统计表、折线图与扇形图（新加坡 P4）",
      summary: "由数据补全统计表；读懂折线图与扇形图。",
      kou: "先看刻度再读数。折线向上=增加，向下=减少。整个圆=总量。",
      steps: [
        "<b>统计表</b>：用行、列总数补出缺的格子。",
        "<b>折线图</b>：先看坐标轴刻度；每个点是一个数据。",
        "<b>趋势</b>：线段上升=增加；下降=减少；持平=不变。",
        "<b>扇形图</b>：整个圆表示总量；相等的扇形表示相等的部分。"
      ],
      questions: [
        { q: "调查中：足球 12 人、游泳 8 人、羽毛球 5 人、棋类 3 人。一共调查了多少人？", opts: ["28", "25", "26", "30"], ans: 0, level: "基础",
          explain: "12+8+5+3=28 人。", point: "求总数" },
        { q: "选足球的比选游泳的多几人（12 与 8）？", opts: ["4", "5", "3", "9"], ans: 0, level: "基础",
          explain: "12−8=4 人。", point: "数据比较" },
        { q: "折线图显示：8 时气温 24°C，12 时 30°C，气温上升了？", opts: ["6 °C", "8 °C", "4 °C", "54 °C"], ans: 0, level: "基础",
          explain: "30−24=6 °C。", point: "折线图" },
        { q: "扇形图被分成 4 个相等的扇形，每个扇形表示？", opts: ["总量的 1/4", "总量的 1/3", "总量的 1/8", "总量"], ans: 0, level: "基础",
          explain: "相等扇形=相等部分：4 份→每份 1/4。", point: "扇形图" }
      ]
    }
  }
  ];
})();
