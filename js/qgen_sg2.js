/* 新加坡模块参数化出题（P5：百分数、速度、百万级、分数乘、小数位移、Rate、三角形面积、体积、角性质、四边形）
 * （P6：分数除法、百分数应用、代数、圆、体积反推、组合图形角）+ 挂接 */
(function () {
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[rnd(0, a.length - 1)]; }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function opts(ans, make, n) { n = n || 4; const set = new Set([ans]); let g = 0; while (set.size < n && g++ < 400) { const d = make(); if (d !== ans) set.add(d); } let k = 1; while (set.size < n) { set.add(ans + k); k++; } const arr = shuffle([...set]).map(String); return { opts: arr, ans: arr.indexOf(String(ans)) }; }
  function cats(ans, pool, n) { n = n || 4; const set = new Set([String(ans)]); for (let i = 0; i < pool.length && set.size < n; i++) set.add(String(pool[i])); const arr = shuffle([...set]); return { opts: arr, ans: arr.indexOf(String(ans)) }; }
  function Q(q, optsObj, level, explain, point) { return Object.assign({ q, level: level || "Basic", explain, point: point || "" }, optsObj, { fig: null }); }
  function L(en, zh) { return window.LANG === "zh" ? zh : en; }
  function pos(ans, span) { return opts(ans, () => rnd(Math.max(0, ans - span), ans + span)); }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; }
  function fmt(n) { return String(n).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 "); }
  function fracStr(n, d) { if (d === 1) return String(n); const g = gcd(n, d); n /= g; d /= g; return d === 1 ? String(n) : n + "/" + d; }
  function fmtDec(x) { return String(parseFloat(Number(x).toPrecision(12))); }
  function mixedStr(n, d) {
    const g = gcd(n, d); n /= g; d /= g;
    if (d === 1) return String(n);
    const w = Math.floor(n / d), r = n % d;
    if (r === 0) return String(w);
    return w === 0 ? `${r}/${d}` : `${w} ${r}/${d}`;
  }

  /* ---- sg_ratio5 Ratio（P6）---- */
  function qSgRatio5() {
    const type = rnd(0, 5);
    let n1 = rnd(1, 9), n2 = rnd(1, 9);
    while (n1 === n2 || gcd(n1, n2) !== 1) { n1 = rnd(1, 9); n2 = rnd(1, 9); }
    if (n1 > n2) { const t = n1; n1 = n2; n2 = t; }
    if (type === 0) {
      const g = rnd(2, 12), a = n1 * g, b = n2 * g;
      return Q(L(`Simplify ${a} : ${b}`, `化简 ${a} : ${b}`),
        cats(`${n1} : ${n2}`, [`${n1} : ${n2 + 1}`, `${n1 + 1} : ${n2}`, `${a} : ${b}`, `1 : ${Math.floor(b / n1)}`], 3), "Basic",
        L(`Both divide by ${g}: (${a} : ${b}) ÷ ${g} = ${n1} : ${n2}.`, `两边同除 ${g}：${a}:${b} → ${n1}:${n2}。`),
        L("Simplify ratio", "化简比"));
    }
    if (type === 1) {
      const u = rnd(2, 12), total = u * (n1 + n2);
      return Q(L(`Two amounts are in the ratio ${n1} : ${n2}. Their total is ${total}. What is the larger amount?`, `两个量的比是 ${n1}:${n2}，总量是 ${total}。较大的量是多少？`),
        pos(u * n2, 15), "Intermediate",
        L(`${n1 + n2} units = ${total} → 1 unit = ${u}. Larger = ${n2} × ${u} = ${u * n2}.`, `${n1 + n2} 份共 ${total} → 每份 ${u}；较大=${n2}×${u}=${u * n2}。`),
        L("Ratio shares", "按比分配"));
    }
    if (type === 2) {
      const u = rnd(2, 10), diff = u * (n2 - n1);
      return Q(L(`Two amounts are in the ratio ${n1} : ${n2}. Their difference is ${diff}. What is the smaller amount?`, `两个量的比是 ${n1}:${n2}，差是 ${diff}。较小的量是多少？`),
        pos(u * n1, 12), "Intermediate",
        L(`Difference = ${n2} − ${n1} = ${n2 - n1} units = ${diff} → 1 unit = ${u}. Smaller = ${u * n1}.`, `差=${n2}−${n1}=${n2 - n1} 份=${diff} → 每份 ${u}；较小=${u * n1}。`),
        L("Ratio difference", "比的差"));
    }
    if (type === 3) {
      const k = rnd(2, 6), reach = n1 * k;
      return Q(L(`${n1} : ${n2} = ${reach} : ?`, `${n1} : ${n2} = ${reach} : ？`),
        cats(String(n2 * k), [String(n2 * k + 1), String(n2 + k), String(n2 * n1)], 3), "Basic",
        L(`${reach} = ${n1} × ${k}, so the other side is ${n2} × ${k} = ${n2 * k}.`, `${reach}=${n1}×${k}，所以另一边=${n2}×${k}=${n2 * k}。`),
        L("Equivalent ratio", "等效比"));
    }
    if (type === 4) {
      const u = rnd(2, 12), total = u * (n1 + n2);
      return Q(L(`Red : Blue = ${n1} : ${n2}. There are ${u * n2} blue ones. How many red ones?`, `红:蓝=${n1}:${n2}，蓝有 ${u * n2} 个，红有多少个？`),
        pos(u * n1, 10), "Basic",
        L(`${n2} units = ${u * n2} → 1 unit = ${u}; red = ${n1} × ${u} = ${u * n1}.`, `${n2} 份=${u * n2} → 每份 ${u}；红=${n1}×${u}=${u * n1}。`),
        L("Ratio word problem", "比的应用"));
    }
    const u = rnd(2, 12), total = u * (n1 + n2);
    const fr = `${n1}/${n1 + n2}`;
    return Q(L(`Two amounts in the ratio ${n1} : ${n2}. The smaller is what fraction of the total?`, `两个量之比为 ${n1}:${n2}，较小的量占总量的几分之几？`),
      cats(fr, [`${n2}/${n1 + n2}`, `${n1}/${n2}`, `1/${n1 + n2}`], 3), "Intermediate",
      L(`Smaller : total = ${n1} : (${n1} + ${n2}) = ${fr}.`, `较小:总量=${n1}:(${n1}+${n2})=${fr}。`),
      L("Ratio ↔ fraction", "比与分数"));
  }

  /* ---- sg_pct5 Percentage ---- */
  function qSgPct5() {
    const type = rnd(0, 7);
    if (type === 0) {
      const p = pick([5, 10, 20, 25, 50, 75]), N = pick([40, 60, 80, 100, 120, 200]);
      return Q(L(`${p}% of ${N} = ?`, `${N} 的 ${p}% 是多少？`),
        pos(N * p / 100, 20), "Basic", L(`${N} × ${p}/100 = ${N * p / 100}.`, `${N}×${p}/100=${N * p / 100}。`), L("Percent of", "求百分之几"));
    }
    if (type === 1) {
      const p = pick([10, 20, 25, 40, 50, 60, 75, 80]), k = rnd(1, 9), x = p * k, y = 100 * k;
      return Q(L(`What percent of ${y} is ${x}?`, `${x} 占 ${y} 的百分之几？`),
        cats(`${p}%`, [`${p + 5}%`, `${p + 10}%`, `${Math.max(1, p - 5)}%`], 4), "Intermediate",
        L(`${x} ÷ ${y} = ${p}/100 = ${p}%.`, `${x}÷${y}=${p}/100=${p}%。`), L("Find the percentage", "求百分比"));
    }
    if (type === 2) {
      const d = pick([20, 40]), px = rnd(2, 20) * 5, pay = px * (100 - d) / 100;
      return Q(L(`A $${px} item is sold at ${d}% off. What is the sale price?`, `一件 ${px} 元的商品打 ${100 - d} 折（${d}% off），现价是多少？`),
        pos(pay, 10), "Basic",
        L(`Keep ${100 - d}%; pay ${px} × ${(100 - d) / 100} = ${pay}.`, `付 ${100 - d}%：${px}×${(100 - d) / 100}=${pay} 元。`),
        L("Discount", "折扣"));
    }
    if (type === 3) {
      const gst = pick([7, 9]), px = rnd(2, 30) * 10, tot = px * (100 + gst) / 100;
      return Q(L(`A meal costs $${px}. A ${gst}% GST is added. What is the bill?`, `餐费 ${px} 元，另加 ${gst}% 消费税（GST），账单是多少？`),
        pos(tot, 8), "Basic",
        L(`Bill = ${px} × ${(100 + gst)}% = ${tot}.`, `账单=${px}×${100 + gst}%=${tot} 元。`),
        L("GST-style increase", "税上增"));
    }
    if (type === 4) {
      const p = pick([50, 75, 80, 25, 20]), fr = { 50: "1/2", 25: "1/4", 75: "3/4", 80: "4/5", 20: "1/5" };
      return Q(L(`${p}% as a fraction in simplest form is`, `${p}% 化成最简分数是`),
        cats(fr[p], [`${p}/100`, fr[{ 50: 25, 75: 50, 80: 75, 25: 20, 20: 50 }[p]], `${100 - p}/100`, "9/10"], 4), "Basic",
        L(`${p}% = ${p}/100 = ${fr[p]} (divide by the HCF).`, `${p}%=${p}/100=${fr[p]}（约分）。`),
        L("Percent ↔ fraction", "百分数与分数"));
    }
    if (type === 6) {
      const P = pick([100, 200, 300, 400, 500]), r = pick([2, 3, 4, 5]), i = P * r / 100;
      return Q(L(`$${P} is saved at ${r}% interest per year. The interest after 1 year is`, `存入 ${P} 元，年利率 ${r}%，一年后的利息是`),
        pos(i, 10), "Basic",
        L(`Interest = ${P} × ${r}% = $${i} (the account would hold $${P + i}).`, `利息=${P}×${r}%=${i} 元（账户将有 ${P + i} 元）。`),
        L("Annual interest", "年利息"));
    }
    if (type === 7) {
      const p = pick([5, 10, 20]), base = { 5: 20, 10: 10, 20: 5 }[p], orig = rnd(2, 25) * base, up = pick([0, 1]), ch = orig * p / 100, nv = orig + (up ? ch : -ch);
      return Q(L(`A price of $${orig} changes by ${up ? "+" : "−"}${p}%. The new price is`, `价格 ${orig} 元变化 ${up ? "+" : "−"}${p}%，新价格是`),
        pos(nv, 15), "Intermediate",
        L(`Change = ${orig} × ${p}% = ${ch}; new = ${orig} ${up ? "+" : "−"} ${ch} = ${nv}.`, `变化=${orig}×${p}%=${ch}；新=${orig}${up ? "+" : "−"}${ch}=${nv} 元。`),
        L("Percentage change", "百分数增减"));
    }
    const m = rnd(2, 25), pay = 4 * m, orig = 5 * m;
    return Q(L(`After a 20% discount, an item costs $${pay}. What was the original price?`, `一件商品打 8 折后是 ${pay} 元，原价是多少？`),
      pos(orig, 30), "Intermediate",
      L(`Pay 80% = ${pay} → 20% = ${m}; original = ${pay} ÷ 80% = ${orig}.`, `现价占 80%=${pay} → 20%= 每 ${m} 元；原=${pay}÷80%=${orig} 元。`),
      L("Reverse percentage", "折后反求原价"));
  }

  /* ---- sg_avg5 Average（P6）---- */
  function qSgAvg5() {
    const type = rnd(0, 5);
    if (type === 0) {
      let a = rnd(2, 30), b = rnd(2, 30), c = rnd(2, 30);
      c += (3 - (a + b + c) % 3) % 3;
      const sum = a + b + c, ans = sum / 3;
      return Q(L(`Find the average of ${a}, ${b} and ${c}.`, `求 ${a}、${b}、${c} 的平均数。`),
        pos(ans, 10), "Basic",
        L(`(${a}+${b}+${c}) ÷ 3 = ${sum} ÷ 3 = ${ans}.`, `(${a}+${b}+${c})÷3=${sum}÷3=${ans}。`),
        L("Average", "求平均"));
    }
    if (type === 1) {
      const n1 = rnd(5, 25), n2 = rnd(5, 25), n3 = rnd(5, 25), n4 = rnd(5, 25), s4 = n1 + n2 + n3 + n4;
      let t = (5 - s4 % 5) % 5; if (t === 0) t = 5;
      const total = s4 + t, m = total / 5;
      return Q(L(`The average of 5 numbers is ${m}. Four of them are ${n1}, ${n2}, ${n3}, ${n4}. Find the fifth.`, `5 个数的平均是 ${m}，其中 4 个是 ${n1}、${n2}、${n3}、${n4}。第五个数是多少？`),
        pos(t, 10), "Intermediate",
        L(`Total = ${m} × 5 = ${total}; known = ${s4}; fifth = ${total} − ${s4} = ${t}.`, `总=${m}×5=${total}；已知和=${s4}；第五个=${total}−${s4}=${t}。`),
        L("Find the missing value", "缺数反求"));
    }
    if (type === 2) {
      const m = rnd(10, 25), p = rnd(2, Math.floor((3 * m - 2) / 2)), rem = 3 * m - 2 * p;
      return Q(L(`The average of 3 numbers is ${m}. One number is removed, and the average of the remaining two is ${p}. Which number was removed?`, `3 个数的平均是 ${m}，去掉一个后剩下两个的平均是 ${p}。去掉的是哪个数？`),
        pos(rem, 6), "Intermediate",
        L(`Total = 3×${m} = ${3 * m}; remaining = 2×${p} = ${2 * p}; removed = ${3 * m} − ${2 * p} = ${rem}.`, `总=3×${m}=${3 * m}；剩余=2×${p}=${2 * p}；去掉=${3 * m}−${2 * p}=${rem}。`),
        L("Remove one", "去掉一个"));
    }
    if (type === 3) {
      const k = rnd(3, 6), a1 = rnd(5, 20), a2 = a1 + 2 * rnd(1, 4), ov = (a1 + a2) / 2;
      return Q(L(`Group A: ${k} members, average ${a1}. Group B: ${k} members, average ${a2}. Overall average?`, `A 组 ${k} 人平均 ${a1}，B 组 ${k} 人平均 ${a2}，总体平均是多少？`),
        pos(ov, 6), "Tricky",
        L(`Totals = ${k * a1} and ${k * a2}, sum ${k * (a1 + a2)}; count = ${2 * k}; average = ${k * (a1 + a2)} ÷ ${2 * k} = ${ov}.`, `两组总数=${k * a1}+${k * a2}=${k * (a1 + a2)}；共 ${2 * k} 人；平均=${ov}。`),
        L("Combine groups", "组间合并"));
    }
    if (type === 4) {
      const m = rnd(10, 30), x = rnd(11, 40), st = pick([-1, 1, 2, 3]), y = x + 5 * st, ny = m + st;
      return Q(L(`The average of 5 numbers is ${m}. One number is changed from ${x} to ${y}. What is the new average?`, `5 个数的平均是 ${m}，把其中一个由 ${x} 改为 ${y}，新的平均是多少？`),
        pos(ny, 5), "Challenge",
        L(`Change = ${y} − ${x} = ${y - x} = 5 × ${st}; the extra spreads over 5 numbers: +${st} each; new average = ${m} + ${st} = ${ny}.`, `变化=${y}−${x}=${y - x}=5×${st}；摊到 5 个数每个 +${st}；新平均=${m}+${st}=${ny}。`),
        L("Average change", "平均变化"));
    }
    const n = rnd(4, 9), av = rnd(3, 25), tot = n * av;
    return Q(L(`There are ${n} numbers with an average of ${av}. What is their total?`, `${n} 个数的平均是 ${av}，总数是多少？`),
      pos(tot, 25), "Basic",
      L(`Total = average × count = ${av} × ${n} = ${tot}.`, `总数=平均×个数=${av}×${n}=${tot}。`),
      L("Total from average", "由平均求总数"));
  }

  /* ---- sg_speed5 Speed ---- */
  function qSgSpeed5() {
    const type = rnd(0, 5);
    if (type === 0) {
      const s = rnd(4, 12) * 10, t = rnd(2, 9), d = s * t;
      return Q(L(`A car travels ${d} km in ${t} hours. What is its speed?`, `汽车 ${t} 小时行 ${d} 千米，速度是多少？`),
        cats(`${s} km/h`, [`${d} km/h`, `${s + 5} km/h`, `${d} km`], 4), "Basic",
        L(`Speed = ${d} ÷ ${t} = ${s} km/h.`, `速度=${d}÷${t}=${s} km/h。`),
        L("Find speed", "求速度"));
    }
    if (type === 1) {
      const s = pick([40, 60, 80, 100, 120]), tm = pick([0.5, 1.5, 2.5, 3.5]), d = s * tm;
      return Q(L(`A bus travels at ${s} km/h for ${tm} hours. How far does it go?`, `客车以 ${s} km/h 行驶 ${tm} 小时，行了多少千米？`),
        pos(d, 30), "Intermediate",
        L(`Distance = ${s} × ${tm} = ${d} km.`, `路程=${s}×${tm}=${d} 千米。`),
        L("Find distance", "求路程"));
    }
    if (type === 2) {
      const s = rnd(4, 12) * 10, t = rnd(2, 9), d = s * t;
      return Q(L(`A journey of ${d} km is made at ${s} km/h. How long does it take?`, `以 ${s} km/h 行驶 ${d} 千米，需要多少小时？`),
        cats(`${t} h`, [`${t + 1} h`, `${(d / s + 1).toFixed(1)} h`, `${t - 1 || t + 2} h`], 4), "Intermediate",
        L(`Time = ${d} ÷ ${s} = ${t} h.`, `时间=${d}÷${s}=${t} 小时。`),
        L("Find time", "求时间"));
    }
    if (type === 3) {
      const ms = rnd(2, 12), sec = pick([10, 20, 25]), m = ms * sec;
      return Q(L(`A pupil runs ${m} m in ${sec} s. What is his speed in m/s?`, `一名学生 ${sec} 秒跑 ${m} 米，速度是多少 m/s？`),
        cats(`${ms} m/s`, [`${ms + 1} m/s`, `${m} m/s`, `${ms} km/h`], 4), "Basic",
        L(`Speed = ${m} ÷ ${sec} = ${ms} m/s.`, `速度=${m}÷${sec}=${ms} m/s。`),
        L("Find speed (m/s)", "米/秒求速度"));
    }
    if (type === 4) {
      const ms = rnd(2, 12), sec = rnd(10, 60), d = ms * sec;
      return Q(L(`A ball rolls ${ms} m every second. How far in ${sec} s?`, `小球每秒滚 ${ms} 米，${sec} 秒滚多远？`),
        pos(d, 40), "Basic",
        L(`Distance = ${ms} × ${sec} = ${d} m.`, `路程=${ms}×${sec}=${d} 米。`),
        L("Find distance (m/s)", "米/秒求路程"));
    }
    const t1 = rnd(2, 5), d1 = rnd(2, 9) * 10 * t1, s1 = d1 / t1, t2 = rnd(2, 6), d2 = rnd(2, 9) * 10 * t2, s2 = d2 / t2;
    return Q(L(`Leg 1: ${d1} km in ${t1} h. Leg 2: ${d2} km in ${t2} h. Which leg is faster, or are they equal?`, `前段 ${t1} 小时行 ${d1} 千米，后段 ${t2} 小时行 ${d2} 千米。哪一段更快，或两段一样快？`),
      cats(s1 > s2 ? L("Leg 1 is faster", "前段更快") : (s2 > s1 ? L("Leg 2 is faster", "后段更快") : L("Same speed", "一样快")),
        [L("Leg 1 is faster", "前段更快"), L("Leg 2 is faster", "后段更快"), L("Same speed", "一样快")].slice(0, 3), 3), "Challenge",
      L(`Leg 1 = ${d1} ÷ ${t1} = ${s1} km/h; Leg 2 = ${d2} ÷ ${t2} = ${s2} km/h.`, `前段=${d1}÷${t1}=${s1} km/h；后段=${d2}÷${t2}=${s2} km/h。`),
      L("Compare speeds", "比较速度"));
  }

  /* ---- sg_num5 10 Million & Order of Operations ---- */
  function qSgNum5() {
    const type = rnd(0, 6);
    if (type === 0) {
      const N = rnd(10, 999), k = pick([10, 100, 1000]), ans = N * k;
      return Q(L(`${N} × ${k} = ?`, `${N} × ${k} = ？`), pos(ans, Math.max(20, Math.round(ans / 2))), "Basic",
        L(`×${k} shifts the digits ${k === 10 ? "1" : (k === 100 ? "2" : "3")} place${k === 10 ? "" : "s"} left: ${N} → ${fmt(ans)}.`, `×${k} 使数字左移：${N} → ${fmt(ans)}。`),
        L("Shift rule", "位移规律"));
    }
    if (type === 1) {
      const k = pick([10, 100, 1000]), q = rnd(10, 999), N = q * k, ans = q;
      return Q(L(`${fmt(N)} ÷ ${k} = ?`, `${fmt(N)} ÷ ${k} = ？`), pos(ans, 30), "Basic",
        L(`÷${k} shifts the digits right: ${fmt(N)} → ${ans}.`, `÷${k} 使数字右移：${fmt(N)} → ${ans}。`),
        L("Shift rule", "位移规律"));
    }
    if (type === 2) {
      const a = rnd(2, 20), b = rnd(2, 9), c = rnd(2, 9), ans = a + b * c;
      return Q(L(`${a} + ${b} × ${c} = ?`, `${a} + ${b} × ${c} = ？`),
        cats(String(ans), [String((a + b) * c), String(a + b + c), String(a * b + c)], 3), "Basic",
        L(`× first: ${b} × ${c} = ${b * c}; then ${a} + ${b * c} = ${ans}.`, `先乘：${b}×${c}=${b * c}；再加：${a}+${b * c}=${ans}。`),
        L("Order of operations", "运算顺序"));
    }
    if (type === 3) {
      const c = rnd(2, 4), q = rnd(2, 5), b = rnd(20, 50), a = b + q * c, d = rnd(2, 5), ans = q * d;
      return Q(L(`(${a} − ${b}) ÷ ${c} × ${d} = ?`, `(${a} − ${b}) ÷ ${c} × ${d} = ？`),
        cats(String(ans), [String(q * (c + d)), String(q * c + d), String(a + b), String(q + c * d)], 4), "Intermediate",
        L(`Brackets: ${a} − ${b} = ${a - b}; then left to right: ${a - b} ÷ ${c} = ${q}; ${q} × ${d} = ${ans}.`, `先括号：${a}−${b}=${a - b}；再从左到右：÷${c}=${q}；×${d}=${ans}。`),
        L("Brackets & left-to-right", "括号与从左到右"));
    }
    if (type === 4) {
      const N = rnd(2, 30), ans = N * 300;
      return Q(L(`${N} × 300 = ?`, `${N} × 300 = ？`), pos(ans, Math.max(30, Math.round(ans / 2))), "Basic",
        L(`${N} × 3 = ${N * 3}, then ×100: ${fmt(ans)}.`, `${N}×3=${N * 3}，再×100：${fmt(ans)}。`),
        L("Multiples of 10", "整十倍数"));
    }
    if (type === 5) {
      const b = rnd(2, 9), q = rnd(10, 99), a = q * b, c = rnd(2, 9), ans = q * c;
      return Q(L(`${a} ÷ ${b} × ${c} = ?`, `${a} ÷ ${b} × ${c} = ？`),
        cats(String(ans), [String(q + c), String(q * c + q), String(a + c), String(a / b + b)], 4), "Intermediate",
        L(`Left to right: ${a} ÷ ${b} = ${q}; ${q} × ${c} = ${ans}.`, `从左到右：${a}÷${b}=${q}；${q}×${c}=${ans}。`),
        L("Order of operations", "运算顺序"));
    }
    const m = rnd(1, 9), N = m * 1000000 + rnd(10, 99) * rnd(1000, 1000) + rnd(100, 999);
    const ans = m * 1000000;
    return Q(L(`In ${fmt(N)}, what is the value of the millions digit?`, `${fmt(N)} 中，百万位上的数字表示多少？`),
      cats(fmt(ans), [fmt(ans / 10), fmt(ans * 10), fmt(N)], 3), "Intermediate",
      L(`The millions digit is ${m}: ${m} × 1 000 000 = ${fmt(ans)}.`, `百万位是 ${m}：${m}×1 000 000=${fmt(ans)}。`),
      L("10 million place value", "百万级位值"));
  }

  /* ---- sg_fract5 分数加减乘 ---- */
  function qSgFract5() {
    const type = rnd(0, 6);
    if (type === 0 || type === 1) {
      const pair = pick([[2, 4], [3, 6], [4, 8], [5, 10], [2, 6], [3, 9], [2, 3]]);
      const d1 = pair[0], d2 = pair[1];
      const Lc = d2 % d1 === 0 ? d2 : d1 * d2;
      const a = rnd(1, d1 - 1), c = rnd(1, d2 - 1);
      const n1 = a * (Lc / d1), n2 = c * (Lc / d2);
      const add = type === 0;
      const w1 = add ? rnd(1, 5) : rnd(2, 6);
      const w2 = add ? rnd(1, 5) : rnd(1, w1 - 1);
      let whole = add ? w1 + w2 : w1 - w2;
      let total = add ? n1 + n2 : n1 - n2;
      if (total < 0) { total += Lc; whole -= 1; }
      if (total >= Lc) { whole += Math.floor(total / Lc); total %= Lc; }
      const f = fracStr(total, Lc);
      const correct = total === 0 ? String(whole) : (whole === 0 ? f : `${whole} ${f}`);
      const near = total === 0 ? `${whole} 1/${Lc}` : `${whole} ${fracStr(total + 1 >= Lc ? 1 : total + 1, Lc)}`;
      const more = total === 0 ? `${whole + 1} 1/${Lc}` : `${whole + 1} ${f}`;
      const comp = `${whole} ${fracStr(total === 0 ? 1 : Lc - total, Lc)}`;
      return Q(L(`${w1} ${a}/${d1} ${add ? "+" : "−"} ${w2} ${c}/${d2} = ?`, `${w1} ${a}/${d1} ${add ? "+" : "−"} ${w2} ${c}/${d2} = ？`),
        cats(correct, [near, more, comp], 3), "Intermediate",
        L(`${add ? "Add" : "Take away"} the wholes and the fractions separately; rename improper fractions as needed: ${correct}.`, `整数部分与分数部分分开算，假分数部分要改名：${correct}。`),
        L(add ? "Mixed numbers +" : "Mixed numbers −", add ? "带分数加法" : "带分数减法"));
    }
    if (type === 2) {
      const q = rnd(2, 6), p = rnd(1, q - 1), k = rnd(2, 9), n = q * k, ans = p * k;
      return Q(L(`${p}/${q} × ${n} = ?`, `${p}/${q} × ${n} = ？`), pos(ans, 10), "Basic",
        L(`${n} ÷ ${q} = ${k}; ${p} × ${k} = ${ans}.`, `${n}÷${q}=${k}；${p}×${k}=${ans}。`),
        L("Fraction × whole", "分数×整数"));
    }
    if (type === 3) {
      const q = rnd(2, 6), p = rnd(1, q - 1), s = rnd(2, 6), r = rnd(1, s - 1);
      const ans = fracStr(p * r, q * s);
      return Q(L(`${p}/${q} × ${r}/${s} = ?`, `${p}/${q} × ${r}/${s} = ？`),
        cats(ans, [fracStr(p + r, q + s), fracStr(p * s, q * r), fracStr(p * r, q * s + 2)], 3), "Intermediate",
        L(`Top × top, bottom × bottom: ${p * r}/${q * s} = ${ans}.`, `分子乘分子、分母乘分母：${p * r}/${q * s} = ${ans}。`),
        L("Fraction × fraction", "分数×分数"));
    }
    if (type === 4) {
      const b = rnd(2, 8), a = rnd(1, b - 1), w = rnd(1, 4), n = rnd(2, 12);
      const num = (w * b + a) * n, ans = mixedStr(num, b);
      return Q(L(`${w} ${a}/${b} × ${n} = ?`, `${w} ${a}/${b} × ${n} = ？`),
        cats(ans, [mixedStr(a * n, b), mixedStr(w * n, b), mixedStr(w * b * n + a, b), mixedStr(num + b, b)], 4), "Intermediate",
        L(`Mixed → improper: ${w * b + a}/${b}; × ${n} = ${num}/${b} = ${ans}.`, `化假分数 ${w * b + a}/${b}；×${n} = ${num}/${b} = ${ans}。`),
        L("Mixed × whole", "带分数×整数"));
    }
    if (type === 5) {
      const q = rnd(2, 6), p = rnd(1, q - 1), k = rnd(2, 9), n = q * k, ans = p * k;
      return Q(L(`What is ${p}/${q} of ${n} sweets?`, `${n} 颗糖的 ${p}/${q} 是多少颗？`), pos(ans, 8), "Basic",
        L(`${n} ÷ ${q} = ${k} per part; ${p} parts = ${ans}.`, `${n}÷${q}=${k} 每份；${p} 份=${ans}。`),
        L("Fraction of a set", "占一组"));
    }
    const d = pick([2, 3, 4, 5, 6]), k = rnd(2, 9), rem = rnd(1, d - 1), n = d * k + rem;
    return Q(L(`${n} ÷ ${d}, written as a fraction, is`, `${n} ÷ ${d} 用分数表示是`),
      cats(fracStr(n, d), [fracStr(n, d + 1), `${k + 1}/${d}`, `${n}/${d + 1}`], 3), "Intermediate",
      L(`Quotient as a fraction: ${n}/${d} = ${fracStr(n, d)} (≈ ${k} ${rem}/${d}).`, `商写成分数：${n}/${d} = ${fracStr(n, d)}（≈ ${k} ${rem}/${d}）。`),
      L("Quotient as fraction", "商与分数"));
  }

  /* ---- sg_dec5 小数×10 与单位 ---- */
  function qSgDec5() {
    const type = rnd(0, 5);
    const make = () => { const p = pick([1, 2, 3]); return rnd(1, 999) / Math.pow(10, p); };
    if (type === 0 || type === 1) {
      const a = make(), k = pick([10, 100, 1000]), up = type === 0;
      const ans = up ? a * k : a / k;
      const w1 = up ? a * k / 10 : a / k / 10, w2 = up ? a / k : a * k;
      return Q(L(`${fmtDec(a)} ${up ? "×" : "÷"} ${k} = ?`, `${fmtDec(a)} ${up ? "×" : "÷"} ${k} = ？`),
        cats(fmtDec(ans), [fmtDec(w1), fmtDec(w2), fmtDec(up ? a : a)], 4), "Basic",
        L(`${up ? "×" : "÷"}${k} shifts the digits ${up ? "left" : "right"}: ${fmtDec(a)} ${up ? "→ " + fmtDec(ans) : "→ " + fmtDec(ans)}.`, `${up ? "×" : "÷"}${k} 使数字${up ? "左" : "右"}移：${fmtDec(a)} → ${fmtDec(ans)}。`),
        L("Shift rule", "位移规律"));
    }
    if (type === 2) {
      const a = rnd(1, 99) / 10, ans = a * 1000;
      return Q(L(`${fmtDec(a)} km = ? m`, `${fmtDec(a)} 千米 = ？米`),
        cats(`${fmt(ans)} m`, [`${fmtDec(a)} m`, `${fmt(Math.round(a * 100))} m`, `${fmt(Math.round(ans * 10))} m`], 3), "Basic",
        L(`1 km = 1 000 m: ×1000 → ${fmt(ans)} m.`, `1 千米 = 1000 米：×1000 → ${fmt(ans)} 米。`),
        L("km ↔ m", "千米与米"));
    }
    if (type === 3) {
      const m = rnd(1, 99) * 10, ans = m / 1000;
      return Q(L(`${m} m = ? km`, `${m} 米 = ？千米`),
        cats(`${fmtDec(ans)} km`, [`${fmtDec(Math.round(ans * 100))} km`, `${fmtDec(Math.round(ans * 10))} km`, `${fmt(m)} m`], 3), "Intermediate",
        L(`÷1000: ${m} m = ${fmtDec(ans)} km.`, `÷1000：${m} 米 = ${fmtDec(ans)} 千米。`),
        L("km ↔ m", "千米与米"));
    }
    if (type === 4) {
      const a = rnd(1, 99) / 10, ans = a * 1000;
      return Q(L(`${fmtDec(a)} kg = ? g`, `${fmtDec(a)} 千克 = ？克`),
        cats(`${fmt(ans)} g`, [`${fmt(Math.round(a * 100))} g`, `${fmtDec(Math.round(ans / 1000))} g`, `${fmt(Math.round(ans * 10))} g`], 3), "Basic",
        L(`1 kg = 1 000 g: ×1000 → ${fmt(ans)} g.`, `1 千克 = 1000 克：×1000 → ${fmt(ans)} 克。`),
        L("kg ↔ g", "千克与克"));
    }
    const a = rnd(1, 99) / 10, ans = a * 1000;
    return Q(L(`${fmtDec(a)} ℓ = ? ml`, `${fmtDec(a)} 升 = ？毫升`),
      cats(`${fmt(ans)} ml`, [`${fmt(Math.round(a * 100))} ml`, `${fmtDec(Math.round(ans / 1000))} ml`, `${fmt(Math.round(ans * 10))} ml`], 3), "Basic",
      L(`1 ℓ = 1 000 ml: ×1000 → ${fmt(ans)} ml.`, `1 升 = 1000 毫升：×1000 → ${fmt(ans)} 毫升。`),
      L("ℓ ↔ ml", "升与毫升"));
  }

  /* ---- sg_rate5 Rate ---- */
  function qSgRate5() {
    const type = rnd(0, 5);
    if (type === 0) {
      const n = rnd(2, 9), r = rnd(3, 15), tot = n * r;
      return Q(L(`${n} items cost $${tot}. The cost per item is`, `${n} 个共 ${tot} 元，每个的价格是`),
        pos(r, 8), "Basic", L(`${tot} ÷ ${n} = $${r} per item.`, `${tot}÷${n}=每 ${r} 元。`), L("Unit rate", "单位率"));
    }
    if (type === 1) {
      const r = rnd(3, 12), t = rnd(3, 9), tot = r * t;
      return Q(L(`A tap runs at ${r} ℓ per minute for ${t} minutes. Total water:`, `水龙头每分钟 ${r} 升，流 ${t} 分钟，共进水`),
        pos(tot, 15), "Basic", L(`${r} × ${t} = ${tot} ℓ.`, `${r}×${t}=${tot} 升。`), L("Total from rate", "由率求总量"));
    }
    if (type === 2) {
      const r = rnd(4, 15), t = rnd(3, 8), tot = r * t;
      return Q(L(`${tot} pages are printed in ${t} minutes. The rate is`, `${t} 分钟打印 ${tot} 页，速率是`),
        cats(`${r} pages/min`, [`${tot} pages/min`, `${Math.max(1, r - 1)} pages/min`, `${r * 2} pages/min`], 3), "Intermediate",
        L(`${tot} ÷ ${t} = ${r} pages/min.`, `${tot}÷${t}=${r} 页/分。`), L("Find the rate", "求率"));
    }
    if (type === 3) {
      const r = rnd(3, 12), n = rnd(3, 9), tot = r * n;
      return Q(L(`At ${r} pages per minute, printing ${tot} pages takes`, `每分钟 ${r} 页，打印 ${tot} 页需要`),
        pos(n, 4), "Basic", L(`${tot} ÷ ${r} = ${n} min.`, `${tot}÷${r}=${n} 分钟。`), L("Time from rate", "由率求时间"));
    }
    if (type === 4) {
      const r = rnd(4, 12), n = rnd(3, 9), tot = r * n;
      return Q(L(`A car uses fuel at ${r} km per litre. On ${n} litres it travels`, `汽车每升油行 ${r} 千米，${n} 升可行`),
        pos(tot, 12), "Basic", L(`${r} × ${n} = ${tot} km.`, `${r}×${n}=${tot} 千米。`), L("Distance from rate", "由率求路程"));
    }
    const r1 = rnd(2, 6), n2 = rnd(2, 6), r2 = r1 + pick([-1, 1, 2]);
    if (r2 < 1) return qSgRate5();
    const tot = n2 * r2, per = tot / n2;
    return Q(L(`Shop A sells pens at $${r1} each. Shop B sells ${n2} pens for $${tot}. Which is cheaper per pen?`, `A 店每支笔 ${r1} 元；B 店 ${n2} 支共 ${tot} 元。哪家的单支更便宜？`),
      cats(r2 > r1 ? L("Shop A", "A 店") : L("Shop B", "B 店"), [L("Shop A", "A 店"), L("Shop B", "B 店"), L("They cost the same", "一样贵")], 3), "Challenge",
      L(`Shop B: ${tot} ÷ ${n2} = $${per} per pen vs $${r1} — ${r2 > r1 ? "Shop A" : "Shop B"} is cheaper.`, `B 店：${tot}÷${n2}=每支 ${per} 元，对比 ${r1} 元 —— ${r2 > r1 ? "A 店" : "B 店"}更便宜。`),
      L("Compare rates", "比较率"));
  }

  /* ---- sg_tri5 三角形面积 ---- */
  function qSgTri5() {
    const type = rnd(0, 5);
    if (type === 0) {
      const b = 2 * rnd(2, 10), h = rnd(2, 12), ans = b * h / 2;
      return Q(L(`A triangle has base ${b} cm and height ${h} cm. Its area is`, `三角形底 ${b} 厘米、高 ${h} 厘米，面积是`),
        pos(ans, 12), "Basic", L(`½ × ${b} × ${h} = ${ans} cm².`, `½×${b}×${h}=${ans} 厘米²。`), L("Area formula", "面积公式"));
    }
    if (type === 1) {
      const h = rnd(3, 12), b = 2 * rnd(2, 7), A = b * h / 2;
      return Q(L(`A triangle has area ${A} cm² and height ${h} cm. Its base is`, `三角形面积 ${A} 厘米²、高 ${h} 厘米，底是`),
        pos(b, 8), "Intermediate", L(`Base = 2 × ${A} ÷ ${h} = ${b} cm.`, `底 = 2×${A}÷${h}=${b} 厘米。`), L("Missing base", "求底"));
    }
    if (type === 2) {
      const l = rnd(3, 12), w = 2 * rnd(1, 5), ans = l * w / 2;
      return Q(L(`A triangle shares a base and height with a ${l} cm × ${w} cm rectangle. Its area is`, `三角形与 ${l}×${w} 厘米的长方形同底同高，面积是`),
        pos(ans, 10), "Basic", L(`Half of ${l} × ${w} = ${ans} cm².`, `${l}×${w} 的一半=${ans} 厘米²。`), L("Half of a rectangle", "长方形的一半"));
    }
    if (type === 3) {
      const a = rnd(3, 12), c = 2 * rnd(2, 6), ans = a * c / 2;
      return Q(L(`A right-angled triangle has legs ${a} cm and ${c} cm. Its area is`, `直角三角形两条直角边为 ${a} 与 ${c} 厘米，面积是`),
        pos(ans, 12), "Basic", L(`½ × ${a} × ${c} = ${ans} cm².`, `½×${a}×${c}=${ans} 厘米²。`), L("Right-angled triangle", "直角三角形"));
    }
    if (type === 4) {
      const l = rnd(4, 10), w = rnd(3, 8), th = 2 * rnd(1, 3), ans = l * w + l * th / 2;
      return Q(L(`A figure has a ${l} × ${w} cm rectangle with a triangle on top (base ${l}, height ${th}). Total area?`, `图形由 ${l}×${w} 厘米² 长方形与顶上三角形（底 ${l}、高 ${th}）组成，总面积？`),
        pos(ans, 15), "Tricky", L(`${l * w} + ½ × ${l} × ${th} = ${l * w} + ${l * th / 2} = ${ans} cm².`, `${l * w}+½×${l}×${th}=${l * w}+${l * th / 2}=${ans} 厘米²。`), L("Composite figure", "组合图形"));
    }
    const b = rnd(3, 10), h = 2 * rnd(1, 4), A1 = b * h / 2, A2 = 2 * b * h / 2;
    return Q(L(`A triangle's base is doubled (height unchanged). How many times larger is the area?`, `三角形底变为 2 倍（高不变），面积变为几倍？`),
      cats("2", ["4", "3", "1/2"], 3), "Tricky", L(`Area = ½bh; b → 2b doubles the area (${A1} → ${A2}).`, `面积=½bh；b→2b 面积翻倍（${A1}→${A2}）。`), L("Scaling", "倍数关系"));
  }

  /* ---- sg_vol5 体积 ---- */
  function qSgVol5() {
    const type = rnd(0, 5);
    if (type === 0) {
      const e = rnd(2, 12), ans = e * e * e;
      return Q(L(`The volume of a cube with edge ${e} cm is`, `棱长 ${e} 厘米的正方体体积是`),
        pos(ans, 20), "Basic", L(`${e} × ${e} × ${e} = ${ans} cm³.`, `${e}×${e}×${e}=${ans} 厘米³。`), L("Cube volume", "正方体体积"));
    }
    if (type === 1) {
      const l = rnd(2, 15), b = rnd(2, 12), h = rnd(2, 10), ans = l * b * h;
      return Q(L(`A box measures ${l} × ${b} × ${h} cm. Its volume is`, `盒子 ${l}×${b}×${h} 厘米，体积是`),
        pos(ans, 30), "Basic", L(`${l} × ${b} × ${h} = ${ans} cm³.`, `${l}×${b}×${h}=${ans} 厘米³。`), L("Cuboid volume", "长方体体积"));
    }
    if (type === 2) {
      const l = rnd(4, 15), b = rnd(3, 10), hh = rnd(2, 8), wh = rnd(1, hh - 1 + 1), ans = l * b * wh;
      return Q(L(`A tank ${l} × ${b} × ${hh} cm holds water ${wh} cm deep. The water's volume is`, `水箱 ${l}×${b}×${hh} 厘米，水深 ${wh} 厘米，水的体积是`),
        pos(ans, 25), "Intermediate", L(`${l} × ${b} × ${wh} = ${ans} cm³ (only the water depth matters).`, `${l}×${b}×${wh}=${ans} 厘米³（只看水深）。`), L("Water volume", "水的体积"));
    }
    if (type === 3) {
      const l = rnd(2, 4) * 10, b = rnd(2, 4) * 10, h = rnd(2, 4) * 10, V = l * b * h, Lp = V / 1000;
      return Q(L(`A tank ${l} × ${b} × ${h} cm is full. Its capacity is`, `水箱 ${l}×${b}×${h} 厘米装满，容量是`),
        cats(`${Lp} ℓ`, [`${V} ℓ`, `${V / 100} ℓ`, `${Lp * 1000} ℓ`], 3), "Intermediate",
        L(`${l} × ${b} × ${h} = ${fmt(V)} cm³ = ${Lp} ℓ.`, `${l}×${b}×${h}=${fmt(V)} 厘米³ = ${Lp} 升。`), L("Capacity", "容量"));
    }
    if (type === 4) {
      const x = rnd(1, 9), lz = x * 1000;
      return Q(L(`${x} ℓ = ? cm³`, `${x} 升 = ？厘米³`), pos(lz, 500), "Basic",
        L(`1 ℓ = 1000 cm³: ${x} × 1000 = ${fmt(lz)} cm³.`, `1 升=1000 厘米³：${x}×1000=${fmt(lz)} 厘米³。`), L("ℓ ↔ cm³", "升与厘米³"));
    }
    const l = rnd(2, 6), b = rnd(2, 6), h = rnd(2, 6), ans = l * b * h;
    return Q(L(`A solid is built from 1-cm cubes: ${l} × ${b} × ${h}. How many cubes?`, `用 1 厘米³ 小块搭 ${l}×${b}×${h} 的立体，需要多少块？`),
      pos(ans, 15), "Basic", L(`${l} × ${b} × ${h} = ${ans} cubes.`, `${l}×${b}×${h}=${ans} 块。`), L("Count unit cubes", "数单位正方体"));
  }

  /* ---- sg_ang5 角性质 ---- */
  function qSgAng5() {
    const type = rnd(0, 5);
    if (type === 0) {
      const a = rnd(20, 159), ans = 180 - a;
      return Q(L(`Angles on a straight line: one is ${a}°. The other is`, `一直线上两角：一个 ${a}°，另一个是`),
        pos(ans, 12), "Basic", L(`180 − ${a} = ${ans}°.`, `180−${a}=${ans}°。`), L("Straight line", "直线上的角"));
    }
    if (type === 1) {
      const a = rnd(40, 150), b = rnd(40, 150), c = 360 - a - b, flip = c <= 0 ? rnd(30, 150) : c;
      return Q(L(`Angles at a point: ${a}°, ${b}° and ${flip}°. What do the three angles sum to?`, `一点处三角：${a}°、${b}°、${flip}°，三个角总和是`),
        cats("360°", ["180°", "540°", "90°"], 3), "Basic", L("All angles around a point total 360°.", "绕一点所有角总和是 360°。"), L("At a point", "共顶点"));
    }
    if (type === 2) {
      const a = pick([35, 48, 57, 64, 72, 83, 96]);
      return Q(L(`Two lines cross; one angle is ${a}°. The vertically opposite angle is`, `两直线相交，一个角 ${a}°，它的对顶角是`),
        cats(`${a}°`, [`${180 - a}°`, `${a + 10}°`, `90°`], 3), "Basic",
        L(`Vertically opposite angles are equal: ${a}°.`, `对顶角相等：${a}°。`), L("Vertically opposite", "对顶角"));
    }
    if (type === 3) {
      const a = rnd(10, 80), ans = 90 - a;
      return Q(L(`Two angles meet at a right angle: one is ${a}°. The other is`, `直角处两角：一个 ${a}°，另一个是`),
        pos(ans, 8), "Basic", L(`90 − ${a} = ${ans}°.`, `90−${a}=${ans}°。`), L("Right angle pair", "直角处"));
    }
    if (type === 4) {
      const m = pick([2, 3, 4, 5, 8]), x = 180 / (m + 1);
      return Q(L(`Angles on a straight line are x° and ${m}x°. x = ?`, `一直线上两角 x° 与 ${m}x°，x = ？`),
        cats(`${x}°`, [`${x + 10}°`, `${x - 5}°`, `${180 - x}°`], 3), "Tricky",
        L(`${m + 1}x = 180 → x = ${x}°.`, `${m + 1}x = 180 → x = ${x}°。`), L("Unknown angles", "未知角"));
    }
    const a = rnd(30, 120), ans = 180 - a;
    return Q(L(`Two lines cross; one angle is ${a}°. Its adjacent angle on the straight line is`, `两直线相交，一个角 ${a}°，它在直线上的相邻角是`),
      pos(ans, 15), "Basic", L(`Adjacent on a line: 180 − ${a} = ${ans}°.`, `直线相邻：180−${a}=${ans}°。`), L("Adjacent angles", "相邻角"));
  }

  /* ---- sg_quads5 三角形与特殊四边形 ---- */
  function qSgQuads5() {
    const type = rnd(0, 5);
    if (type === 0) {
      const a = rnd(30, 80), b = rnd(30, 80), c = 180 - a - b;
      return Q(L(`Two angles of a triangle are ${a}° and ${b}°. The third is`, `三角形两角 ${a}° 与 ${b}°，第三个角是`),
        pos(c, 10), "Basic", L(`180 − ${a} − ${b} = ${c}°.`, `180−${a}−${b}=${c}°。`), L("Angle sum", "内角和"));
    }
    if (type === 1) {
      const v = 2 * rnd(22, 42), base = (180 - v) / 2;
      return Q(L(`An isosceles triangle has vertex angle ${v}°. Each base angle is`, `等腰三角形顶角 ${v}°，每个底角是`),
        pos(base, 10), "Intermediate", L(`(180 − ${v}) ÷ 2 = ${base}°.`, `(180−${v})÷2=${base}°。`), L("Isosceles", "等腰"));
    }
    if (type === 2) {
      const bx = rnd(36, 70), v = 180 - 2 * bx;
      return Q(L(`An isosceles triangle has base angles ${bx}°. The vertex angle is`, `等腰三角形底角 ${bx}°，顶角是`),
        pos(v, 10), "Intermediate", L(`180 − 2 × ${bx} = ${v}°.`, `180−2×${bx}=${v}°。`), L("Isosceles", "等腰"));
    }
    if (type === 3) {
      const a = rnd(12, 78), ans = 90 - a;
      return Q(L(`A right-angled triangle has angles 90° and ${a}°. The third angle is`, `直角三角形两角 90° 与 ${a}°，第三个角是`),
        pos(ans, 8), "Basic", L(`180 − 90 − ${a} = ${ans}°.`, `180−90−${a}=${ans}°。`), L("Right-angled triangle", "直角三角形"));
    }
    if (type === 4) {
      const s = rnd(4, 12), P = 4 * s;
      return Q(L(`A rhombus has perimeter ${P} cm. Each side is`, `菱形周长 ${P} 厘米，每条边是`),
        pos(s, 5), "Basic", L(`All sides equal: ${P} ÷ 4 = ${s} cm.`, `四边相等：${P}÷4=${s} 厘米。`), L("Rhombus", "菱形"));
    }
    const a = rnd(40, 130), ans = 180 - a;
    return Q(L(`In a parallelogram, one angle is ${a}°. Its adjacent angle is`, `平行四边形一个角 ${a}°，它的相邻角是`),
      pos(ans, 12), "Intermediate", L(`Adjacent angles: 180 − ${a} = ${ans}°.`, `相邻角互补：180−${a}=${ans}°。`), L("Parallelogram", "平行四边形"));
  }

  /* ---- sg_fract6 分数除法 ---- */
  function qSgFract6() {
    const type = rnd(0, 5);
    if (type === 0) {
      const q = rnd(2, 6), p = rnd(1, q - 1), n = rnd(2, 6), ans = fracStr(p, q * n);
      return Q(L(`${p}/${q} ÷ ${n} = ?`, `${p}/${q} ÷ ${n} = ？`),
        cats(ans, [fracStr(p * n, q), `${p}/${q}`, fracStr(p, q * n + q)], 3), "Basic",
        L(`Split into ${n} equal parts: ${p}/${q * n} = ${ans}.`, `分成 ${n} 等份：${p}/${q * n} = ${ans}。`),
        L("Fraction ÷ whole", "分数÷整数"));
    }
    if (type === 1) {
      const n = rnd(2, 5), p = rnd(1, 3), q = p + rnd(1, 3), ans = fracStr(n * q, p);
      return Q(L(`${n} ÷ ${p}/${q} = ?`, `${n} ÷ ${p}/${q} = ？`),
        cats(ans, [fracStr(n * p, q), fracStr(n, q), String(n * q), String(n + p), fracStr(n * q, p + 1)], 4), "Intermediate",
        L(`How many ${p}/${q} fit in ${n}? ${n} × ${q}/${p} = ${ans}.`, `${n} 里有几个 ${p}/${q}？${n}×${q}/${p}=${ans}。`),
        L("Whole ÷ fraction", "整数÷分数"));
    }
    if (type === 2) {
      const q = rnd(2, 5), p = rnd(1, q - 1), s = rnd(2, 5), r = rnd(1, s - 1);
      const ans = fracStr(p * s, q * r);
      return Q(L(`${p}/${q} ÷ ${r}/${s} = ?`, `${p}/${q} ÷ ${r}/${s} = ？`),
        cats(ans, [fracStr(p * r, q * s), fracStr(p + r, q + s), fracStr(q * r, p * s)], 3), "Intermediate",
        L(`Flip the divisor: ${p}/${q} × ${s}/${r} = ${ans}.`, `除数颠倒：${p}/${q} × ${s}/${r} = ${ans}。`),
        L("Fraction ÷ fraction", "分数÷分数"));
    }
    if (type === 3) {
      const q = pick([2, 3, 4]), p = pick([1, 3]), n = rnd(4, 8), ans = fracStr(p, q * n);
      return Q(L(`${p}/${q} ℓ of juice is shared equally among ${n} cups. Each cup gets`, `${p}/${q} 升果汁平均倒进 ${n} 个杯子，每杯`),
        cats(ans, [fracStr(p * n, q), fracStr(n, p * q), fracStr(p, q) + " ℓ"], 3), "Intermediate",
        L(`${p}/${q} ÷ ${n} = ${ans} ℓ.`, `${p}/${q} ÷ ${n} = ${ans} 升。`),
        L("Division word problem", "除法应用"));
    }
    if (type === 4) {
      const w = rnd(2, 5), r = pick([2, 3, 4]), ans = w * r;
      return Q(L(`How many ${r === 2 ? "1/2" : r === 3 ? "1/3" : "1/4"}-cups fill ${w} whole cups?`, `${r === 2 ? "1/2" : r === 3 ? "1/3" : "1/4"} 杯的量，能倒满 ${w} 整杯几次？`),
        pos(ans, 4), "Intermediate", L(`${w} ÷ 1/${r} = ${w} × ${r} = ${ans}.`, `${w} ÷ 1/${r} = ${w}×${r} = ${ans}。`), L("Counting parts", "数份数"));
    }
    const n = rnd(2, 5), d = rnd(2, 6), k = rnd(3, 8), ans = fracStr(n, d * k);
    return Q(L(`A ribbon ${n}/${d} m long is cut into ${k} equal pieces. Each piece is`, `一根 ${n}/${d} 米的丝带剪成 ${k} 等份，每份`),
      cats(ans, [fracStr(n * k, d), fracStr(d, n * k), fracStr(n, d) + " m"], 3), "Intermediate",
      L(`${n}/${d} ÷ ${k} = ${n}/${d * k} = ${ans} m.`, `${n}/${d} ÷ ${k} = ${n}/${d * k} = ${ans} 米。`),
      L("Division word problem", "除法应用"));
  }

  /* ---- sg_pct6 百分数应用 ---- */
  function qSgPct6() {
    const type = rnd(0, 5);
    if (type === 0) {
      const p = pick([10, 20, 25, 50]), k = rnd(2, 9), part = p * k, whole = 100 * k;
      return Q(L(`${part} is ${p}% of which number?`, `${part} 是哪个数的 ${p}%？`),
        pos(whole, 40), "Intermediate",
        L(`${p}% = ${p}/100 → whole = ${part} × ${100 / p} = ${whole}.`, `${p}%=${p}/100 → 整体 = ${part}×${100 / p} = ${whole}。`),
        L("Find the whole", "求整体"));
    }
    if (type === 1 || type === 2) {
      const p = pick([10, 20, 25, 50]), base = { 10: 10, 20: 5, 25: 4, 50: 2 }[p], orig = rnd(2, 25) * base, ch = orig * p / 100, nv = orig + ch;
      return Q(L(`A price of $${orig} increases by ${p}%. The new price is`, `价格 ${orig} 元上涨 ${p}%，新价格是`),
        pos(nv, 15), "Basic",
        L(`Increase = ${orig} × ${p}% = ${ch}; new = ${orig + ch}.`, `增加=${orig}×${p}%=${ch}；新=${orig + ch} 元。`),
        L("Percentage increase", "百分数增加"));
    }
    if (type === 3) {
      const p = pick([10, 20, 25, 50]), base = { 10: 10, 20: 5, 25: 4, 50: 2 }[p], a = rnd(2, 12) * base, b = a + a * p / 100;
      return Q(L(`A price rises from $${a} to $${b}. The percentage increase is`, `价格从 ${a} 元涨到 ${b} 元，涨幅是`),
        cats(`${p}%`, [`${p + 5}%`, `${Math.max(1, p - 5)}%`, `${2 * p}%`], 3), "Intermediate",
        L(`Change = ${b - a}; ÷ original ${a} = ${p}%.`, `变化=${b - a}；÷原价 ${a} = ${p}%。`),
        L("Percentage change", "变化百分率"));
    }
    if (type === 4) {
      const d = pick([20, 25, 50]), m = rnd(2, 20), orig = d === 20 ? 5 * m : d === 25 ? 4 * m : 2 * m, pay = orig - d * orig / 100;
      return Q(L(`After a ${d}% discount a bag costs $${pay}. The original price was`, `书包打折（${d}% off）后是 ${pay} 元，原价是`),
        pos(orig, 30), "Intermediate",
        L(`Paid ${(100 - d)}% = ${pay} → original = ${pay} ÷ ${(100 - d)}% = $${orig}.`, `现价占 ${100 - d}%=${pay} → 原价=${pay}÷${100 - d}%=${orig} 元。`),
        L("Reverse percentage", "反求原价"));
    }
    const p = pick([10, 20, 25, 50]), k = rnd(2, 9), orig = 100 * k, nv = orig + orig * p / 100;
    return Q(L(`After a ${p}% increase an amount is $${nv}. The original amount was`, `增加 ${p}% 后是 ${nv} 元，原来是`),
      pos(orig, 40), "Tricky",
      L(`New = (100 + ${p})% of original → original = ${nv} ÷ ${(100 + p) / 100} = $${orig}.`, `新 = 原×(100+${p})% → 原 = ${nv}÷${(100 + p) / 100} = ${orig} 元。`),
      L("Undo an increase", "抵消增加"));
  }

  /* ---- sg_alg6 代数 ---- */
  function qSgAlg6() {
    const type = rnd(0, 5);
    if (type === 0) {
      const c1 = rnd(2, 7), c2 = rnd(2, 7), ans = `${c1 + c2}a`;
      return Q(L(`Simplify ${c1}a + ${c2}a`, `化简 ${c1}a + ${c2}a`),
        cats(ans, [`${c1 * c2}a`, `${c1 + c2 + 1}a`, `${c1 + c2 - 1 || c1 + c2 + 2}a`], 3), "Basic",
        L(`Same letter: ${c1} + ${c2} = ${c1 + c2} → ${ans}.`, `同类项：${c1}+${c2}=${c1 + c2} → ${ans}。`),
        L("Simplify", "化简"));
    }
    if (type === 1) {
      const c = rnd(2, 9);
      return Q(L(`“${c} × a” is written as`, `“${c} × a” 写作`),
        cats(`${c}a`, [`${c} + a`, `a${c}`, `${c}/a`], 3), "Basic",
        L(`A number before the letter means multiply: ${c}a.`, `字母前的数表示乘：${c}a。`),
        L("Notation", "记法"));
    }
    if (type === 2) {
      const c = rnd(2, 5), a = rnd(3, 9), n = rnd(1, 9), ans = c * a - n;
      return Q(L(`If a = ${a}, then ${c}a − ${n} = ?`, `若 a = ${a}，则 ${c}a − ${n} = ？`),
        pos(ans, 8), "Basic", L(`${c}a = ${c * a}; ${c * a} − ${n} = ${ans}.`, `${c}a=${c * a}；${c * a}−${n}=${ans}。`), L("Substitution", "代入"));
    }
    if (type === 3) {
      const x = rnd(2, 20), c = rnd(2, 12), s = x + c;
      return Q(L(`Solve x + ${c} = ${s}`, `解方程 x + ${c} = ${s}`),
        pos(x, 6), "Basic", L(`x = ${s} − ${c} = ${x}.`, `x = ${s}−${c} = ${x}。`), L("Simple equations", "简单方程"));
    }
    if (type === 4) {
      const m = rnd(3, 9);
      return Q(L(`A shelf has m books; 5 more are added. Now there are`, `书架上有 m 本书，又放上 5 本，现在有`),
        cats(`m + 5`, [`5m`, `m − 5`, `${m + 5}`], 3), "Basic",
        L(`5 MORE means add: m + 5.`, `多 5 本是加：m+5。`), L("Expressions", "代数式"));
    }
    const d = pick([2, 3, 4, 5]), a = d * rnd(2, 9), q = a / d;
    return Q(L(`If a = ${a}, then a ÷ ${d} = ?`, `若 a = ${a}，则 a ÷ ${d} = ？`),
      pos(q, 5), "Basic", L(`${a} ÷ ${d} = ${q}.`, `${a}÷${d}=${q}。`), L("Substitution", "代入"));
  }

  /* ---- sg_circle6 圆 ---- */
  function qSgCircle6() {
    const type = rnd(0, 5);
    if (type === 0) {
      const d = pick([7, 14, 21, 28]), C = 22 * d / 7;
      return Q(L(`A circle has diameter ${d} cm. Its circumference (π = 22/7) is`, `圆直径 ${d} 厘米，周长（π=22/7）是`),
        pos(C, 15), "Basic", L(`C = 22/7 × ${d} = ${C} cm.`, `C = 22/7 × ${d} = ${C} 厘米。`), L("Circumference", "圆周长"));
    }
    if (type === 1) {
      const r = pick([7, 14, 21]), A = 22 / 7 * r * r;
      return Q(L(`A circle has radius ${r} cm. Its area (π = 22/7) is`, `圆半径 ${r} 厘米，面积（π=22/7）是`),
        pos(A, 30), "Basic", L(`22/7 × ${r}² = ${A} cm².`, `22/7 × ${r}² = ${A} 厘米²。`), L("Circle area", "圆面积"));
    }
    if (type === 2) {
      const r = rnd(2, 10), A = Math.round(3.14 * r * r * 100) / 100;
      const alt1 = Math.round(3.14 * r * 100) / 100, alt2 = Math.round(r * r * 100) / 100, alt3 = Math.round(3.14 * r * r / 2 * 100) / 100;
      return Q(L(`A circle has radius ${r} cm. Using π = 3.14, its area is`, `圆半径 ${r} 厘米，用 π=3.14，面积是`),
        cats(`${fmtDec(A)} cm²`, [`${fmtDec(alt1)} cm²`, `${fmtDec(alt2)} cm²`, `${fmtDec(alt3)} cm²`], 3), "Intermediate",
        L(`3.14 × ${r} × ${r} = ${fmtDec(A)} cm².`, `3.14×${r}×${r}=${fmtDec(A)} 厘米²。`), L("Area with 3.14", "用 3.14 求面积"));
    }
    if (type === 3) {
      const r = pick([4, 6, 8, 10]), A = Math.round(3.14 * r * r / 4 * 100) / 100;
      return Q(L(`A quarter circle has radius ${r} cm. Using π = 3.14, its area is`, `四分之一圆半径 ${r} 厘米，用 π=3.14，面积是`),
        cats(`${fmtDec(A)} cm²`, [`${fmtDec(A * 2)} cm²`, `${fmtDec(A * 4)} cm²`, `${r * r} cm²`], 3), "Intermediate",
        L(`Full area = 3.14 × ${r * r} = ${fmtDec(3.14 * r * r)}; quarter = ${fmtDec(A)} cm².`, `整圆 = 3.14×${r * r}=${fmtDec(3.14 * r * r)}；四分之一 = ${fmtDec(A)} 厘米²。`),
        L("Quarter circle", "四分之一圆"));
    }
    if (type === 4) {
      const r = pick([7, 14]), P = 22 * r / 7 + 2 * r;
      return Q(L(`A semicircle has radius ${r} cm. Its outline/total perimeter (π = 22/7) is`, `半圆半径 ${r} 厘米，总周长（π=22/7）是`),
        pos(P, 15), "Tricky",
        L(`Half circle arc = 22/7 × ${r} = ${22 * r / 7} cm, plus the diameter 2r = ${2 * r}: total ${P} cm.`, `半圆弧 = 22/7×${r} = ${22 * r / 7} 厘米，加直径 ${2 * r}：共 ${P} 厘米。`),
        L("Semicircle perimeter", "半圆周长"));
    }
    const r = rnd(2, 12), d = 2 * r;
    return Q(L(`A circle has radius ${r} cm. Its diameter is`, `圆半径 ${r} 厘米，直径是`),
      cats(`${d} cm`, [`${r} cm`, `${r * r} cm`, `${r / 2} cm`], 3), "Basic", L(`d = 2r = ${d} cm.`, `d = 2r = ${d} 厘米。`), L("Radius ↔ diameter", "半径与直径"));
  }

  /* ---- sg_vol6 体积反推 ---- */
  function qSgVol6() {
    const type = rnd(0, 5);
    if (type === 0 || type === 5) {
      const l = rnd(2, 9), b = rnd(2, 9), h = rnd(2, 9), V = l * b * h, word = type === 5;
      return Q(word
        ? L(`Water fills a tank to ${V} cm³. The tank is ${l} × ${b} cm across. The water depth is`, `水箱底面 ${l}×${b} 厘米，装水 ${V} 厘米³，水深是`)
        : L(`A cuboid has volume ${V} cm³, length ${l} cm and breadth ${b} cm. Its height is`, `长方体体积 ${V} 厘米³、长 ${l} 厘米、宽 ${b} 厘米，高是`),
        pos(h, 5), "Intermediate",
        L(`${V} ÷ (${l} × ${b}) = ${V} ÷ ${l * b} = ${h} cm.`, `${V}÷(${l}×${b})=${V}÷${l * b}=${h} 厘米。`),
        L("Missing edge", "求缺棱"));
    }
    if (type === 1) {
      const e = rnd(2, 12), V = e * e * e;
      return Q(L(`A cube has volume ${V} cm³. Its edge is`, `正方体体积 ${V} 厘米³，棱长是`),
        pos(e, 4), "Basic", L(`${e} × ${e} × ${e} = ${V}, so edge = ${e} cm.`, `${e}×${e}×${e}=${V}，棱长 ${e} 厘米。`), L("Cube edge", "正方体棱长"));
    }
    if (type === 2) {
      const A = rnd(3, 12), h = rnd(2, 8), V = A * h;
      return Q(L(`A cuboid has volume ${V} cm³ and base area ${A} cm². Its height is`, `长方体体积 ${V} 厘米³、底面积 ${A} 厘米²，高是`),
        pos(h, 5), "Intermediate", L(`${V} ÷ ${A} = ${h} cm.`, `${V}÷${A}=${h} 厘米。`), L("Height from base area", "由底面积求高"));
    }
    const h = rnd(2, 8), A = rnd(3, 12), V = A * h;
    return Q(L(`A cuboid has volume ${V} cm³ and height ${h} cm. The area of its base is`, `长方体体积 ${V} 厘米³、高 ${h} 厘米，底面积是`),
      pos(A, 6), "Intermediate", L(`${V} ÷ ${h} = ${A} cm².`, `${V}÷${h}=${A} 厘米²。`), L("Face area", "求面的面积"));
  }

  /* ---- sg_ang6 组合图形未知角 ---- */
  function qSgAng6() {
    const type = rnd(0, 5);
    if (type === 0) {
      const a = rnd(40, 130), ans = 180 - a;
      return Q(L(`In parallelogram ABCD, ∠A = ${a}°. Its adjacent angle ∠B = ?`, `平行四边形 ABCD 中 ∠A = ${a}°，相邻角 ∠B = ？`),
        pos(ans, 10), "Intermediate", L(`Adjacent angles of a parallelogram add to 180°: ${ans}°.`, `平行四边形相邻角互补：180−${a}=${ans}°。`), L("Parallelogram", "平行四边形"));
    }
    if (type === 1) {
      const a = rnd(40, 130), ans = 180 - a;
      return Q(L(`In trapezium ABCD, AB ∥ CD and ∠A = ${a}°. The co-interior angle ∠D on the same leg is`, `梯形 ABCD 中 AB ∥ CD，∠A = ${a}°，同腰上的同侧内角 ∠D 是`),
        pos(ans, 10), "Intermediate", L(`Co-interior angles: 180 − ${a} = ${ans}°.`, `同侧内角：180−${a}=${ans}°。`), L("Trapezium", "梯形"));
    }
    if (type === 2) {
      const r = pick([[1, 2, 3], [1, 3, 5], [2, 3, 4], [1, 4, 10], [2, 5, 8], [3, 6, 9], [1, 2, 6], [4, 6, 10]]);
      const units = 180 / (r[0] + r[1] + r[2]), x = units * r[2];
      return Q(L(`Three angles on a straight line are in the ratio ${r[0]} : ${r[1]} : ${r[2]}. The largest is`, `一直线上三个角的比是 ${r[0]}:${r[1]}:${r[2]}，最大的是`),
        pos(x, 8), "Tricky",
        L(`${r[0] + r[1] + r[2]} units = 180° → 1 unit = ${units}°; largest = ${r[2]} × ${units} = ${x}°.`, `${r[0] + r[1] + r[2]} 份 = 180° → 每份 ${units}°；最大 = ${r[2]}×${units}=${x}°。`),
        L("Straight line + ratio", "直线 + 比"));
    }
    if (type === 3) {
      const f = pick([60, 90, 120, 150]), x = (360 - f) / 3, v = 2 * x;
      return Q(L(`Angles at a point are 2x°, x° and ${f}°. The value of 2x is`, `一点处三角为 2x°、x° 与 ${f}°，2x 的值是`),
        cats(`${v}°`, [`${x}°`, `${v + 30}°`, `${f}°`], 3), "Tricky",
        L(`3x = 360 − ${f} = ${360 - f} → x = ${x}°, so 2x = ${v}°.`, `3x = 360−${f} = ${360 - f} → x = ${x}°，2x = ${v}°。`),
        L("Point + unknowns", "点 + 未知数"));
    }
    if (type === 4) {
      const a = rnd(40, 90), b = rnd(40, 90), s = a + b;
      const c = rnd(50, Math.min(140, 360 - s - 50)), x = 360 - s - c;
      return Q(L(`A quadrilateral has angles ${a}°, ${b}°, ${c}° and x°. x = ?`, `四边形三角为 ${a}°、${b}°、${c}° 与 x°，x = ？`),
        pos(x, 12), "Tricky",
        L(`Quadrilateral sum = 360°: x = 360 − ${a} − ${b} − ${c} = ${x}°.`, `四边形内角和 360°：x = 360−${a}−${b}−${c} = ${x}°。`),
        L("Quadrilateral", "四边形"));
    }
    const a = rnd(30, 120), ans = 180 - a;
    return Q(L(`Angles on a straight line: one is ${a}°. The other is`, `一直线上两角：一个 ${a}°，另一个是`),
      pos(ans, 12), "Basic", L(`180 − ${a} = ${ans}°.`, `180−${a}=${ans}°。`), L("Straight line", "直线上的角"));
  }

  /* ---- 挂接到 TECHNIQUES ---- */
  const GEN = {
    sg_ratio5: qSgRatio5, sg_pct5: qSgPct5, sg_avg5: qSgAvg5, sg_speed5: qSgSpeed5,
    sg_num5: qSgNum5, sg_fract5: qSgFract5, sg_dec5: qSgDec5, sg_rate5: qSgRate5,
    sg_tri5: qSgTri5, sg_vol5: qSgVol5, sg_ang5: qSgAng5, sg_quads5: qSgQuads5,
    sg_fract6: qSgFract6, sg_pct6: qSgPct6, sg_alg6: qSgAlg6, sg_circle6: qSgCircle6,
    sg_vol6: qSgVol6, sg_ang6: qSgAng6
  };
  if (window.QGEN_SG_PART1) Object.keys(window.QGEN_SG_PART1).forEach(k => { GEN[k] = window.QGEN_SG_PART1[k]; });
  if (window.TECHNIQUES) {
    window.TECHNIQUES.forEach(t => {
      if (GEN[t.id]) t.qgen = function (n) { const out = []; for (let i = 0; i < (n || 6); i++) out.push(GEN[t.id]()); return out; };
    });
  }
})();
