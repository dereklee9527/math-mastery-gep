/* 新加坡 P5–P6 条目 + 语言切换（合并 data_sg.js 中的 P3–P4 条目并推入 TECHNIQUES）
 * 对照 MOE Primary Mathematics Syllabus 2021（2025 年 10 月更新版）：
 * P5：整数到 10 000 000 与运算顺序、分数加减乘、小数位移与单位换算、Rate、三角形面积、
 *     立体体积、角性质、三角形/特殊四边形性质；
 * P6：分数除法、百分数（求整体与增减）、比、代数、圆的面积与周长、体积反推、组合图形未知角、平均数。
 * 说明：Ratio、Average 按最新大纲属 P6；Speed 已并入 Rate 的应用（本条目保留作延伸）。
 */
(function () {
  const P5 = [
  {
    id: "sg_pct5", grade: "P5", stage: "新加坡", anim: null,
    name: "Percentage",
    summary: "Percent of a number, finding the percentage, discounts, GST and annual interest.",
    kou: "Per cent = per hundred. 25% = 25/100. Discount: multiply what you keep.",
    steps: [
      "<b>p%</b> means p/100; “of” means multiply.",
      "<b>Find the percentage</b>: part ÷ whole × 100%.",
      "<b>Discount</b>: sale price = price × (100 − discount)% (20% off → 80%).",
      "<b>GST</b>: total = price × (100 + GST)%. <b>Annual interest</b> = principal × rate% per year."
    ],
    prereq: null,
    questions: [
      { q: "25% of 80 = ?", opts: ["20", "16", "25", "40"], ans: 0, level: "Basic",
        explain: "80 × 25/100 = 80 × 1/4 = 20.", point: "Percent of" },
      { q: "45 out of 150 is what percent?", opts: ["30%", "45%", "25%", "35%"], ans: 0, level: "Intermediate",
        explain: "45 ÷ 150 = 0.3 = 30%. (Equiv: 45/150 = 3/10.)", point: "Find the percentage" },
      { q: "A $50 shirt is sold at 20% off. What is the sale price?", opts: ["$40", "$30", "$10", "$45"], ans: 0, level: "Basic",
        explain: "Keep 80%: 50 × 80% = $40.", point: "Discount" },
      { q: "A meal costs $80. Add 10% GST. The bill is", opts: ["$88", "$80", "$90", "$78"], ans: 0, level: "Basic",
        explain: "80 × 110% = $88.", point: "GST-style increase" },
      { q: "$200 is saved at 5% annual interest. The interest after 1 year is", opts: ["$10", "$5", "$15", "$210"], ans: 0, level: "Intermediate",
        explain: "Interest = principal × rate% = 200 × 5% = $10 (total would be $210).", point: "Annual interest" }
    ],
    _zh: {
      name: "百分数（新加坡 P5）",
      summary: "求一个数的百分之几、求百分比、折扣、消费税与年利率。",
      kou: "百分=每一百；25%=25/100；打折=乘剩下来的百分率。",
      steps: [
        "<b>p%</b>=p/100；“的”就是乘。",
        "<b>求百分比</b>：部分÷整体×100%。",
        "<b>折扣</b>：现价=原价×(100−折扣)%（打 8 折→80%）。",
        "<b>GST(消费税)</b>：总价=价格×(100+GST)%；<b>年利息</b>=本金×年利率%。"
      ],
      questions: [
        { q: "80 的 25% 是多少？", opts: ["20", "16", "25", "40"], ans: 0, level: "基础",
          explain: "80×25/100=80×1/4=20。", point: "求百分数" },
        { q: "150 中的 45 相当于百分之几？", opts: ["30%", "45%", "25%", "35%"], ans: 0, level: "进阶",
          explain: "45÷150=0.3=30%（45/150=3/10）。", point: "求百分比" },
        { q: "一件 50 元的衬衫打 8 折（20% off），现价是？", opts: ["40 元", "30 元", "10 元", "45 元"], ans: 0, level: "基础",
          explain: "付 80%：50×80%=40 元。", point: "折扣" },
        { q: "一顿饭 80 元，加 10% 服务税，账单是？", opts: ["88 元", "80 元", "90 元", "78 元"], ans: 0, level: "基础",
          explain: "80×110%=88 元。", point: "税上增" },
        { q: "存入 200 元，年利率 5%，一年后的利息是？", opts: ["10 元", "5 元", "15 元", "210 元"], ans: 0, level: "进阶",
          explain: "利息=本金×年利率=200×5%=10 元（本息合计 210 元）。", point: "年利息" }
      ]
    }
  },
  {
    id: "sg_speed5", grade: "P5", stage: "新加坡", anim: null,
    name: "Speed (Rate Application)",
    summary: "Distance = Speed × Time, in km/h and m/s. Kept as an application of Rate.",
    kou: "D = S × T (and its two rearrangements). Watch the units! Speed is a rate: distance per hour/second.",
    steps: [
      "<b>Speed</b> = distance ÷ time (km per hour, or metres per second).",
      "<b>Distance</b> = speed × time.",
      "<b>Time</b> = distance ÷ speed.",
      "Units first: km/h ↔ m/s and hours ↔ minutes; convert before computing (an application of Rate)."
    ],
    prereq: null,
    questions: [
      { q: "A car travels 180 km in 3 hours. Its speed is", opts: ["60 km/h", "180 km/h", "54 km/h", "60 km"], ans: 0, level: "Basic",
        explain: "180 ÷ 3 = 60 km/h.", point: "Find speed" },
      { q: "A bus travels at 70 km/h for 2.5 hours. How far does it go?", opts: ["175 km", "140 km", "35 km", "205 km"], ans: 0, level: "Intermediate",
        explain: "70 × 2.5 = 175 km.", point: "Find distance" },
      { q: "A pupil runs 200 m in 25 s. His speed is", opts: ["8 m/s", "5 m/s", "80 m/s", "8000 m/s"], ans: 0, level: "Basic",
        explain: "200 ÷ 25 = 8 m/s.", point: "Find speed (m/s)" },
      { q: "A ball rolls 8 m every second. How far in 45 s?", opts: ["360 m", "53 m", "5.6 m", "380 m"], ans: 0, level: "Basic",
        explain: "8 × 45 = 360 m.", point: "Find distance (m/s)" }
    ],
    _zh: {
      name: "速度（Rate 的应用）（新加坡 P5）",
      summary: "路程=速度×时间，单位 km/h 与 m/s。作为 Rate 应用的延伸保留。",
      kou: "D=S×T 及其两个变式；单位先看清！速度是“每小时/每秒的路程”，本质是率。",
      steps: [
        "<b>速度</b>=路程÷时间（每小时 km 或每秒 m）。",
        "<b>路程</b>=速度×时间。",
        "<b>时间</b>=路程÷速度。",
        "单位先行：km/h ↔ m/s、时 ↔ 分，先统一再算（Rate 的应用）。"
      ],
      questions: [
        { q: "汽车 3 小时行 180 km，速度是？", opts: ["60 km/h", "180 km/h", "54 km/h", "60 km"], ans: 0, level: "基础",
          explain: "180÷3=60 km/h。", point: "求速度" },
        { q: "客车以 70 km/h 行驶 2.5 小时，行了多少千米？", opts: ["175 km", "140 km", "35 km", "205 km"], ans: 0, level: "进阶",
          explain: "70×2.5=175 km。", point: "求路程" },
        { q: "一名学生 25 秒跑 200 米，速度是？", opts: ["8 m/s", "5 m/s", "80 m/s", "8000 m/s"], ans: 0, level: "基础",
          explain: "200÷25=8 m/s。", point: "米/秒求速度" },
        { q: "小球每秒滚 8 米，45 秒滚多远？", opts: ["360 米", "53 米", "5.6 米", "380 米"], ans: 0, level: "基础",
          explain: "8×45=360 米。", point: "米/秒求路程" }
      ]
    }
  },
  {
    id: "sg_num5", grade: "P5", stage: "新加坡", anim: null,
    name: "10 Million & Order of Operations",
    summary: "Numbers up to 10 million; ×10/100/1000 and their multiples; order of operations.",
    kou: "Brackets first, then × and ÷ (left to right), then + and −. ×10/100/1000 shift the digits.",
    steps: [
      "<b>10 million</b>: 23 456 789 uses millions and ten-millions places — read by groups.",
      "<b>×10 / ×100 / ×1000</b>: digits shift 1/2/3 places left; dividing shifts right.",
      "<b>Order of operations</b>: brackets → × and ÷ (left to right) → + and −.",
      "<b>Check</b>: estimate first (round the numbers), then compute exactly."
    ],
    prereq: null,
    questions: [
      { q: "245 × 100 = ?", opts: ["24 500", "2 450", "24 050", "24.5"], ans: 0, level: "Basic",
        explain: "×100 shifts the digits two places: 245 → 24 500.", point: "Shift rule" },
      { q: "4 + 3 × 6 = ?", opts: ["22", "42", "18", "40"], ans: 0, level: "Basic",
        explain: "× comes first: 3 × 6 = 18; 4 + 18 = 22.", point: "Order of operations" },
      { q: "(12 − 4) ÷ 2 × 3 = ?", opts: ["12", "2", "10", "4"], ans: 0, level: "Intermediate",
        explain: "Brackets first: 12 − 4 = 8; then ÷ and × left to right: 8 ÷ 2 = 4, 4 × 3 = 12.", point: "Brackets & left-to-right" },
      { q: "72 000 ÷ 1000 = ?", opts: ["72", "720", "7 200", "7.2"], ans: 0, level: "Basic",
        explain: "÷1000 shifts the digits three places right: 72 000 → 72.", point: "Shift rule" }
    ],
    _zh: {
      name: "百万级数与运算顺序（新加坡 P5）",
      summary: "10 000 000 以内的数；×10/100/1000 及它们的倍数；四则混合运算顺序。",
      kou: "先括号，再 ×÷（从左到右），最后 +−。×10/100/1000 让数字整体搬家。",
      steps: [
        "<b>百万级</b>：23 456 789 有百万位、千万位 —— 按数级读。",
        "<b>×10 / ×100 / ×1000</b>：数字左移 1/2/3 位；除则右移。",
        "<b>运算顺序</b>：括号 → ×和÷（从左到右）→ 加和减。",
        "<b>检查</b>：先估算（把数取整），再精确计算。"
      ],
      questions: [
        { q: "245 × 100 = ？", opts: ["24 500", "2 450", "24 050", "24.5"], ans: 0, level: "基础",
          explain: "×100 把数字左移两位：245 → 24 500。", point: "位移规律" },
        { q: "4 + 3 × 6 = ？", opts: ["22", "42", "18", "40"], ans: 0, level: "基础",
          explain: "先乘：3×6=18；4+18=22。", point: "运算顺序" },
        { q: "(12 − 4) ÷ 2 × 3 = ？", opts: ["12", "2", "10", "4"], ans: 0, level: "进阶",
          explain: "先括号：8；再从左到右：8÷2=4，4×3=12。", point: "括号与从左到右" },
        { q: "72 000 ÷ 1000 = ？", opts: ["72", "720", "7 200", "7.2"], ans: 0, level: "基础",
          explain: "÷1000 把数字右移三位：72 000 → 72。", point: "位移规律" }
      ]
    }
  },
  {
    id: "sg_fract5", grade: "P5", stage: "新加坡", anim: null,
    name: "Fractions (Mixed Numbers & Multiplication)",
    summary: "Add and subtract mixed numbers; multiply fractions by whole numbers and by fractions.",
    kou: "Add wholes and fractions separately. To multiply: numerator × numerator, denominator × denominator.",
    steps: [
      "<b>Mixed +/−</b>: add or subtract the whole numbers and the fractions, renaming improper parts: 2 1/2 + 1 3/4 = 4 1/4.",
      "<b>Fraction × whole</b>: divide first when it is friendly: 2/5 × 15 = 2 × 3 = 6.",
      "<b>Fraction × fraction</b>: top × top, bottom × bottom, then simplify: 2/3 × 3/4 = 6/12 = 1/2.",
      "<b>Mixed × whole</b>: convert the mixed number to an improper fraction first: 1 1/2 × 8 = 3/2 × 8 = 12."
    ],
    prereq: null,
    questions: [
      { q: "2 1/2 + 1 3/4 = ?", opts: ["4 1/4", "3 4/6", "4 1/2", "3 1/4"], ans: 0, level: "Intermediate",
        explain: "2 + 1 = 3; 1/2 + 3/4 = 5/4 = 1 1/4; total 4 1/4.", point: "Mixed numbers +" },
      { q: "2/5 × 15 = ?", opts: ["6", "3", "10", "30"], ans: 0, level: "Basic",
        explain: "15 ÷ 5 = 3; 2 × 3 = 6.", point: "Fraction × whole" },
      { q: "2/3 × 3/4 = ?", opts: ["1/2", "2/7", "6/7", "5/12"], ans: 0, level: "Intermediate",
        explain: "6/12 = 1/2 (cross-simplify the 3s first).", point: "Fraction × fraction" },
      { q: "1 1/2 × 8 = ?", opts: ["12", "4", "10", "16"], ans: 0, level: "Intermediate",
        explain: "1 1/2 = 3/2; 3/2 × 8 = 3 × 4 = 12.", point: "Mixed × whole" }
    ],
    _zh: {
      name: "分数（带分数与乘法）（新加坡 P5）",
      summary: "带分数的加减；分数乘整数与分数乘分数。",
      kou: "带分数加减：整数部分、分数部分分开处理。乘法：分子×分子，分母×分母。",
      steps: [
        "<b>带分数加减</b>：先算整数部分与分数部分，假分数部分要改名：2 1/2 + 1 3/4 = 4 1/4。",
        "<b>分数×整数</b>：能整除先除：2/5 × 15 = 2 × 3 = 6。",
        "<b>分数×分数</b>：分子乘分子、分母乘分母再约分：2/3 × 3/4 = 6/12 = 1/2。",
        "<b>带分数×整数</b>：先把带分数化成假分数：1 1/2 × 8 = 3/2 × 8 = 12。"
      ],
      questions: [
        { q: "2 1/2 + 1 3/4 = ？", opts: ["4 1/4", "3 4/6", "4 1/2", "3 1/4"], ans: 0, level: "进阶",
          explain: "整数部分 3；1/2+3/4=5/4=1 1/4；共 4 1/4。", point: "带分数加法" },
        { q: "2/5 × 15 = ？", opts: ["6", "3", "10", "30"], ans: 0, level: "基础",
          explain: "15÷5=3；2×3=6。", point: "分数×整数" },
        { q: "2/3 × 3/4 = ？", opts: ["1/2", "2/7", "6/7", "5/12"], ans: 0, level: "进阶",
          explain: "6/12=1/2（可先交叉约去 3）。", point: "分数×分数" },
        { q: "1 1/2 × 8 = ？", opts: ["12", "4", "10", "16"], ans: 0, level: "进阶",
          explain: "1 1/2 = 3/2；3/2×8 = 3×4 = 12。", point: "带分数×整数" }
      ]
    }
  },
  {
    id: "sg_dec5", grade: "P5", stage: "新加坡", anim: null,
    name: "Decimals: ×10/100/1000 & Units",
    summary: "Multiply/divide decimals by 10, 100, 1000; convert measurements in decimal form.",
    kou: "The digits shift; the point stays. km↔m, kg↔g, ℓ↔ml: rates of 1000.",
    steps: [
      "<b>Shift rule</b>: ×10/100/1000 moves every digit 1/2/3 places LEFT (÷ moves right); 3.45 × 100 = 345.",
      "<b>km ↔ m</b>: 3.4 km = 3 400 m; metres→km gives decimals: 250 m = 0.25 km.",
      "<b>kg ↔ g</b>: 2.05 kg = 2 050 g.",
      "<b>ℓ ↔ ml</b>: 3.08 ℓ = 3 080 ml; 250 ml = 0.25 ℓ."
    ],
    prereq: null,
    questions: [
      { q: "3.45 × 100 = ?", opts: ["345", "34.5", "0.0345", "3 450"], ans: 0, level: "Basic",
        explain: "×100 shifts the digits two places right: 3.45 → 345.", point: "Shift rule" },
      { q: "72.5 ÷ 10 = ?", opts: ["7.25", "725", "0.725", "72.05"], ans: 0, level: "Basic",
        explain: "÷10 shifts the digits one place right: 72.5 → 7.25.", point: "Shift rule" },
      { q: "2.05 ℓ = ? ml", opts: ["2 050", "205", "20 050", "2 005"], ans: 0, level: "Intermediate",
        explain: "1 ℓ = 1 000 ml: ×1000 → 2 050 ml.", point: "ℓ ↔ ml" },
      { q: "3.4 km = ? m", opts: ["3 400", "340", "34", "30 400"], ans: 0, level: "Basic",
        explain: "1 km = 1 000 m: 3.4 × 1000 = 3 400 m.", point: "km ↔ m" }
    ],
    _zh: {
      name: "小数的乘除与单位换算（新加坡 P5）",
      summary: "小数 ×10/100/1000；十进制单位间的换算。",
      kou: "移动的是数字，小数点不动。km↔m、kg↔g、ℓ↔ml 进率都是 1000。",
      steps: [
        "<b>位移规律</b>：×10/100/1000 使数字左移 1/2/3 位（÷ 则右移)；3.45×100 = 345。",
        "<b>km ↔ m</b>：3.4 km = 3 400 m；米→千米会出现小数：250 m = 0.25 km。",
        "<b>kg ↔ g</b>：2.05 kg = 2 050 g。",
        "<b>ℓ ↔ ml</b>：3.08 ℓ = 3 080 ml；250 ml = 0.25 ℓ。"
      ],
      questions: [
        { q: "3.45 × 100 = ？", opts: ["345", "34.5", "0.0345", "3 450"], ans: 0, level: "基础",
          explain: "×100 使数字右移两位：3.45 → 345。", point: "位移规律" },
        { q: "72.5 ÷ 10 = ？", opts: ["7.25", "725", "0.725", "72.05"], ans: 0, level: "基础",
          explain: "÷10 使数字左移一位：72.5 → 7.25。", point: "位移规律" },
        { q: "2.05 ℓ = ？ml", opts: ["2 050", "205", "20 050", "2 005"], ans: 0, level: "进阶",
          explain: "1 ℓ = 1 000 ml：×1000 → 2 050 ml。", point: "升与毫升" },
        { q: "3.4 km = ？m", opts: ["3 400", "340", "34", "30 400"], ans: 0, level: "基础",
          explain: "1 km = 1 000 m：3.4×1000 = 3 400 m。", point: "千米与米" }
      ]
    }
  },
  {
    id: "sg_rate5", grade: "P5", stage: "新加坡", anim: null,
    name: "Rate",
    summary: "Rate as amount per unit of another quantity; find rate, total or number of units.",
    kou: "Rate = total ÷ units; total = rate × units; units = total ÷ rate. Speed works the same way.",
    steps: [
      "<b>Unit rate</b>: $12 for 6 apples → $2 per apple (divide to zoom in).",
      "<b>Total</b>: rate × units: 6 ℓ/min for 8 minutes → 48 ℓ.",
      "<b>Units</b>: total ÷ rate: 240 pages at 60 pages/min → 4 minutes.",
      "<b>Say the unit</b>: answers must carry 「per item / per minute / per litres」."
    ],
    prereq: null,
    questions: [
      { q: "6 apples cost $12. The cost per apple is", opts: ["$2", "$6", "$12", "$3"], ans: 0, level: "Basic",
        explain: "Rate = 12 ÷ 6 = $2 per apple.", point: "Unit rate" },
      { q: "A tap fills at 6 ℓ per minute. In 8 minutes it fills", opts: ["48 ℓ", "14 ℓ", "68 ℓ", "2 ℓ"], ans: 0, level: "Basic",
        explain: "Total = rate × units = 6 × 8 = 48 ℓ.", point: "Total from rate" },
      { q: "A print shop prints 240 pages in 4 minutes. Its rate is", opts: ["60 pages/min", "960 pages/min", "48 pages/min", "64 pages/min"], ans: 0, level: "Intermediate",
        explain: "Rate = 240 ÷ 4 = 60 pages/min.", point: "Find the rate" },
      { q: "A car uses 8 km per litre. On 9 litres it travels", opts: ["72 km", "17 km", "64 km", "81 km"], ans: 0, level: "Basic",
        explain: "Total = 8 × 9 = 72 km.", point: "Total from rate" }
    ],
    _zh: {
      name: "率（Rate）（新加坡 P5）",
      summary: "率是「一个量中每单位另一个量」的多少；求率、求总量、求份数。",
      kou: "率=总量÷份数；总量=率×份数；份数=总量÷率。速度题同理。",
      steps: [
        "<b>单位率</b>：6 个苹果 12 元 → 每个苹果 2 元（除以份数聚焦一个单位）。",
        "<b>总量</b>：率×份数：每分钟 6 ℓ，8 分钟 → 48 ℓ。",
        "<b>份数</b>：总量÷率：240 页、每分钟 60 页 → 4 分钟。",
        "<b>说出单位</b>：答案必须带「每个/每分钟/每升」。"
      ],
      questions: [
        { q: "6 个苹果共 12 元，每个苹果多少元？", opts: ["2 元", "6 元", "12 元", "3 元"], ans: 0, level: "基础",
          explain: "率=12÷6=2 元/个。", point: "单位率" },
        { q: "水龙头每分钟进水 6 ℓ，8 分钟进水？", opts: ["48 ℓ", "14 ℓ", "68 ℓ", "2 ℓ"], ans: 0, level: "基础",
          explain: "总量=率×份数=6×8=48 ℓ。", point: "由率求总量" },
        { q: "打印店 4 分钟打 240 页，速率为？", opts: ["60 页/分", "960 页/分", "48 页/分", "64 页/分"], ans: 0, level: "进阶",
          explain: "率=240÷4=60 页/分。", point: "求率" },
        { q: "汽车每升油行 8 千米，9 升油可行？", opts: ["72 km", "17 km", "64 km", "81 km"], ans: 0, level: "基础",
          explain: "总量=8×9=72 km。", point: "由率求总量" }
      ]
    }
  },
  {
    id: "sg_tri5", grade: "P5", stage: "新加坡", anim: null,
    name: "Area of Triangle",
    summary: "Base and height of a triangle; area formula; composite figures with triangles.",
    kou: "Area = ½ × base × height. Height is always perpendicular to the base.",
    steps: [
      "<b>Formula</b>: area = ½ × base × height.",
      "<b>Why ½</b>: a triangle is exactly half of the rectangle with the same base and height.",
      "<b>Missing side</b>: base = 2 × area ÷ height (same idea for height).",
      "<b>Composite</b>: split figures into rectangles/squares + triangles, then add."
    ],
    prereq: null,
    questions: [
      { q: "A triangle has base 10 cm and height 6 cm. Its area is", opts: ["30 cm²", "60 cm²", "15 cm²", "16 cm²"], ans: 0, level: "Basic",
        explain: "½ × 10 × 6 = 30 cm².", point: "Area formula" },
      { q: "A triangle has area 45 cm², base 9 cm. Its height is", opts: ["10 cm", "5 cm", "90 cm", "9 cm"], ans: 0, level: "Intermediate",
        explain: "Height = 2 × 45 ÷ 9 = 10 cm.", point: "Missing height" },
      { q: "A triangle shares a base and height with an 8 cm × 5 cm rectangle. The triangle's area is", opts: ["20 cm²", "40 cm²", "13 cm²", "26 cm²"], ans: 0, level: "Intermediate",
        explain: "Triangle = half of 8 × 5 = 20 cm².", point: "Half of a rectangle" },
      { q: "A right-angled triangle has legs 6 cm and 8 cm. Its area is", opts: ["24 cm²", "48 cm²", "14 cm²", "40 cm²"], ans: 0, level: "Intermediate",
        explain: "The legs are base & height: ½ × 6 × 8 = 24 cm².", point: "Right-angled triangle" }
    ],
    _zh: {
      name: "三角形的面积（新加坡 P5）",
      summary: "三角形的底与高；面积公式；带三角形的组合图形。",
      kou: "面积 = ½ × 底 × 高。高总是垂直于底。",
      steps: [
        "<b>公式</b>：面积 = ½ × 底 × 高。",
        "<b>为什么是 ½</b>：三角形恰好是同底同高长方形面积的一半。",
        "<b>求缺边</b>：底 = 2×面积÷高（求高同理）。",
        "<b>组合图形</b>：分割成长方形/正方形 + 三角形，再相加。"
      ],
      questions: [
        { q: "三角形底 10 厘米、高 6 厘米，面积是？", opts: ["30 厘米²", "60 厘米²", "15 厘米²", "16 厘米²"], ans: 0, level: "基础",
          explain: "½×10×6=30 厘米²。", point: "面积公式" },
        { q: "三角形面积 45 厘米²、底 9 厘米，高是？", opts: ["10 厘米", "5 厘米", "90 厘米", "9 厘米"], ans: 0, level: "进阶",
          explain: "高 = 2×45÷9 = 10 厘米。", point: "求高" },
        { q: "三角形与 8×5 厘米² 的长方形同底同高，三角形面积是？", opts: ["20 厘米²", "40 厘米²", "13 厘米²", "26 厘米²"], ans: 0, level: "进阶",
          explain: "三角形 = 8×5 的一半 = 20 厘米²。", point: "长方形的一半" },
        { q: "直角三角形两条直角边为 6 厘米和 8 厘米，面积是？", opts: ["24 厘米²", "48 厘米²", "14 厘米²", "40 厘米²"], ans: 0, level: "进阶",
          explain: "两条直角边就是底和高：½×6×8=24 厘米²。", point: "直角三角形" }
      ]
    }
  },
  {
    id: "sg_vol5", grade: "P5", stage: "新加坡", anim: null,
    name: "Volume of Cube & Cuboid",
    summary: "Solid volume in cm³/m³; volume of a cuboid; liquid in a tank; ℓ ↔ cm³.",
    kou: "Volume = length × breadth × height. 1000 cm³ = 1 ℓ; 1 cm³ = 1 ml.",
    steps: [
      "<b>Cuboid</b>: volume = length × breadth × height; cube = edge × edge × edge.",
      "<b>Unit cubes</b>: the number of 1-cm cubes used to build a solid is its volume in cm³.",
      "<b>Water</b>: volume of water in a rectangular tank = length × breadth × water depth.",
      "<b>Liquid units</b>: 1000 cm³ = 1 ℓ and 1 cm³ = 1 ml."
    ],
    prereq: null,
    questions: [
      { q: "The volume of a cube with edge 4 cm is", opts: ["64 cm³", "16 cm³", "12 cm³", "48 cm³"], ans: 0, level: "Basic",
        explain: "4 × 4 × 4 = 64 cm³.", point: "Cube volume" },
      { q: "A box measures 12 cm × 5 cm × 3 cm. Its volume is", opts: ["180 cm³", "102 cm³", "150 cm³", "60 cm³"], ans: 0, level: "Basic",
        explain: "12 × 5 × 3 = 180 cm³.", point: "Cuboid volume" },
      { q: "4 000 cm³ is the same as", opts: ["4 ℓ", "40 ℓ", "0.4 ℓ", "400 ml"], ans: 0, level: "Intermediate",
        explain: "1000 cm³ = 1 ℓ, so 4000 cm³ = 4 ℓ.", point: "cm³ ↔ ℓ" },
      { q: "A tank 30 cm × 20 cm × 10 cm is completely full of water. Its capacity is", opts: ["6 ℓ", "6 000 ℓ", "60 ℓ", "600 ml"], ans: 0, level: "Intermediate",
        explain: "30 × 20 × 10 = 6 000 cm³ = 6 ℓ.", point: "Capacity" }
    ],
    _zh: {
      name: "正方体与长方体的体积（新加坡 P5）",
      summary: "立体体积 cm³/m³；长方体体积；水箱中的液体；升与厘米³。",
      kou: "体积=长×宽×高。1000 厘米³ = 1 升；1 厘米³ = 1 毫升。",
      steps: [
        "<b>长方体</b>：体积=长×宽×高；正方体=棱×棱×棱。",
        "<b>单位小正方体</b>：用 1 厘米³ 小块搭成的个数就是体积。",
        "<b>水</b>：长方形水箱中水的体积=长×宽×水深。",
        "<b>液体单位</b>：1000 厘米³ = 1 升；1 厘米³ = 1 毫升。"
      ],
      questions: [
        { q: "棱长 4 厘米的正方体体积是？", opts: ["64 厘米³", "16 厘米³", "12 厘米³", "48 厘米³"], ans: 0, level: "基础",
          explain: "4×4×4=64 厘米³。", point: "正方体体积" },
        { q: "一个盒子 12×5×3 厘米，体积是？", opts: ["180 厘米³", "102 厘米³", "150 厘米³", "60 厘米³"], ans: 0, level: "基础",
          explain: "12×5×3=180 厘米³。", point: "长方体体积" },
        { q: "4 000 厘米³ 等于？", opts: ["4 升", "40 升", "0.4 升", "400 毫升"], ans: 0, level: "进阶",
          explain: "1000 厘米³ = 1 升，所以 4000 厘米³ = 4 升。", point: "厘米³与升" },
        { q: "水箱 30×20×10 厘米装满水，容量是？", opts: ["6 升", "6 000 升", "60 升", "600 毫升"], ans: 0, level: "进阶",
          explain: "30×20×10=6 000 厘米³ = 6 升。", point: "容量" }
      ]
    }
  },
  {
    id: "sg_ang5", grade: "P5", stage: "新加坡", anim: null,
    name: "Angle Properties",
    summary: "Angles on a straight line, at a point; vertically opposite angles; unknown angles.",
    kou: "Straight line = 180°, point = 360°, vertically opposite angles are equal.",
    steps: [
      "<b>Straight line</b>: angles on one straight line add to 180°.",
      "<b>At a point</b>: angles around a point add to 360°.",
      "<b>Vertically opposite</b>: where two lines cross, opposite angles are equal.",
      "<b>Strategy</b>: mark what you know, write one equation, and check with a rough sketch."
    ],
    prereq: null,
    questions: [
      { q: "Two angles on a straight line: one is 65°. The other is", opts: ["115°", "125°", "295°", "65°"], ans: 0, level: "Basic",
        explain: "180 − 65 = 115°.", point: "Straight line" },
      { q: "Three angles around a point are 100°, 90° and x°. x = ?", opts: ["170°", "110°", "190°", "160°"], ans: 0, level: "Intermediate",
        explain: "360 − 100 − 90 = 170°.", point: "At a point" },
      { q: "Two straight lines cross. One of the angles is 55°. Its vertically opposite angle is", opts: ["55°", "125°", "35°", "145°"], ans: 0, level: "Basic",
        explain: "Vertically opposite angles are equal → 55°.", point: "Vertically opposite" },
      { q: "Angles on a straight line are x° and 74°. x = ?", opts: ["106°", "96°", "194°", "86°"], ans: 0, level: "Basic",
        explain: "180 − 74 = 106°.", point: "Straight line" }
    ],
    _zh: {
      name: "角的性质（新加坡 P5）",
      summary: "同一直线上的角、共顶点的角；对顶角；求未知角。",
      kou: "直线上=180°，一点处=360°，对顶角相等。",
      steps: [
        "<b>直线</b>：一条直线上的角相加 = 180°。",
        "<b>顶点处</b>：绕一点的所有角相加 = 360°。",
        "<b>对顶角</b>：两直线相交，相对的两个角相等。",
        "<b>策略</b>：先标出已知角，列一个等式，再画草图检查。"
      ],
      questions: [
        { q: "一直线上两个角，其中一个 65°，另一个是？", opts: ["115°", "125°", "295°", "65°"], ans: 0, level: "基础",
          explain: "180−65=115°。", point: "直线上的角" },
        { q: "绕一点三个角：100°、90° 和 x°，x = ？", opts: ["170°", "110°", "190°", "160°"], ans: 0, level: "进阶",
          explain: "360−100−90=170°。", point: "共顶点" },
        { q: "两直线相交，一个角 55°，它的对顶角是？", opts: ["55°", "125°", "35°", "145°"], ans: 0, level: "基础",
          explain: "对顶角相等 → 55°。", point: "对顶角" },
        { q: "一直线上两角 x° 与 74°，x = ？", opts: ["106°", "96°", "194°", "86°"], ans: 0, level: "基础",
          explain: "180−74=106°。", point: "直线上的角" }
      ]
    }
  },
  {
    id: "sg_quads5", grade: "P5", stage: "新加坡", anim: null,
    name: "Triangles & Special Quadrilaterals",
    summary: "Properties and angle sums of triangles, parallelograms, rhombuses and trapeziums.",
    kou: "Triangle angles: 180°. Isosceles = equal base angles. Special quads have parallel/equal sides.",
    steps: [
      "<b>Angle sum of a triangle</b> = 180°; equilateral = three 60° angles.",
      "<b>Isosceles</b>: two equal sides → two equal base angles; right-angled has one 90° angle.",
      "<b>Special quadrilaterals</b>: parallelogram & rhombus have two pairs of parallel sides; rhombus has all sides equal; trapezium has exactly one pair of parallel sides.",
      "<b>Unknown angles</b>: use the properties together with the 180°/360° facts."
    ],
    prereq: null,
    questions: [
      { q: "An isosceles triangle has vertex angle 40°. Each base angle is", opts: ["70°", "50°", "140°", "80°"], ans: 0, level: "Intermediate",
        explain: "(180 − 40) ÷ 2 = 70°.", point: "Isosceles" },
      { q: "Two angles of a triangle are 55° and 65°. The third is", opts: ["60°", "70°", "50°", "120°"], ans: 0, level: "Basic",
        explain: "180 − 55 − 65 = 60°.", point: "Angle sum" },
      { q: "A rhombus has perimeter 36 cm. Each side is", opts: ["9 cm", "4 cm", "18 cm", "12 cm"], ans: 0, level: "Basic",
        explain: "All 4 sides are equal: 36 ÷ 4 = 9 cm.", point: "Rhombus" },
      { q: "A right-angled triangle has angles 90° and 32°. The third angle is", opts: ["58°", "148°", "68°", "32°"], ans: 0, level: "Basic",
        explain: "180 − 90 − 32 = 58° (the two acute angles always make 90°).", point: "Right-angled triangle" }
    ],
    _zh: {
      name: "三角形与特殊四边形（新加坡 P5）",
      summary: "三角形、平行四边形、菱形、梯形的性质与内角和。",
      kou: "三角形内角和 180°；等腰=两底角相等；特殊四边形有平行/相等的边。",
      steps: [
        "<b>内角和</b>：三角形内角和 = 180°；等边三角形三个角都是 60°。",
        "<b>等腰三角形</b>：两腰相等 → 两底角相等；直角三角形有一个 90° 角。",
        "<b>特殊四边形</b>：平行四边形与菱形有两组对边平行；菱形四边相等；梯形只有一组对边平行。",
        "<b>求未知角</b>：把性质与 180°/360° 的事实结合使用。"
      ],
      questions: [
        { q: "等腰三角形顶角 40°，每个底角是？", opts: ["70°", "50°", "140°", "80°"], ans: 0, level: "进阶",
          explain: "(180−40)÷2=70°。", point: "等腰" },
        { q: "三角形两个角 55° 和 65°，第三个角是？", opts: ["60°", "70°", "50°", "120°"], ans: 0, level: "基础",
          explain: "180−55−65=60°。", point: "内角和" },
        { q: "菱形周长 36 厘米，每条边是？", opts: ["9 厘米", "4 厘米", "18 厘米", "12 厘米"], ans: 0, level: "基础",
          explain: "四边相等：36÷4=9 厘米。", point: "菱形" },
        { q: "直角三角形两角为 90° 与 32°，第三个角是？", opts: ["58°", "148°", "68°", "32°"], ans: 0, level: "基础",
          explain: "180−90−32=58°（两个锐角之和恒为 90°）。", point: "直角三角形" }
      ]
    }
  }
  ];

  const P6 = [
  {
    id: "sg_ratio5", grade: "P6", stage: "新加坡", anim: null,
    name: "Ratio (P6)",
    summary: "Compare two quantities with a ratio; simplify and find shares. (P6 in the 2021 syllabus)",
    kou: "Simplify each ratio like a fraction. Total ÷ units = 1 unit.",
    steps: [
      "<b>Ratio a : b</b> compares quantities in the same units; order matters!",
      "<b>Equivalent ratios</b>: multiply/divide both sides by the same number.",
      "<b>Simplest form</b>: divide by the HCF (12 : 18 = 2 : 3).",
      "<b>Shares</b>: total ÷ total units = 1 unit → share = units × 1 unit."
    ],
    prereq: null,
    questions: [
      { q: "Simplify 12 : 18", opts: ["2 : 3", "1 : 2", "3 : 4", "6 : 9"], ans: 0, level: "Basic",
        explain: "Divide both by the HCF 6 → 2 : 3 (6 : 9 is not in simplest form).", point: "Simplify ratio" },
      { q: "Ali's money : Ben's money = 3 : 5. Together they have $64. How much does Ali have?", opts: ["$24", "$40", "$32", "$18"], ans: 0, level: "Intermediate",
        explain: "8 units = $64 → 1 unit = $8. Ali = 3 × 8 = $24.", point: "Ratio shares" },
      { q: "3 : 4 = 9 : ?", opts: ["12", "8", "10", "16"], ans: 0, level: "Basic",
        explain: "9 = 3 × 3, so the other side is 4 × 3 = 12.", point: "Equivalent ratio" },
      { q: "Red : Blue = 2 : 3. There are 15 blue beads. How many red beads?", opts: ["10", "15", "20", "25"], ans: 0, level: "Basic",
        explain: "3 units = 15 → 1 unit = 5. Red = 2 × 5 = 10.", point: "Ratio word problem" }
    ],
    _zh: {
      name: "比（新加坡 P6）",
      summary: "用比表示两个量的倍数关系；化简并按比例分配。（按 2021 大纲属 P6）",
      kou: "化简比如同约分；总数量÷总份数=每份。",
      steps: [
        "<b>比 a : b</b>：同类量比较，顺序不能颠倒。",
        "<b>比的性质</b>：前项后项同乘除，比值不变。",
        "<b>最简比</b>：两边同除最大公因数（12:18=2:3）。",
        "<b>按比分配</b>：总量÷总份数=1 份，再乘份数。"
      ],
      questions: [
        { q: "化简 12 : 18", opts: ["2 : 3", "1 : 2", "3 : 4", "6 : 9"], ans: 0, level: "基础",
          explain: "两边同÷6 → 2:3（6:9 不是最简）。", point: "化简比" },
        { q: "阿里和本的钱数比是 3:5，两人共 64 元。阿里有多少元？", opts: ["24 元", "40 元", "32 元", "18 元"], ans: 0, level: "进阶",
          explain: "8 份共 64 元 → 每份 8 元；阿里 3×8=24 元。", point: "按比分配" },
        { q: "3 : 4 = 9 : ?", opts: ["12", "8", "10", "16"], ans: 0, level: "基础",
          explain: "9=3×3，所以另一边=4×3=12。", point: "等效比" },
        { q: "红珠：蓝珠=2:3，蓝珠有 15 颗，红珠有多少颗？", opts: ["10", "15", "20", "25"], ans: 0, level: "基础",
          explain: "3 份=15 → 每份 5；红珠 2×5=10 颗。", point: "比的应用" }
      ]
    }
  },
  {
    id: "sg_fract6", grade: "P6", stage: "新加坡", anim: null,
    name: "Fraction Division",
    summary: "Divide a proper fraction by a whole number; divide by a proper fraction (multiply by the reciprocal).",
    kou: "÷ makes each piece smaller. ÷ a fraction = flip it, then multiply.",
    steps: [
      "<b>Fraction ÷ whole</b>: split into n equal parts: 3/8 ÷ 3 = 1/8.",
      "<b>Whole ÷ fraction</b>: count how many parts fit: 2 ÷ 1/4 = 8.",
      "<b>Fraction ÷ fraction</b>: flip the divisor and multiply: 1/2 ÷ 1/4 = 1/2 × 4 = 2.",
      "<b>Word check</b>: “shared equally” → ÷ the count; “how many will fit” → ÷ the part size."
    ],
    prereq: null,
    questions: [
      { q: "3/8 ÷ 3 = ?", opts: ["1/8", "1/24", "9/8", "1/3"], ans: 0, level: "Basic",
        explain: "Split 3/8 into 3 equal parts: each is 1/8.", point: "Fraction ÷ whole" },
      { q: "2 ÷ 1/4 = ?", opts: ["8", "1/2", "1/8", "6"], ans: 0, level: "Basic",
        explain: "How many quarters fit in 2? 2 × 4 = 8.", point: "Whole ÷ fraction" },
      { q: "1/2 ÷ 1/4 = ?", opts: ["2", "1/8", "4", "8"], ans: 0, level: "Intermediate",
        explain: "Flip and multiply: 1/2 × 4/1 = 2.", point: " Fraction ÷ fraction" },
      { q: "3/4 ℓ of juice is shared equally among 6 cups. Each cup gets", opts: ["1/8 ℓ", "1/2 ℓ", "1/24 ℓ", "4 ℓ"], ans: 0, level: "Intermediate",
        explain: "3/4 ÷ 6 = 3/24 = 1/8 ℓ.", point: "Division word problem" }
    ],
    _zh: {
      name: "分数除法（新加坡 P6）",
      summary: "分数除以整数；除以一个分数（颠倒相乘）。",
      kou: "÷ 让每份变小；除以一个分数 = 把它倒过来再乘。",
      steps: [
        "<b>分数÷整数</b>：分成 n 等份：3/8 ÷ 3 = 1/8。",
        "<b>整数÷分数</b>：数一数能装几份：2 ÷ 1/4 = 8。",
        "<b>分数÷分数</b>：除数颠倒后相乘：1/2 ÷ 1/4 = 1/2 × 4 = 2。",
        "<b>应用校验</b>：“平均分”→÷份数；“能装几份”→÷每份大小。"
      ],
      questions: [
        { q: "3/8 ÷ 3 = ？", opts: ["1/8", "1/24", "9/8", "1/3"], ans: 0, level: "基础",
          explain: "把 3/8 平均分成 3 份，每份 1/8。", point: "分数÷整数" },
        { q: "2 ÷ 1/4 = ？", opts: ["8", "1/2", "1/8", "6"], ans: 0, level: "基础",
          explain: "数一数 2 里有几个 1/4：2×4=8。", point: "整数÷分数" },
        { q: "1/2 ÷ 1/4 = ？", opts: ["2", "1/8", "4", "8"], ans: 0, level: "进阶",
          explain: "颠倒再乘：1/2 × 4/1 = 2。", point: "分数÷分数" },
        { q: "3/4 升果汁平均倒进 6 个杯子，每杯多少？", opts: ["1/8 升", "1/2 升", "1/24 升", "4 升"], ans: 0, level: "进阶",
          explain: "3/4 ÷ 6 = 3/24 = 1/8 升。", point: "除法应用" }
      ]
    }
  },
  {
    id: "sg_pct6", grade: "P6", stage: "新加坡", anim: null,
    name: "Percentage: Find the Whole & Change",
    summary: "Find the whole given a part and percentage; percentage increase and decrease.",
    kou: "Part ÷ percentage = whole. Increase/decrease = old ± old × p%.",
    steps: [
      "<b>Find the whole</b>: 15 is 20% of ? → 15 ÷ 20% = 15 × 5 = 75.",
      "<b>Increase</b>: new = old × (100 + p)%: $80 + 20% → $96.",
      "<b>Decrease</b>: new = old × (100 − p)%; do NOT subtract the new from the old again.",
      "<b>Percentage change</b> = change ÷ original × 100%."
    ],
    prereq: null,
    questions: [
      { q: "15 is 20% of which number?", opts: ["75", "30", "3", "100"], ans: 0, level: "Intermediate",
        explain: "20% → 1/5; whole = 15 × 5 = 75.", point: "Find the whole" },
      { q: "A price of $80 increases by 20%. The new price is", opts: ["$96", "$100", "$64", "$84"], ans: 0, level: "Basic",
        explain: "80 × 1.2 = $96.", point: "Percentage increase" },
      { q: "A price rises from $40 to $50. The percentage increase is", opts: ["25%", "20%", "10%", "125%"], ans: 0, level: "Intermediate",
        explain: "Change = 10; 10 ÷ 40 = 25%.", point: "Percentage change" },
      { q: "After a 25% discount a bag costs $60. The original price was", opts: ["$80", "$45", "$75", "$48"], ans: 0, level: "Intermediate",
        explain: "$60 is 75% of the original: 60 ÷ 0.75 = $80.", point: "Reverse percentage" }
    ],
    _zh: {
      name: "百分数：求整体与增减（新加坡 P6）",
      summary: "已知部分与百分率求整体；百分数的增加与减少。",
      kou: "部分÷百分率=整体；增加/减少 = 原来 ± 原来×p%。",
      steps: [
        "<b>求整体</b>：15 是 20% → 15 ÷ 20% = 15×5 = 75。",
        "<b>增加</b>：新值 = 原×(100+p)%：80 元 +20% → 96 元。",
        "<b>减少</b>：新值 = 原×(100−p)%；别再把新旧差再算一遍。",
        "<b>变化百分率</b> = 变化量 ÷ 原来量 × 100%。"
      ],
      questions: [
        { q: "某个数的 20% 是 15，这个数是？", opts: ["75", "30", "3", "100"], ans: 0, level: "进阶",
          explain: "20%→1/5；整体 = 15×5 = 75。", point: "求整体" },
        { q: "80 元涨价 20%，新价格是？", opts: ["96 元", "100 元", "64 元", "84 元"], ans: 0, level: "基础",
          explain: "80×1.2=96 元。", point: "百分数增加" },
        { q: "价钱从 40 元涨到 50 元，涨幅是？", opts: ["25%", "20%", "10%", "125%"], ans: 0, level: "进阶",
          explain: "变化 10；10÷40=25%。", point: "变化百分率" },
        { q: "书包打 7.5 折（25% off）后是 60 元，原价？", opts: ["80 元", "45 元", "75 元", "48 元"], ans: 0, level: "进阶",
          explain: "60 元占 75%：60÷75%=80 元。", point: "反求原价" }
      ]
    }
  },
  {
    id: "sg_alg6", grade: "P6", stage: "新加坡", anim: null,
    name: "Algebra",
    summary: "Letters for unknowns; simplify, substitute and solve simple linear expressions.",
    kou: "3a means 3 × a. Combine only like terms; substitute the same value everywhere.",
    steps: [
      "<b>Notation</b>: a + 3, 3a, a ÷ 3 — a number in front of the letter means multiply.",
      "<b>Simplify</b>: only like terms: 4a + 3a = 7a; the plain number stays separate.",
      "<b>Substitute</b>: if a = 5, then 3a − 4 = 15 − 4 = 11.",
      "<b>Solve</b>: x + 6 = 14 → undo with −6 → x = 8."
    ],
    prereq: null,
    questions: [
      { q: "Simplify 4a + 3a", opts: ["7a", "12a", "a + 7", "3a"], ans: 0, level: "Basic",
        explain: "Same letter: 4 + 3 = 7, so 7a.", point: "Simplify" },
      { q: "If a = 5, then 3a − 4 = ?", opts: ["11", "15", "19", "1"], ans: 0, level: "Basic",
        explain: "3a = 15; 15 − 4 = 11.", point: "Substitution" },
      { q: "Solve x + 6 = 14", opts: ["x = 8", "x = 20", "x = 6", "x = 2"], ans: 0, level: "Basic",
        explain: "Undo +6 with −6: x = 14 − 6 = 8.", point: "Simple equations" },
      { q: "Mrs Tan has p pens and buys 5 more. She now has", opts: ["p + 5", "5p", "p × 5", "p − 5"], ans: 0, level: "Basic",
        explain: "5 MORE means add: p + 5 (5p would mean 5 groups of p).", point: "Expressions" }
    ],
    _zh: {
      name: "代数（新加坡 P6）",
      summary: "用字母表示未知数；化简、代入求值与解简单方程。",
      kou: "3a 表示 3×a；只有同类项才能合并；代入时同一处代同一个值。",
      steps: [
        "<b>记法</b>：a+3、3a、a÷3 —— 字母前面的数表示乘。",
        "<b>化简</b>：只合并同类项：4a+3a=7a；纯数字单独保留。",
        "<b>代入</b>：a=5 → 3a−4 = 15−4 = 11。",
        "<b>求解</b>：x+6=14 → 用 −6 还原 → x=8。"
      ],
      questions: [
        { q: "化简 4a + 3a", opts: ["7a", "12a", "a + 7", "3a"], ans: 0, level: "基础",
          explain: "同类项：4+3=7，得 7a。", point: "化简" },
        { q: "若 a = 5，则 3a − 4 = ？", opts: ["11", "15", "19", "1"], ans: 0, level: "基础",
          explain: "3a=15；15−4=11。", point: "代入" },
        { q: "解方程 x + 6 = 14", opts: ["x = 8", "x = 20", "x = 6", "x = 2"], ans: 0, level: "基础",
          explain: "用 −6 还原：x = 14−6 = 8。", point: "简单方程" },
        { q: "陈老师原有 p 支笔，又买 5 支，现在有？", opts: ["p + 5", "5p", "p × 5", "p − 5"], ans: 0, level: "基础",
          explain: "多 5 支是加：p+5（5p 表示 p 的 5 倍）。", point: "代数式" }
      ]
    }
  },
  {
    id: "sg_circle6", grade: "P6", stage: "新加坡", anim: null,
    name: "Circle: Area & Circumference",
    summary: "π, circumference and area; semicircles and quarter circles in composite figures.",
    kou: "C = πd = 2πr; A = πr². Use π = 3.14 or 22/7 as the question tells you.",
    steps: [
      "<b>Circumference</b>: the distance around: C = π × diameter = 2 × π × radius.",
      "<b>Area</b>: A = π × r × r.",
      "<b>Parts</b>: a semicircle has half the area; its outline = πr + 2r. A quarter circle has ¼ of the area.",
      "<b>Composite</b>: split into circle parts + rectangles/triangles, then add."
    ],
    prereq: null,
    questions: [
      { q: "A circle has radius 7 cm. Its area (π = 22/7) is", opts: ["154 cm²", "44 cm²", "77 cm²", "22 cm²"], ans: 0, level: "Basic",
        explain: "22/7 × 7 × 7 = 154 cm².", point: "Circle area" },
      { q: "A circle has diameter 14 cm. Its circumference (π = 22/7) is", opts: ["44 cm", "88 cm", "22 cm", "28 cm"], ans: 0, level: "Basic",
        explain: "C = πd = 22/7 × 14 = 44 cm.", point: "Circumference" },
      { q: "A circle has radius 5 cm. Using π = 3.14, its area is", opts: ["78.5 cm²", "31.4 cm²", "15.7 cm²", "25 cm²"], ans: 0, level: "Basic",
        explain: "3.14 × 25 = 78.5 cm².", point: "Area with 3.14" },
      { q: "A quarter circle has radius 8 cm. Using π = 3.14, its area is", opts: ["50.24 cm²", "25.12 cm²", "200.96 cm²", "64 cm²"], ans: 0, level: "Intermediate",
        explain: "Full area = 3.14 × 64 = 200.96; quarter = 50.24 cm².", point: "Quarter circle" }
    ],
    _zh: {
      name: "圆的面积与周长（新加坡 P6）",
      summary: "π、圆周长与面积；组合图形中的半圆与四分之一圆。",
      kou: "C = πd = 2πr；A = πr²。π 用 3.14 还是 22/7，按题目要求。",
      steps: [
        "<b>周长</b>：绕圆一圈的距离：C = π×直径 = 2×π×半径。",
        "<b>面积</b>：A = π×r×r。",
        "<b>部分</b>：半圆面积为一半，轮廓 = πr+2r；四分之一圆面积为 ¼。",
        "<b>组合</b>：分割成圆的部分 + 长方形/三角形，再相加。"
      ],
      questions: [
        { q: "圆的半径 7 厘米，面积（π=22/7）是？", opts: ["154 厘米²", "44 厘米²", "77 厘米²", "22 厘米²"], ans: 0, level: "基础",
          explain: "22/7 × 7 × 7 = 154 厘米²。", point: "圆面积" },
        { q: "圆直径 14 厘米，周长（π=22/7）是？", opts: ["44 厘米", "88 厘米", "22 厘米", "28 厘米"], ans: 0, level: "基础",
          explain: "C = πd = 22/7 × 14 = 44 厘米。", point: "圆周长" },
        { q: "圆半径 5 厘米，用 π=3.14，面积是？", opts: ["78.5 厘米²", "31.4 厘米²", "15.7 厘米²", "25 厘米²"], ans: 0, level: "基础",
          explain: "3.14×25=78.5 厘米²。", point: "用 3.14 求面积" },
        { q: "四分之一圆半径 8 厘米，用 π=3.14，面积是？", opts: ["50.24 厘米²", "25.12 厘米²", "200.96 厘米²", "64 厘米²"], ans: 0, level: "进阶",
          explain: "整圆 = 3.14×64 = 200.96；四分之一 = 50.24 厘米²。", point: "四分之一圆" }
      ]
    }
  },
  {
    id: "sg_vol6", grade: "P6", stage: "新加坡", anim: null,
    name: "Volume: Finding Edges (Cube & Cuboid)",
    summary: "Find a missing edge, height or face area given the volume.",
    kou: "Volume = l × b × h — any one dimension = volume ÷ (the other two).",
    steps: [
      "<b>Missing edge</b>: height = volume ÷ (length × breadth).",
      "<b>Cube edge</b>: edge × edge × edge = volume → guess-and-check with times tables: 4×4×4 = 64.",
      "<b>Height from base area</b>: height = volume ÷ base area.",
      "<b>Face area</b>: face area = volume ÷ the perpendicular height."
    ],
    prereq: null,
    questions: [
      { q: "A cuboid has volume 180 cm³, length 12 cm and breadth 5 cm. Its height is", opts: ["3 cm", "4 cm", "15 cm", "6 cm"], ans: 0, level: "Intermediate",
        explain: "Height = 180 ÷ (12 × 5) = 180 ÷ 60 = 3 cm.", point: "Missing edge" },
      { q: "A cube has volume 64 cm³. Its edge is", opts: ["4 cm", "8 cm", "16 cm", "3 cm"], ans: 0, level: "Basic",
        explain: "4 × 4 × 4 = 64, so the edge is 4 cm.", point: "Cube edge" },
      { q: "A cuboid has volume 120 cm³ and base area 24 cm². Its height is", opts: ["5 cm", "96 cm", "10 cm", "21 cm"], ans: 0, level: "Intermediate",
        explain: "Height = 120 ÷ 24 = 5 cm.", point: "Height from base area" },
      { q: "A cuboid has volume 96 cm³ and height 4 cm. The area of its base is", opts: ["24 cm²", "20 cm²", "64 cm²", "32 cm²"], ans: 0, level: "Intermediate",
        explain: "Base area = 96 ÷ 4 = 24 cm².", point: "Face area" }
    ],
    _zh: {
      name: "体积：求棱长（正方体与长方体）（新加坡 P6）",
      summary: "已知体积求缺的棱、高或面的面积。",
      kou: "体积 = 长×宽×高 —— 任一维 = 体积 ÷ 另两维。",
      steps: [
        "<b>求缺棱</b>：高 = 体积 ÷ (长×宽)。",
        "<b>正方体棱长</b>：棱×棱×棱 = 体积 → 用乘法口诀试数：4×4×4=64。",
        "<b>由底面积求高</b>：高 = 体积 ÷ 底面积。",
        "<b>求面的面积</b>：面面积 = 体积 ÷ 垂直方向的高。"
      ],
      questions: [
        { q: "长方体体积 180 厘米³、长 12 厘米、宽 5 厘米，高是？", opts: ["3 厘米", "4 厘米", "15 厘米", "6 厘米"], ans: 0, level: "进阶",
          explain: "高 = 180÷(12×5) = 180÷60 = 3 厘米。", point: "求缺棱" },
        { q: "正方体体积 64 厘米³，棱长是？", opts: ["4 厘米", "8 厘米", "16 厘米", "3 厘米"], ans: 0, level: "基础",
          explain: "4×4×4=64，棱长 4 厘米。", point: "正方体棱长" },
        { q: "长方体体积 120 厘米³、底面积 24 厘米²，高是？", opts: ["5 厘米", "96 厘米", "10 厘米", "21 厘米"], ans: 0, level: "进阶",
          explain: "高 = 120÷24 = 5 厘米。", point: "由底面积求高" },
        { q: "长方体体积 96 厘米³、高 4 厘米，底面积是？", opts: ["24 厘米²", "20 厘米²", "64 厘米²", "32 厘米²"], ans: 0, level: "进阶",
          explain: "底面积 = 96÷4 = 24 厘米²。", point: "求面的面积" }
      ]
    }
  },
  {
    id: "sg_ang6", grade: "P6", stage: "新加坡", anim: null,
    name: "Unknown Angles in Composite Figures",
    summary: "Use angle properties together in composite figures: squares, triangles, parallelograms, trapeziums.",
    kou: "Mark every known/equal angle first; each angle fact gives one equation.",
    steps: [
      "<b>Strategy</b>: label the known angles, then apply one rule at a time.",
      "<b>Parallel-side facts</b>: adjacent angles on the same leg of a parallelogram/rhombus/trapezium add to 180°.",
      "<b>Triangles</b>: angle sum 180°; isosceles = equal base angles; right angle fixes one angle at 90°.",
      "<b>Check</b>: totals on a line must be 180°, around a point 360°."
    ],
    prereq: null,
    questions: [
      { q: "In parallelogram ABCD, ∠A = 70° and ∠A and ∠B are on the same side. ∠B = ?", opts: ["110°", "70°", "20°", "140°"], ans: 0, level: "Intermediate",
        explain: "Adjacent angles of a parallelogram add to 180°: 180 − 70 = 110°.", point: "Parallelogram" },
      { q: "In trapezium ABCD, AB ∥ CD and ∠A = 70°. The co-interior angle ∠D on the same leg is", opts: ["110°", "70°", "140°", "20°"], ans: 0, level: "Intermediate",
        explain: "Co-interior angles between parallel sides add to 180°: 180 − 70 = 110°.", point: "Trapezium" },
      { q: "Three angles on a straight line are in the ratio 1 : 2 : 3. The smallest is", opts: ["30°", "60°", "45°", "36°"], ans: 0, level: "Tricky",
        explain: "6 units = 180° → 1 unit = 30°.", point: "Straight line + ratio" },
      { q: "Angles at a point are 2x°, x° and 90°. The value of 2x is", opts: ["180°", "90°", "135°", "120°"], ans: 0, level: "Tricky",
        explain: "3x = 270° → x = 90°, so 2x = 180°.", point: "Point + unknowns" }
    ],
    _zh: {
      name: "组合图形中的未知角（新加坡 P6）",
      summary: "在正方形、三角形、平行四边形、梯形等组合图形中综合用角性质求角。",
      kou: "先标出已知/相等的角；每条角性质就是一个等式。",
      steps: [
        "<b>策略</b>：标已知角，然后一次只用一条规则。",
        "<b>平行边法则</b>：平行四边形/菱形/梯形同一腰上的相邻角相加 = 180°。",
        "<b>三角形</b>：内角和 180°；等腰 = 两底角相等；直角固定一个 90°。",
        "<b>检查</b>：直线上总 180°，一点处总 360°。"
      ],
      questions: [
        { q: "平行四边形 ABCD 中 ∠A = 70°，∠A 与 ∠B 在同一侧，∠B = ？", opts: ["110°", "70°", "20°", "140°"], ans: 0, level: "进阶",
          explain: "平行四边形相邻角互补：180−70=110°。", point: "平行四边形" },
        { q: "梯形 ABCD 中 AB ∥ CD，∠A = 70°，同腰上的同侧内角 ∠D = ？", opts: ["110°", "70°", "140°", "20°"], ans: 0, level: "进阶",
          explain: "平行线间的同侧内角相加 180°：180−70=110°。", point: "梯形" },
        { q: "一直线上三个角的比是 1:2:3，最小的是？", opts: ["30°", "60°", "45°", "36°"], ans: 0, level: "易错",
          explain: "6 份 = 180° → 1 份 = 30°。", point: "直线 + 比" },
        { q: "一点处三个角为 2x°、x° 和 90°，2x 的值是？", opts: ["180°", "90°", "135°", "120°"], ans: 0, level: "易错",
          explain: "3x=270° → x=90°，所以 2x = 180°。", point: "点 + 未知数" }
      ]
    }
  },
  {
    id: "sg_avg5", grade: "P6", stage: "新加坡", anim: null,
    name: "Average (P6)",
    summary: "Average = total ÷ count; work forwards and backwards. (P6 data analysis in the 2021 syllabus)",
    kou: "Average × count = total. That link solves every average problem.",
    steps: [
      "<b>Average</b> = total of values ÷ number of values.",
      "<b>Backwards</b>: total = average × count; the missing value = expected total − known total.",
      "<b>Changing the set</b>: remove/replace one value → recompute the total first.",
      "<b>Two groups</b>: combine both totals, then divide by both counts."
    ],
    prereq: null,
    questions: [
      { q: "What is the average of 4, 8 and 9?", opts: ["7", "8", "6", "21"], ans: 0, level: "Basic",
        explain: "(4+8+9) ÷ 3 = 21 ÷ 3 = 7.", point: "Average" },
      { q: "The average of 5 numbers is 12. Four of them are 10, 11, 13 and 14. Find the fifth.", opts: ["12", "10", "14", "11"], ans: 0, level: "Intermediate",
        explain: "Total = 12 × 5 = 60; known sum = 48; fifth = 60 − 48 = 12.", point: "Find the missing value" },
      { q: "The average of 3 numbers is 9. One number is removed and the average of the remaining two is 8. Which number was removed?", opts: ["11", "8", "9", "10"], ans: 0, level: "Intermediate",
        explain: "Total = 27; remaining = 16; removed = 27 − 16 = 11.", point: "Remove one" },
      { q: "Group A has 4 members with average 10. Group B has 4 members with average 12. What is the overall average?", opts: ["11", "12", "10", "22"], ans: 0, level: "Tricky",
        explain: "Total = 40 + 48 = 88; count = 8; average = 11.", point: "Combine groups" }
    ],
    _zh: {
      name: "平均数（新加坡 P6）",
      summary: "平均=总数÷个数；正用反用都会。（按 2021 大纲属 P6 数据分析）",
      kou: "平均×个数=总数量；这一条打通所有平均数题。",
      steps: [
        "<b>平均</b> = 总数 ÷ 个数。",
        "<b>反推</b> = 平均 × 个数；缺的数 = 应有总数 − 已知总数。",
        "<b>增删数据</b>：先重算总数，再看平均变化。",
        "<b>两组合并</b>：两组总数相加 ÷ 两组个数和。"
      ],
      questions: [
        { q: "4、8、9 的平均数是多少？", opts: ["7", "8", "6", "21"], ans: 0, level: "基础",
          explain: "(4+8+9)÷3=21÷3=7。", point: "求平均" },
        { q: "5 个数的平均是 12，其中 4 个是 10、11、13、14。第五个是？", opts: ["12", "10", "14", "11"], ans: 0, level: "进阶",
          explain: "总=12×5=60；已知 48；第 5 个=60−48=12。", point: "缺数反求" },
        { q: "3 个数的平均是 9；去掉一个后剩下两个的平均是 8。去掉的是哪个数？", opts: ["11", "8", "9", "10"], ans: 0, level: "进阶",
          explain: "总=27；剩=16；去掉的=27−16=11。", point: "去掉一个" },
        { q: "A 组 4 人平均 10，B 组 4 人平均 12，总体平均是？", opts: ["11", "12", "10", "22"], ans: 0, level: "易错",
          explain: "总=40+48=88；8 人；平均=11。", point: "组间合并" }
      ]
    }
  }
  ];
  if (!window.SG_ENTRIES) window.SG_ENTRIES = [];
  window.SG_ENTRIES.push.apply(window.SG_ENTRIES, P5);
  window.SG_ENTRIES.push.apply(window.SG_ENTRIES, P6);

  /* ---- 语言切换：把双语条目推入 TECHNIQUES，并按当前语言展开 ---- */
  if (!window.TECHNIQUES) window.TECHNIQUES = [];
  window.LANG = window.LANG || "en";

  function snap(e) {
    return { name: e.name, summary: e.summary, kou: e.kou, steps: e.steps.slice(), questions: e.questions.map(q => Object.assign({}, q)) };
  }
  function applyTo(e, s) {
    e.name = s.name; e.summary = s.summary; e.kou = s.kou;
    e.steps = s.steps.slice(); e.questions = s.questions.map(q => Object.assign({}, q));
  }
  window.SG_ALL = [];
  window.SG_ENTRIES.forEach(e => {
    e._en = snap(e);
    window.TECHNIQUES.push(e);
    window.SG_ALL.push(e);
  });
  window.setSgLang = function (lang) {
    window.LANG = lang === "zh" ? "zh" : "en";
    window.SG_ALL.forEach(e => applyTo(e, window.LANG === "en" ? e._en : e._zh));
    const btn = (typeof document !== "undefined") ? document.getElementById("langToggle") : null;
    if (btn) btn.textContent = window.LANG === "en" ? "中文" : "English";
  };
  window.setSgLang(window.LANG);
  if (typeof window.addEventListener === "function") window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("langToggle");
    if (btn && !btn._bound) {
      btn._bound = true;
      btn.addEventListener("click", () => {
        window.setSgLang(window.LANG === "en" ? "zh" : "en");
        window.dispatchEvent(new Event("hashchange")); // 触发重渲染
      });
      window.setSgLang(window.LANG);
    }
  });
})();
