/* 新加坡模块参数化出题（P4：数、因数倍数、模型法、小数） */
(function () {
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[rnd(0, a.length - 1)]; }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function opts(ans, make, n) { n = n || 4; const set = new Set([ans]); let g = 0; while (set.size < n && g++ < 400) { const d = make(); if (d !== ans) set.add(d); } let k = 1; while (set.size < n) { set.add(ans + k); k++; } const arr = shuffle([...set]).map(String); return { opts: arr, ans: arr.indexOf(String(ans)) }; }
  function cats(ans, pool, n) { n = n || 4; const set = new Set([String(ans)]); for (let i = 0; i < pool.length && set.size < n; i++) set.add(String(pool[i])); const arr = shuffle([...set]); return { opts: arr, ans: arr.indexOf(String(ans)) }; }
  function Q(q, optsObj, level, explain, point) { return Object.assign({ q, level: level || "Basic", explain, point: point || "" }, optsObj, { fig: null }); }
  function L(en, zh) { return window.LANG === "zh" ? zh : en; }
  function pos(ans, span) { return opts(ans, () => rnd(Math.max(0, ans - span), ans + span)); }
  function cope() { return pick([[2, 3], [2, 5], [2, 7], [2, 9], [3, 4], [3, 5], [3, 7], [3, 8], [4, 5], [4, 7], [5, 6], [5, 7]]); }
  const fmt = n => String(n).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { const t = a % b; a = b; b = t; } return a; }
  function fracStr(n, d) { if (d === 1) return String(n); const g = gcd(n, d); n /= g; d /= g; return d === 1 ? String(n) : n + "/" + d; }
  function fmtDec(x) { return String(parseFloat(Number(x).toPrecision(12))); }
  function decOpts(ans, dp) {
    const step = Math.pow(10, -(dp || 1));
    const cands = [1, -1, 2, -2, 3, -3, 5, -5].map(m => fmtDec(Math.max(0, Math.round((ans + m * step) * 100) / 100)));
    return cats(fmtDec(ans), cands, 4);
  }

  /* ---- sg_num4 Whole Numbers to 100 000 ---- */
  function qSgNum4() {
    const type = rnd(0, 5);
    const N = rnd(1, 9) * 10000 + rnd(0, 9) * 1000 + rnd(0, 9) * 100 + rnd(0, 9) * 10 + rnd(0, 9);
    if (type === 0) {
      let M;
      do { M = rnd(10000, 99999); } while (new Set(String(M)).size < 5 || String(M).includes("0"));
      const p = pick([1, 2, 3]), pl = ["ones", "tens", "hundreds", "thousands", "ten-thousands"][p], d = Math.floor(M / Math.pow(10, p)) % 10, v = d * Math.pow(10, p);
      return Q(L(`In ${fmt(M)}, what is the value of the digit ${d}?`, `${fmt(M)} 中，数字 ${d} 表示多少？`),
        cats(fmt(v), [d, d * 10, d * 100, d * 1000, d * 10000].filter(x => x !== v).map(fmt), 4), p >= 3 ? "Intermediate" : "Basic",
        L(`That digit sits in the ${pl} place: ${d} × ${Math.pow(10, p)} = ${fmt(v)}.`, `它在${["个位", "十位", "百位", "千位", "万位"][p]}上：${d}×${Math.pow(10, p)}=${fmt(v)}。`),
        L("Place value", "位值"));
    }
    if (type === 1) {
      const r = pick([100, 1000]), w = pick([2, 6]), d = r === 1000 ? Math.floor((N % 10000) / 1000) * 1000 + rnd(0, 9) * 100 : rnd(0, 9) * 100 + rnd(0, 9) * 10 + rnd(0, 9);
      const M = Math.floor(N / r) * r + w * r / 10, ans = Math.round(M / r) * r;
      return Q(L(`Round ${fmt(M)} to the nearest ${r === 1000 ? "thousand" : "hundred"}.`, `${fmt(M)} 精确到最近的${r === 1000 ? "千" : "百"}位是多少？`),
        pos(ans, r), "Basic",
        L(`Look at the next digit: ${w >= 5 ? "5 or more, round UP." : "less than 5, stay down."} Answer: ${fmt(ans)}.`, `看下一位：${w >= 5 ? "满 5，向上取整" : "不足 5，舍去"}。答案：${fmt(ans)}。`),
        L("Rounding", "近似数"));
    }
    if (type === 2) {
      let A = N, B = A + rnd(1, 9000); if (B > 99999 - 1) B = A + 12;
      return Q(L(`Which number is greater: ${fmt(A)} or ${fmt(B)}?`, `${fmt(A)} 和 ${fmt(B)} 哪个更大？`),
        cats(String(B), [String(A), String(B + rnd(100, 900))], 3), "Basic",
        L(`${fmt(B)} > ${fmt(A)}: compare from the ten-thousands digit.`, `${fmt(B)} > ${fmt(A)}，从万位比起。`),
        L("Compare numbers", "比大小"));
    }
    if (type === 3) {
      const k = pick([100, 250, 500, 1000]), a = rnd(1, 40) * 10, seq = [a, a + k, a + 2 * k, a + 3 * k], ans = a + 4 * k;
      return Q(L(`Find the next number: ${seq.map(fmt).join(", ")}, ……`, `按规律填数：${seq.map(fmt).join("、")}、……`),
        pos(ans, k * 2), "Basic",
        L(`The rule is +${k}: ${fmt(a + 3 * k)} + ${k} = ${fmt(ans)}.`, `规律是每次 +${k}：${fmt(a + 3 * k)}+${k}=${fmt(ans)}。`),
        L("Number pattern", "找规律"));
    }
    if (type === 4) {
      const thous = Math.floor(N / 1000), T = thous === 0 ? 1 : thous;
      return Q(L(`How many complete thousands are there in ${fmt(N)}?`, `${fmt(N)} 里有多少个完整的千？`),
        pos(T, 9), "Basic",
        L(`${fmt(N)} ÷ 1000 = ${T} remainder ${N % 1000}. There are ${T} complete thousands.`, `${fmt(N)}÷1000=${T} 余 ${N % 1000}，有 ${T} 个完整的千。`),
        L("Divide by place value", "位值除法"));
    }
    const r = pick([10, 100]), ans = Math.round(N / r) * r;
    return Q(L(`${fmt(N)} rounded to the nearest ${r === 100 ? "hundred" : "ten"} is`, `${fmt(N)} 精确到最近的${r === 100 ? "百" : "十"}位是`),
      pos(ans, r), "Basic",
      L(`${fmt(N)} ≈ ${fmt(ans)} (${r === 100 ? "hundreds" : "tens"} digit decides).`, `${fmt(N)}≈${fmt(ans)}。`),
      L("Rounding", "近似数"));
  }

  /* ---- sg_fact4 Factors & Multiples ---- */
  function qSgFact4() {
    const type = rnd(0, 5);
    if (type === 0) {
      const N = pick([12, 15, 18, 20, 24, 28, 30, 36, 40]), ds = [];
      for (let i = 1; i <= N; i++) if (N % i === 0) ds.push(i);
      return Q(L(`How many factors does ${N} have?`, `${N} 的因数有几个？`),
        pos(ds.length, 6), "Basic",
        L(`Factors of ${N}: ${ds.join(", ")} — ${ds.length} in total.`, `${N} 的因数：${ds.join("、")}，共 ${ds.length} 个。`),
        L("Count factors", "数因数"));
    }
    if (type === 1) {
      const cp = cope(), g = pick([2, 3, 4, 5, 6]), a = g * cp[0], b = g * cp[1];
      return Q(L(`What is the greatest common factor of ${a} and ${b}?`, `${a} 和 ${b} 的最大公因数是多少？`),
        pos(g, Math.max(8, g)), "Intermediate",
        L(`${a} = ${g} × ${cp[0]}, ${b} = ${g} × ${cp[1]}; ${cp[0]} and ${cp[1]} share no factor, so the GCF is ${g}.`, `${a}=${g}×${cp[0]}，${b}=${g}×${cp[1]}，${cp[0]}、${cp[1]} 互质，最大公因数=${g}。`),
        L("Common factor", "公因数"));
    }
    if (type === 2) {
      const m = pick([3, 4, 6, 7, 9]), k1 = rnd(3, 9), k2 = k1 + rnd(2, 5);
      return Q(L(`How many multiples of ${m} are there from ${fmt(m * k1)} to ${fmt(k2 * m)} (inclusive)?`, `从 ${fmt(m * k1)} 到 ${fmt(k2 * m)}，${m} 的倍数一共有多少个（含两端）？`),
        pos(k2 - k1 + 1, 6), "Intermediate",
        L(`${fmt(m * k1)} = ${m}×${k1} and is the first; the last is ${fmt(k2 * m)} = ${m}×${k2}. Count = ${k2} − ${k1} + 1 = ${k2 - k1 + 1}.`, `${fmt(m * k1)}=${m}×${k1}，末个=${m}×${k2}；个数=${k2}−${k1}+1=${k2 - k1 + 1} 个。`),
        L("Count multiples", "数倍数"));
    }
    if (type === 3) {
      const cp = cope(), a = cp[0] + 2, b = cp[1] + 2, gg = gcd(a, b), p = a * b / gg, s = 2 * p;
      return Q(L(`What are the first two common multiples of ${a} and ${b}?`, `${a} 和 ${b} 最小的两个公倍数是？`),
        cats(`${fmt(p)} and ${fmt(s)}`, [`${fmt(s)} and ${fmt(3 * p)}`, `2 and 4`, `${fmt(a * b)} and ${fmt(2 * a * b)}`, `${fmt(a)} and ${fmt(b)}`], 4), "Intermediate",
        L(`The lowest common multiple of ${a} and ${b} is ${p}${gg > 1 ? ` (${a} × ${b} ÷ ${gg})` : ""}; double it to get ${s}.`, `${a} 和 ${b} 的最小公倍数是 ${p}${gg > 1 ? `（${a}×${b}÷${gg}）` : ""}，再乘 2 得 ${s}。`),
        L("Common multiple", "公倍数"));
    }
    if (type === 4) {
      const N = pick([18, 24, 30, 36, 40, 45, 48]), df = [];
      for (let i = 2; i < N; i++) if (N % i === 0) df.push(i);
      const f = pick(df), pool = [];
      for (let x = 2; pool.length < 3 && x < N; x++) if (x !== f && N % x !== 0) pool.push(x);
      return Q(L(`Which of these is a factor of ${N}?`, `${N} 的因数是哪一个？`),
        cats(String(f), pool.map(String), 4), "Intermediate",
        L(`${N} ÷ ${f} = ${N / f} exactly, so ${f} is a factor; the others leave a remainder.`, `${N}÷${f}=${N / f}，正好整除，所以 ${f} 是 ${N} 的因数；其余都有余数。`),
        L("Factor check", "因数判断"));
    }
    const N = pick([24, 36, 48, 60, 72]), k = rnd(3, 6), M = N * k;
    return Q(L(`Which of these is a multiple of ${N}?`, `下面哪个是 ${N} 的倍数？`),
      cats(String(M), [M + 1, M - 1, M + 7, M - 3].filter(x => x % N !== 0).map(String), 4), "Basic",
      L(`${M} = ${N} × ${k}, so it is a multiple of ${N}.`, `${M}=${N}×${k}，所以是 ${N} 的倍数。`),
      L("Multiple check", "倍数判断"));
  }

  /* ---- sg_model4 Bar Model Method ---- */
  function qSgModel4() {
    const type = rnd(0, 5);
    if (type === 0) {
      const A = rnd(15, 60), more = rnd(5, 40), total = 2 * A + more;
      return Q(L(`Ali has $${A}. Ben has $${more} more than Ali. How much do they have altogether?`, `阿里有 ${A} 元，本比阿里多 ${more} 元。两人共有多少元？`),
        pos(total, 30), "Basic",
        L(`Ben = ${A} + ${more} = ${A + more}. Total = ${A} + ${A + more} = ${total}.`, `本=${A}+${more}=${A + more}；共 ${A}+${A + more}=${total} 元。`),
        L("Part-whole model", "部分-整体模型"));
    }
    if (type === 1) {
      const L1 = rnd(20, 80), d = rnd(5, 20), L2 = L1 - d;
      return Q(L(`A ribbon is ${L1} cm long. Another ribbon is ${d} cm shorter. How long is the shorter ribbon?`, `一根丝带长 ${L1} 厘米，另一根比它短 ${d} 厘米。短的有多少厘米？`),
        pos(L2, 25), "Basic",
        L(`${L1} − ${d} = ${L2} cm. The gap in the comparison model is ${d} cm.`, `${L1}−${d}=${L2} 厘米；比较模型中的差= ${d} 厘米。`),
        L("Comparison model", "比较模型"));
    }
    if (type === 2) {
      const s = rnd(5, 25), d = rnd(1, s), big = s + d, T = 2 * s + d;
      return Q(L(`Two numbers have a total of ${T} and a difference of ${d}. What is the larger number?`, `两个数的和是 ${T}，差是 ${d}。较大的数是多少？`),
        pos(big, 20), "Intermediate",
        L(`Larger = (total + difference) ÷ 2 = (${T} + ${d}) ÷ 2 = ${big}; smaller = ${s}.`, `大数=(和+差)÷2=(${T}+${d})÷2=${big}；小数=${s}。`),
        L("Units method", "份数法"));
    }
    if (type === 3) {
      const p = rnd(3, 9), k = pick([3, 4, 5]), total = p + k * p;
      return Q(L(`A pen costs $${p}. A book costs ${k} times as much. How much do one pen and one book cost altogether?`, `一支钢笔 ${p} 元，一本书的价钱是它的 ${k} 倍。一钢笔一本书共多少元？`),
        pos(total, 25), "Intermediate",
        L(`Book = ${p} × ${k} = ${k * p}. Total = ${p} + ${k * p} = ${total}.`, `书=${p}×${k}=${k * p} 元；共 ${total} 元。`),
        L("Model with units", "份数模型"));
    }
    if (type === 4) {
      const uV = rnd(3, 15), nU = pick([3, 4, 5, 6]), ans = uV * nU;
      return Q(L(`A bar is split into ${nU} equal units. Each unit is ${uV}. What is the whole bar?`, `一段长条分成了 ${nU} 个相等的份，每份是 ${uV}。整个长条是多少？`),
        pos(ans, 30), "Basic",
        L(`${nU} units × ${uV} = ${ans}.`, `${nU} 份×${uV}=${ans}。`),
        L("Units × count", "份数×每份"));
    }
    const k = rnd(3, 20), M = 4 * k, left = 3 * k;
    return Q(L(`Sam has $${M}. He spends one quarter of it. How much is left?`, `山姆有 ${M} 元，花掉四分之一，还剩多少元？`),
      pos(left, 30), "Intermediate",
      L(`1 unit = ${M} ÷ 4 = ${k} spent; left = 3 units = ${left}.`, `1 份=${M}÷4=${k} 元花掉；剩 3 份=${left} 元。`),
      L("Bar model + fraction", "线段图+分数"));
  }

  /* ---- sg_dec4 Decimals up to 2 d.p. ---- */
  function qSgDec4() {
    const type = rnd(0, 7);
    const A = rnd(10, 100) / 10, B = rnd(10, 100) / 10;
    if (type === 0) {
      const v = Math.round((A + B) * 10) / 10;
      return Q(L(`${A} + ${B} = ?`, `${A} + ${B} = ？`), decOpts(v, 1), "Basic",
        L(`Line up the decimal points: ${A} + ${B} = ${v}.`, `小数点对齐：${A}+${B}=${v}。`), L("Decimal addition", "小数加法"));
    }
    if (type === 1) {
      const v = Math.round((10 - B) * 10) / 10;
      return Q(L(`10 − ${B} = ?`, `10 − ${B} = ？`), decOpts(v, 1), "Basic",
        L(`Write 10 as 10.00 and subtract: = ${v}.`, `把 10 看作 10.00 再减：=${v}。`), L("Decimal subtraction", "小数减法"));
    }
    if (type === 2) {
      const k = rnd(2, 9), a = rnd(11, 30) / 10, v = Math.round(a * k * 10) / 10;
      return Q(L(`${a} × ${k} = ?`, `${a} × ${k} = ？`), decOpts(v, 1), "Basic",
        L(`${a}×10 = ${Math.round(a * 10)}; ${Math.round(a * 10)} × ${k} = ${Math.round(a * 10) * k}; back one decimal place → ${v}.`, `${a} 当 ${Math.round(a * 10)} 乘得 ${Math.round(a * 10) * k}；再点回一位小数 → ${v}。`),
        L("Decimal multiplication", "小数乘法"));
    }
    if (type === 3) {
      const cand = [rnd(10, 90) / 10, rnd(10, 90) / 10, rnd(10, 90) / 10, rnd(10, 90) / 10];
      const uniq = [...new Set(cand)];
      const ansv = Math.max(...uniq), ansvS = String(Math.round(ansv * 10) / 10);
      return Q(L(`Which of these decimals is the greatest? ${uniq.join(", ")}`, `${uniq.join("、")} 中哪个最大？`),
        cats(ansvS, uniq.filter(u => Math.round(u * 10) / 10 !== ansvS).map(String), Math.min(4, uniq.length)), "Intermediate",
        L(`Compare tenths first, then hundredths: the greatest is ${ansvS}.`, `先比十分位，再比百分位：最大的是 ${ansvS}。`),
        L("Compare decimals", "小数比较"));
    }
    if (type === 4) {
      const pay = 20, c = rnd(50, 180) / 10, ch = Math.round((pay - c) * 10) / 10;
      return Q(L(`You pay $20 for an item costing $${c}. How much change?`, `一件商品 ${c} 元，付 20 元，找零多少？`),
        decOpts(ch, 1), "Basic",
        L(`20.0 − ${c} = ${ch}.`, `20.0−${c}=${ch} 元。`), L("Money word problem", "购物找零"));
    }
    if (type === 6) {
      const N = rnd(1000, 9999) / 1000, which = pick([["whole number", 0], ["1 decimal place", 1], ["2 decimal places", 2]]);
      const p = Math.pow(10, which[1]), ans = Math.round(N * p) / p;
      return Q(L(`Round ${N} to the nearest ${which[0]}.`, `把 ${N} 精确到${which[1] === 0 ? "整数" : which[1] === 1 ? "十分位（0.1）" : "百分位（0.01）"}。`),
        cats(fmtDec(ans), [fmtDec(Math.floor(N * p) / p), fmtDec(Math.ceil(N * p) / p), fmtDec(ans + 1 / p), fmtDec(Math.max(0, ans - 1 / p)), fmtDec(ans + 0.1)], 4), "Basic",
        L(`Look at the next digit: ${N} → ${fmtDec(ans)}.`, `看下一位：${N} → ${fmtDec(ans)}。`),
        L("Rounding decimals", "小数取近似"));
    }
    if (type === 7) {
      const fr = pick([["1/2", "0.5"], ["1/4", "0.25"], ["3/4", "0.75"], ["1/5", "0.2"], ["3/5", "0.6"], ["3/10", "0.3"], ["7/100", "0.07"], ["9/1000", "0.009"]]);
      return Q(L(`${fr[0]} written as a decimal is`, `${fr[0]} 写成小数是`),
        cats(fr[1], ["0.5", "0.25", "0.75", "0.2", "0.6", "0.3", "0.07", "0.009"].filter(x => x !== fr[1]), 4), "Basic",
        L(`${fr[0]} = ${fr[1]}.`, `${fr[0]} = ${fr[1]}。`),
        L("Fraction ↔ decimal", "分数↔小数"));
    }
    const T1 = rnd(10, 40) / 10, T2 = rnd(10, 40) / 10, sum = Math.round((T1 + T2) * 10) / 10;
    return Q(L(`A ribbon measures ${T1} m and another ${T2} m. Total length (in m)?`, `两条丝带分别 ${T1} 米和 ${T2} 米，共多少米？`),
      decOpts(sum, 1), "Basic",
      L(`${T1} + ${T2} = ${sum} m.`, `${T1}+${T2}=${sum} 米。`), L("Decimal addition", "小数加法"));
  }

  /* ---- sg_fract4 分数：带分数、假分数、占一组、相关分数 ---- */
  function qSgFract4() {
    const type = rnd(0, 6);
    if (type === 0) {
      const w = rnd(2, 6), d = rnd(2, 9), n = rnd(1, d - 1), num = w * d + n;
      return Q(L(`${w} ${n}/${d} written as an improper fraction is`, `${w} ${n}/${d} 化成假分数是`),
        cats(`${num}/${d}`, [`${w * d}/${d}`, `${w + n}/${d}`, `${w * n + d}/${d}`], 3), "Basic",
        L(`${w} × ${d} + ${n} = ${num} → ${num}/${d}.`, `${w}×${d}+${n}=${num} → ${num}/${d}。`),
        L("Mixed → improper", "带分数→假分数"));
    }
    if (type === 1) {
      const d = rnd(2, 9), w = rnd(1, 5), n = rnd(1, d - 1), num = w * d + n;
      return Q(L(`${num}/${d} written as a mixed number is`, `${num}/${d} 化成带分数是`),
        cats(`${w} ${n}/${d}`, [`${w} ${n === 1 ? 2 : 1}/${d}`, `${w + 1} ${n}/${d}`, `${w > 1 ? w - 1 : w + 2} ${n}/${d}`], 4), "Basic",
        L(`${num} ÷ ${d} = ${w} remainder ${n} → ${w} ${n}/${d}.`, `${num}÷${d}=${w} 余 ${n} → ${w} ${n}/${d}。`),
        L("Improper → mixed", "假分数→带分数"));
    }
    if (type === 2) {
      const d = pick([2, 3, 4, 5, 6, 8]), k = rnd(2, 9), tot = d * k;
      return Q(L(`There are ${tot} sweets. What is 1/${d} of them?`, `共有 ${tot} 颗糖，1/${d} 是多少颗？`),
        pos(k, Math.max(4, k)), "Basic",
        L(`${tot} ÷ ${d} = ${k} sweets.`, `${tot}÷${d}=${k} 颗。`),
        L("Fraction of a set", "分数占一组"));
    }
    if (type === 3) {
      const d = pick([2, 3, 4, 5, 6, 8]), p = rnd(2, d - 1), k = rnd(2, 9), tot = d * k;
      return Q(L(`What is ${p}/${d} of ${tot}?`, `${tot} 的 ${p}/${d} 是多少？`),
        pos(p * k, Math.max(6, p * k)), "Basic",
        L(`${tot} ÷ ${d} = ${k} per part; ${p} parts = ${p * k}.`, `${tot}÷${d}=${k} 每份；${p} 份=${p * k}。`),
        L("Fraction of a set", "分数占一组"));
    }
    if (type === 4 || type === 5) {
      const pair = pick([[2, 4], [3, 6], [4, 8], [5, 10], [2, 6], [3, 9]]);
      const d1 = pair[0], d2 = pair[1], kk = d2 / d1;
      const a = rnd(1, d1 - 1);
      const add = type === 4;
      const cMax = add ? d2 - a * kk : a * kk - 1;
      if (cMax >= 1) {
        const c = rnd(1, cMax);
        const t = add ? a * kk + c : a * kk - c;
        return Q(L(`${a}/${d1} ${add ? "+" : "−"} ${c}/${d2} = ?`, `${a}/${d1} ${add ? "+" : "−"} ${c}/${d2} = ？`),
          cats(fracStr(t, d2), [fracStr(add ? a + c : Math.abs(a - c), d2), fracStr(t + 1, d2), fracStr(t, d1 + d2)], 3), "Intermediate",
          L(`Rename ${a}/${d1} = ${a * kk}/${d2}; ${a * kk} ${add ? "+" : "−"} ${c} = ${t} → ${fracStr(t, d2)}.`, `通分：${a}/${d1} = ${a * kk}/${d2}；${a * kk} ${add ? "+" : "−"} ${c} = ${t} → ${fracStr(t, d2)}。`),
          L(add ? "Related fractions +" : "Related fractions −", add ? "相关分数加法" : "相关分数减法"));
      }
      return qSgFract4();
    }
    const d = rnd(3, 9), n = rnd(1, d - 1);
    return Q(L(`1 − ${n}/${d} = ?`, `1 − ${n}/${d} = ？`),
      cats(fracStr(d - n, d), [fracStr(n, d), fracStr(d - n, d + 1), fracStr(d, d - n)], 3), "Intermediate",
      L(`1 = ${d}/${d}; ${d}/${d} − ${n}/${d} = ${d - n}/${d} = ${fracStr(d - n, d)}.`, `1 = ${d}/${d}；${d}/${d}−${n}/${d}=${d - n}/${d}=${fracStr(d - n, d)}。`),
      L("Subtract from one whole", "从整体中减去"));
  }

  /* ---- sg_area4 面积与周长 ---- */
  function qSgArea4() {
    const type = rnd(0, 6);
    if (type === 0) {
      const l = rnd(4, 15), b = rnd(2, 12), ans = 2 * (l + b);
      return Q(L(`A rectangle is ${l} cm by ${b} cm. Its perimeter is`, `长方形长 ${l} 厘米、宽 ${b} 厘米，周长是`),
        pos(ans, 10), "Basic", L(`2 × (${l} + ${b}) = ${ans} cm.`, `2×(${l}+${b})=${ans} 厘米。`), L("Perimeter", "周长"));
    }
    if (type === 1) {
      const l = rnd(4, 15), b = rnd(2, 12), ans = l * b;
      return Q(L(`A rectangle is ${l} cm by ${b} cm. Its area is`, `长方形长 ${l} 厘米、宽 ${b} 厘米，面积是`),
        pos(ans, 15), "Basic", L(`${l} × ${b} = ${ans} cm².`, `${l}×${b}=${ans} 厘米²。`), L("Area of rectangle", "长方形面积"));
    }
    if (type === 2) {
      const s = rnd(3, 12), ans = s * s;
      return Q(L(`A square has side ${s} cm. Its area is`, `正方形边长 ${s} 厘米，面积是`),
        pos(ans, 12), "Basic", L(`${s} × ${s} = ${ans} cm².`, `${s}×${s}=${ans} 厘米²。`), L("Area of square", "正方形面积"));
    }
    if (type === 3) {
      const b = rnd(3, 12), l = rnd(4, 15), A = l * b;
      return Q(L(`A rectangle has area ${A} cm² and length ${l} cm. Its breadth is`, `长方形面积 ${A} 厘米²、长 ${l} 厘米，宽是`),
        pos(b, 5), "Intermediate", L(`Breadth = ${A} ÷ ${l} = ${b} cm.`, `宽=${A}÷${l}=${b} 厘米。`), L("Missing dimension", "求缺边"));
    }
    if (type === 4) {
      const s = rnd(3, 12), P = 4 * s;
      return Q(L(`A square has perimeter ${P} cm. Its side is`, `正方形周长 ${P} 厘米，边长是`),
        pos(s, 5), "Intermediate", L(`Side = ${P} ÷ 4 = ${s} cm.`, `边长=${P}÷4=${s} 厘米。`), L("Side from perimeter", "由周长求边长"));
    }
    if (type === 5) {
      const l1 = rnd(4, 12), b1 = rnd(3, 9), l2 = rnd(3, 10), b2 = rnd(2, 8), ans = l1 * b1 + l2 * b2;
      return Q(L(`Two rectangles (${l1} cm × ${b1} cm and ${l2} cm × ${b2} cm) are joined without overlap. Total area?`, `两个长方形（${l1}×${b1} 与 ${l2}×${b2} 厘米）不重叠地拼在一起，总面积是`),
        pos(ans, 15), "Intermediate",
        L(`${l1 * b1} + ${l2 * b2} = ${ans} cm².`, `${l1 * b1}+${l2 * b2}=${ans} 厘米²。`), L("Composite area", "组合面积"));
    }
    const l = rnd(6, 15), b = rnd(5, 12), c = rnd(2, Math.min(4, l - 1)), d = rnd(2, Math.min(3, b - 1)), ans = l * b - c * d;
    return Q(L(`A ${l} cm × ${b} cm rectangle has a ${c} cm × ${d} cm rectangle cut out of a corner. The remaining area is`, `${l}×${b} 厘米的长方形从一角剪去 ${c}×${d} 厘米，剩下面积是`),
      pos(ans, 12), "Tricky", L(`${l * b} − ${c * d} = ${ans} cm².`, `${l * b}−${c * d}=${ans} 厘米²。`), L("Cut-out area", "剪去后的面积"));
  }

  /* ---- sg_ang4 角（命名与度量）---- */
  function qSgAng4() {
    const type = rnd(0, 5);
    if (type === 0 || type === 4) {
      const a = pick([18, 25, 35, 42, 58, 72, 88, 92, 105, 118, 135, 160]);
      const kind = a < 90 ? L("an acute angle", "锐角") : (a === 90 ? L("a right angle", "直角") : (a < 180 ? L("an obtuse angle", "钝角") : L("a straight angle", "平角")));
      return Q(L(`An angle of ${a}° is`, `${a}° 的角是`),
        cats(kind, [L("an acute angle", "锐角"), L("a right angle", "直角"), L("an obtuse angle", "钝角"), L("a straight angle", "平角")], 4), "Basic",
        L(`${a}° compared with 90°: ${a < 90 ? "smaller → acute" : (a < 180 ? "greater → obtuse" : "equal to a straight angle")}.`, `与 90° 比较：${a < 90 ? "更小 → 锐角" : (a < 180 ? "更大 → 钝角" : "等于平角")}。`),
        L("Angle type", "角的种类"));
    }
    if (type === 1) {
      const q = pick([[1, 4], [1, 2], [3, 4], [1, 1]]), deg = 360 * q[0] / q[1];
      const name = q[0] === 1 && q[1] === 4 ? L("a quarter turn", "四分之一圈") : q[0] === 1 && q[1] === 2 ? L("a half turn", "半圈") : q[0] === 3 ? L("three quarters of a turn", "四分之三圈") : L("a full turn", "一整圈");
      return Q(L(`How many degrees is ${name}?`, `${name}是多少度？`),
        cats(`${deg}°`, ["90°", "180°", "360°", "45°"], 4), "Basic",
        L(`A full turn is 360°: 360 × ${q[0]}/${q[1]} = ${deg}°.`, `一整圈 360°：360×${q[0]}/${q[1]}=${deg}°。`),
        L("Turns", "旋转角"));
    }
    if (type === 2) {
      return Q(L(`Each angle of a rectangle measures`, `长方形的每个角都是`),
        cats("90°", ["180°", "45°", "360°"], 4), "Basic",
        L("All four angles of a rectangle (and a square) are right angles = 90°.", "长方形（和正方形）四个角都是直角 = 90°。"),
        L("Rectangle & square", "长方形与正方形"));
    }
    if (type === 3) {
      const n = pick([2, 3, 5, 6]), each = 90 / n;
      return Q(L(`A right angle is split into ${n} equal angles. Each angle is`, `一个直角被平均分成 ${n} 份，每份是`),
        pos(Math.round(each * 10) / 10, 8), "Intermediate",
        L(`90 ÷ ${n} = ${Math.round(each * 10) / 10}°.`, `90÷${n}=${Math.round(each * 10) / 10}°。`),
        L("Equal parts of a right angle", "直角的等分"));
    }
    const a = rnd(10, 80), b = 90 - a;
    return Q(L(`Two angles together make a right angle. One is ${a}°. The other is`, `两个角合起来是一个直角，一个是 ${a}°，另一个是`),
      pos(b, 8), "Intermediate", L(`90 − ${a} = ${b}°.`, `90−${a}=${b}°。`), L("Complementary angles", "互余角"));
  }

  /* ---- sg_sym4 轴对称与展开图 ---- */
  function qSgSym4() {
    const type = rnd(0, 5);
    if (type === 0) {
      const s = pick([[L("square", "正方形"), 4], [L("rectangle (not a square)", "长方形（非正方形）"), 2], [L("equilateral triangle", "等边三角形"), 3], [L("isosceles triangle", "等腰三角形"), 1]]);
      return Q(L(`How many lines of symmetry does a ${s[0]} have?`, `${s[0]}有几条对称轴？`),
        cats(String(s[1]), ["1", "2", "3", "4", "0"], 4), "Basic",
        L(`Folding test: the ${s[0]} has ${s[1]} line(s) of symmetry.`, `对折检验：${s[0]}有 ${s[1]} 条对称轴。`),
        L("Lines of symmetry", "对称轴"));
    }
    if (type === 1) {
      const s = pick([[L("cube", "正方体"), 6], [L("cuboid", "长方体"), 6], [L("square pyramid", "四棱锥"), 5], [L("triangular prism", "三棱柱"), 5]]);
      return Q(L(`How many faces does a ${s[0]} have?`, `${s[0]}有几个面？`),
        cats(String(s[1]), ["4", "5", "6", "8", "12"], 4), "Basic",
        L(`Its net shows ${s[1]} faces.`, `它的展开图有 ${s[1]} 个面。`),
        L("Nets & faces", "展开图与面"));
    }
    if (type === 2) {
      return Q(L(`A net has a square base with 4 triangles around it. Which solid does it form?`, `展开图由一个正方形底面和周围 4 个三角形组成，能折成什么立体？`),
        cats(L("a square pyramid", "四棱锥"), [L("a cube", "正方体"), L("a cuboid", "长方体"), L("a triangular prism", "三棱柱")], 4), "Intermediate",
        L("Square base + 4 triangles meeting at the top = square pyramid.", "正方形底 + 4 个三角形在顶点汇合 = 四棱锥。"),
        L("Identify the solid", "判断立体图形"));
    }
    if (type === 3) {
      const d = rnd(2, 6);
      return Q(L(`A point is ${d} squares from a line of symmetry. Its mirror image is how many squares from the line?`, `一个点到对称轴的距离是 ${d} 格，它的对称点到对称轴是几格？`),
        pos(d, 3), "Intermediate",
        L(`Mirror points are equally far from the line: ${d} squares.`, `对称点到对称轴距离相等：${d} 格。`),
        L("Completing a symmetric figure", "补全对称图形"));
    }
    if (type === 4) {
      return Q(L(`Which shape has exactly 2 lines of symmetry?`, `哪个图形恰好有 2 条对称轴？`),
        cats(L("a rectangle (not a square)", "长方形（非正方形）"), [L("a square", "正方形"), L("an equilateral triangle", "等边三角形"), L("a circle", "圆")], 4), "Basic",
        L("A non-square rectangle folds only along its two middle lines.", "非正方形的长方形只有两条中线能对折重合。"),
        L("Lines of symmetry", "对称轴"));
    }
    const d = rnd(2, 6);
    return Q(L(`A point and its mirror image are ${2 * d} squares apart. The line of symmetry lies how many squares from the point?`, `一个点与它的对称点相距 ${2 * d} 格，对称轴离这个点几格？`),
      pos(d, 3), "Tricky",
      L(`The line is halfway: ${2 * d} ÷ 2 = ${d} squares.`, `对称轴在正中间：${2 * d}÷2=${d} 格。`),
      L("Symmetry distance", "对称距离"));
  }

  /* ---- sg_data4 统计表、折线图、扇形图 ---- */
  function qSgData4() {
    const type = rnd(0, 5);
    const names = [[L("Football", "足球"), L("Swimming", "游泳"), L("Badminton", "羽毛球"), L("Chess", "棋类")],
                   [L("Reading", "阅读"), L("Drawing", "画画"), L("Singing", "唱歌"), L("Dancing", "跳舞")]];
    if (type === 0) {
      const set = pick(names), v = [rnd(5, 20), rnd(5, 20), rnd(5, 20), rnd(5, 20)], tot = v.reduce((a, b) => a + b, 0);
      return Q(L(`A survey gives ${set[0]} ${v[0]}, ${set[1]} ${v[1]}, ${set[2]} ${v[2]}, ${set[3]} ${v[3]}. How many children were surveyed altogether?`, `调查结果：${set[0]} ${v[0]} 人、${set[1]} ${v[1]} 人、${set[2]} ${v[2]} 人、${set[3]} ${v[3]} 人。一共调查了多少人？`),
        pos(tot, 10), "Basic",
        L(`${v.join(" + ")} = ${tot}.`, `${v.join("+")}=${tot} 人。`),
        L("Totals", "求总数"));
    }
    if (type === 1) {
      const set = pick(names), a = rnd(8, 25), b = rnd(2, a - 1);
      return Q(L(`${set[0]}: ${a} children, ${set[1]}: ${b} children. How many more chose ${set[0]}?`, `${set[0]} ${a} 人，${set[1]} ${b} 人。选${set[0]}的比选${set[1]}的多几人？`),
        pos(a - b, 6), "Basic",
        L(`${a} − ${b} = ${a - b}.`, `${a}−${b}=${a - b} 人。`),
        L("Compare data", "数据比较"));
    }
    if (type === 2) {
      const t1 = rnd(18, 28), t2 = t1 + rnd(2, 9), up = pick([1, -1]);
      const hi = up > 0 ? t2 : t1, lo = up > 0 ? t1 : t2;
      return Q(L(`A line graph shows ${t1}°C at 8 a.m. and ${t2}°C at 12 p.m. The temperature changed by`, `折线图显示 8 时 ${t1}°C、12 时 ${t2}°C，气温变化了`),
        pos(t2 - t1, 6), "Basic",
        L(`${t2} − ${t1} = ${t2 - t1}°C (it went ${up > 0 ? "up" : "down"}).`, `${t2}−${t1}=${t2 - t1}°C（${up > 0 ? "上升" : "下降"}）。`),
        L("Line graph", "折线图"));
    }
    if (type === 3) {
      const n = pick([3, 4, 5, 6, 8]);
      return Q(L(`A pie chart is cut into ${n} equal slices. Each slice represents`, `扇形图被分成 ${n} 个相等的扇形，每个扇形表示`),
        cats(`1/${n} of the whole`, ["1/2 of the whole", "1/3 of the whole", "the whole"], 4), "Basic",
        L(`Equal slices are equal parts: ${n} slices → each is 1/${n}.`, `相等的扇形表示相等的部分：${n} 份 → 每份 1/${n}。`),
        L("Pie chart", "扇形图"));
    }
    if (type === 4) {
      const total = rnd(30, 90), a = rnd(5, total - 10), b = rnd(5, total - a - 5), c = total - a - b;
      return Q(L(`A table has three rows with ${a}, ${b} and one missing value. The total is ${total}. The missing value is`, `统计表三行分别为 ${a}、${b} 和一个缺的值，总数是 ${total}。缺的值是`),
        pos(c, 8), "Intermediate",
        L(`Missing = ${total} − ${a} − ${b} = ${c}.`, `缺的值=${total}−${a}−${b}=${c}。`),
        L("Complete a table", "补全统计表"));
    }
    const set = pick(names), v = [rnd(5, 20), rnd(5, 20), rnd(5, 20), rnd(5, 20)];
    let mi = 0; for (let i = 1; i < v.length; i++) if (v[i] > v[mi]) mi = i;
    return Q(L(`The data are ${set[0]} ${v[0]}, ${set[1]} ${v[1]}, ${set[2]} ${v[2]}, ${set[3]} ${v[3]}. Which is the most popular?`, `数据：${set[0]} ${v[0]}、${set[1]} ${v[1]}、${set[2]} ${v[2]}、${set[3]} ${v[3]}。最受欢迎的是？`),
      cats(set[mi], set.slice(), 4), "Basic",
      L(`The largest value is ${v[mi]} (${set[mi]}).`, `最大值是 ${v[mi]}（${set[mi]}）。`),
      L("Most popular", "最受欢迎"));
  }

  /* ---- sg_num3 万以内的数 ---- */
  function qSgNum3() {
    const type = rnd(0, 6);
    const N = rnd(1, 9) * 1000 + rnd(0, 9) * 100 + rnd(0, 9) * 10 + rnd(1, 9);
    if (type === 0) {
      let M;
      do { M = rnd(1000, 9999); } while (new Set(String(M)).size < 4 || String(M).includes("0"));
      const p = rnd(1, 3), d = Math.floor(M / Math.pow(10, p)) % 10, v = d * Math.pow(10, p);
      return Q(L(`In ${fmt(M)}, the digit ${d} stands for`, `${fmt(M)} 中，数字 ${d} 表示`),
        cats(fmt(v), [d, d * 10, d * 100, d * 1000, d * 10000].filter(x => x !== v).map(fmt), 4), "Basic",
        L(`It is in the ${["ones", "tens", "hundreds", "thousands"][p]} place: ${d} × ${Math.pow(10, p)} = ${fmt(v)}.`, `它在${["个位", "十位", "百位", "千位"][p]}上：${d}×${Math.pow(10, p)}=${fmt(v)}。`),
        L("Place value", "位值"));
    }
    if (type === 1) {
      const a = pick([6, 7, 8, 9]), b = rnd(2, 9), ans = a * b;
      return Q(L(`${a} × ${b} = ?`, `${a} × ${b} = ？`), pos(ans, 8), "Basic",
        L(`From the ${a} times table: ${a} × ${b} = ${ans}.`, `${a} 的乘法口诀：${a}×${b}=${ans}。`), L("Times tables", "乘法口诀"));
    }
    if (type === 2) {
      const a = rnd(100, 999), k = rnd(2, 9), ans = a * k;
      return Q(L(`${a} × ${k} = ?`, `${a} × ${k} = ？`), pos(ans, Math.max(20, Math.round(ans / 4))), "Intermediate",
        L(`${k} × ${a} = ${ans} (${k} × hundreds, tens and ones, then add).`, `${k}×${a}=${ans}（分别乘百、十、个位再相加）。`),
        L("Multiplication algorithm", "乘法竖式"));
    }
    if (type === 3) {
      const d = rnd(3, 9), q = rnd(10, 99), r = rnd(1, d - 1), a = q * d + r;
      return Q(L(`${a} ÷ ${d} = ?`, `${a} ÷ ${d} = ？`),
        cats(`${q} remainder ${r}`, [`${q} remainder ${r + 1 >= d ? 0 : r + 1}`, `${q + 1} remainder ${r}`, `${r} remainder ${q}`], 4), "Intermediate",
        L(`${q} × ${d} = ${q * d}; ${a} − ${q * d} = ${r} (< ${d}).`, `${q}×${d}=${q * d}；${a}−${q * d}=${r}（<${d}）。`),
        L("Division with remainder", "带余除法"));
    }
    if (type === 4) {
      const b = rnd(1000, 8000), a = b + rnd(100, 1999), ans = a - b;
      return Q(L(`${fmt(a)} − ${fmt(b)} = ?`, `${fmt(a)} − ${fmt(b)} = ？`), pos(ans, Math.max(20, Math.round(ans / 3))), "Basic",
        L(`Line up the digits: ${fmt(a)} − ${fmt(b)} = ${fmt(ans)}.`, `数位对齐：${fmt(a)}−${fmt(b)}=${fmt(ans)}。`), L("Subtraction", "减法"));
    }
    if (type === 5) {
      const a = rnd(1000, 9998), b = a + rnd(1, 900);
      return Q(L(`Which number is greater: ${fmt(a)} or ${fmt(b)}?`, `${fmt(a)} 和 ${fmt(b)} 哪个更大？`),
        cats(fmt(b), [fmt(a), fmt(b + rnd(100, 900))], 3), "Basic",
        L(`${fmt(b)} > ${fmt(a)}: compare the thousands digit first.`, `${fmt(b)} > ${fmt(a)}：先比千位。`), L("Compare numbers", "比大小"));
    }
    const a = rnd(11, 89), b = rnd(11, 89), add = pick([0, 1]), ans = add ? a + b : Math.abs(a - b);
    return Q(L(`${Math.max(a, b)} ${add ? "+" : "−"} ${Math.min(a, b)} = ?`, `${Math.max(a, b)} ${add ? "+" : "−"} ${Math.min(a, b)} = ？`),
      pos(ans, 10), "Basic",
      L(`Mental method: ${Math.max(a, b)} ${add ? "+" : "−"} ${Math.min(a, b)} = ${ans}.`, `心算：${Math.max(a, b)}${add ? "+" : "−"}${Math.min(a, b)}=${ans}。`),
      L("Mental calculation", "心算"));
  }

  /* ---- sg_frac3 等值分数与最简分数 ---- */
  function qSgFrac3() {
    const type = rnd(0, 6);
    const base = pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5]]);
    if (type === 0) {
      const k = rnd(2, 4), a = base[0], b = base[1];
      return Q(L(`Which fraction is equivalent to ${a}/${b}?`, `下面哪个分数与 ${a}/${b} 等值？`),
        cats(`${a * k}/${b * k}`, [`${a + k}/${b + k}`, `${a * k}/${b + k}`, `${a + 1}/${b + 1}`], 4), "Basic",
        L(`Multiply top and bottom by ${k}: ${a}/${b} = ${a * k}/${b * k}.`, `分子分母同乘 ${k}：${a}/${b} = ${a * k}/${b * k}。`),
        L("Equivalent fractions", "等值分数"));
    }
    if (type === 1) {
      const k = rnd(2, 5), g = rnd(2, 6), a = base[0] * g, b = base[1] * g;
      return Q(L(`${a}/${b} in its simplest form is`, `${a}/${b} 的最简分数是`),
        cats(`${base[0]}/${base[1]}`, [`${base[0] + 1}/${base[1]}`, `${base[0]}/${base[1] + 1}`, `${a}/${b}`], 4), "Basic",
        L(`Divide both by ${g}: ${a}/${b} = ${base[0]}/${base[1]}.`, `分子分母同除 ${g}：${a}/${b} = ${base[0]}/${base[1]}。`),
        L("Simplest form", "最简分数"));
    }
    if (type === 2) {
      const pairs = [[3, 4, 2, 3], [2, 3, 3, 5], [5, 6, 3, 4], [1, 2, 2, 5], [4, 5, 3, 4], [5, 8, 2, 3]];
      const p = pick(pairs), l = p[0] * p[3], r = p[2] * p[1];
      return Q(L(`Which is greater: ${p[0]}/${p[1]} or ${p[2]}/${p[3]}?`, `${p[0]}/${p[1]} 与 ${p[2]}/${p[3]} 哪个大？`),
        cats(l > r ? `${p[0]}/${p[1]}` : `${p[2]}/${p[3]}`, [`${p[0]}/${p[1]}`, `${p[2]}/${p[3]}`, L("They are equal", "一样大")], 3), "Intermediate",
        L(`Cross-multiply: ${p[0]}×${p[3]} = ${l} and ${p[2]}×${p[1]} = ${r} → ${l > r ? `${p[0]}/${p[1]}` : `${p[2]}/${p[3]}`} is greater.`, `交叉相乘：${p[0]}×${p[3]}=${l}，${p[2]}×${p[1]}=${r} → ${l > r ? `${p[0]}/${p[1]}` : `${p[2]}/${p[3]}`} 更大。`),
        L("Compare unlike fractions", "异分母比较"));
    }
    if (type === 3) {
      const pair = pick([[2, 4], [3, 6], [4, 8], [5, 10], [2, 6], [3, 9]]), d1 = pair[0], d2 = pair[1], kk = d2 / d1;
      const a = rnd(1, d1 - 1), cMax = d2 - a * kk, c = rnd(1, Math.max(1, cMax)), t = a * kk + c;
      return Q(L(`${a}/${d1} + ${c}/${d2} = ? (the whole is one)`, `${a}/${d1} + ${c}/${d2} = ？（整体为一）`),
        cats(fracStr(t, d2), [fracStr(a + c, d2), fracStr(t + 1, d2), fracStr(t, d1 + d2)], 3), "Intermediate",
        L(`Rename ${a}/${d1} = ${a * kk}/${d2}; ${a * kk} + ${c} = ${t} → ${fracStr(t, d2)}.`, `通分：${a}/${d1}=${a * kk}/${d2}；${a * kk}+${c}=${t} → ${fracStr(t, d2)}。`),
        L("Related fractions +", "相关分数加法"));
    }
    if (type === 4) {
      const k = rnd(2, 4);
      return Q(L(`${base[0]}/${base[1]} = ?/${base[1] * k}`, `${base[0]}/${base[1]} = ？/${base[1] * k}`),
        pos(base[0] * k, base[1]), "Basic",
        L(`The denominator is multiplied by ${k}, so multiply the numerator by ${k} too: ${base[0] * k}.`, `分母乘了 ${k}，分子也要乘 ${k}：${base[0] * k}。`),
        L("Equivalent fraction", "等值分数"));
    }
    if (type === 5) {
      const pair = pick([[2, 4], [3, 6], [4, 8], [5, 10], [2, 6], [3, 9]]), d1 = pair[0], d2 = pair[1], kk = d2 / d1;
      const a = rnd(1, d1 - 1), c = rnd(1, a * kk - 1), t = a * kk - c;
      return Q(L(`${a}/${d1} − ${c}/${d2} = ? (the whole is one)`, `${a}/${d1} − ${c}/${d2} = ？（整体为一）`),
        cats(fracStr(t, d2), [fracStr(Math.abs(a - c), d2), fracStr(t + 1, d2), fracStr(t, d1 + d2)], 3), "Intermediate",
        L(`Rename ${a}/${d1} = ${a * kk}/${d2}; ${a * kk} − ${c} = ${t} → ${fracStr(t, d2)}.`, `通分：${a}/${d1}=${a * kk}/${d2}；${a * kk}−${c}=${t} → ${fracStr(t, d2)}。`),
        L("Related fractions −", "相关分数减法"));
    }
    const d = rnd(3, 9), n = rnd(1, d - 1);
    return Q(L(`1 − ${n}/${d} = ?`, `1 − ${n}/${d} = ？`),
      cats(fracStr(d - n, d), [fracStr(n, d), fracStr(d - n, d + 1), fracStr(d, d - n)], 3), "Intermediate",
      L(`1 = ${d}/${d}; ${d}/${d} − ${n}/${d} = ${fracStr(d - n, d)}.`, `1=${d}/${d}；${d}/${d}−${n}/${d}=${fracStr(d - n, d)}。`),
      L("Subtract from one whole", "从整体中减去"));
  }

  /* ---- sg_money3 钱币小数 ---- */
  function qSgMoney3() {
    const type = rnd(0, 5);
    const c = () => rnd(10, 990) / 100;
    const money = x => "$" + x.toFixed(2);
    const moneyOpts = ans => {
      const cands = [0.1, -0.1, 0.5, -0.5, 1, -1, 0.05, 2].map(d => money(Math.max(0, Math.round((ans + d) * 100) / 100)));
      return cats(money(ans), cands, 4);
    };
    if (type === 0 || type === 3) {
      const a = c(), b = c(), s = Math.round((a + b) * 100) / 100;
      return Q(L(`${money(a)} + ${money(b)} = ?`, `${money(a)} + ${money(b)} = ？`),
        moneyOpts(s), "Basic", L(`Add the cents first: ${money(a)} + ${money(b)} = ${money(s)}.`, `先加分：${money(a)}+${money(b)}=${money(s)}。`),
        L("Money addition", "钱币加法"));
    }
    if (type === 1) {
      const a = c() + 1, b = Math.round(a * rnd(20, 90)) / 100;
      const s = Math.round((a - b) * 100) / 100;
      return Q(L(`${money(a)} − ${money(b)} = ?`, `${money(a)} − ${money(b)} = ？`),
        moneyOpts(s), "Basic", L(`Line up the points: ${money(a)} − ${money(b)} = ${money(s)}.`, `小数点对齐：${money(a)}−${money(b)}=${money(s)}。`),
        L("Money subtraction", "钱币减法"));
    }
    if (type === 2) {
      const pay = pick([10, 20, 50]), cost = Math.round(rnd(100, pay * 100 - 100)) / 100;
      const ch = Math.round((pay - cost) * 100) / 100;
      return Q(L(`You pay ${money(pay)} for an item costing ${money(cost)}. Your change is`, `商品 ${money(cost)}，付 ${money(pay)}，找零是`),
        moneyOpts(ch), "Basic", L(`${money(pay)} − ${money(cost)} = ${money(ch)}.`, `${money(pay)}−${money(cost)}=${money(ch)}。`), L("Change", "找零"));
    }
    if (type === 4) {
      const a = c(), b = Math.round((a + rnd(1, 400) / 100) * 100) / 100;
      return Q(L(`Which costs more: ${money(a)} or ${money(b)}?`, `${money(a)} 与 ${money(b)} 哪个更贵？`),
        cats(money(b), [money(a), money(b + 1)], 3), "Basic", L(`${money(b)} > ${money(a)}: compare dollars, then cents.`, `${money(b)} > ${money(a)}：先比元，再比分。`), L("Compare money", "钱币比较"));
    }
    const n = rnd(2, 6), each = rnd(50, 250) / 100, tot = Math.round(n * each * 100) / 100;
    return Q(L(`${n} pens cost ${money(each)} each. The total cost is`, `${n} 支笔每支 ${money(each)}，总价是`),
      moneyOpts(tot), "Basic", L(`${n} × ${money(each)} = ${money(tot)}.`, `${n}×${money(each)}=${money(tot)}。`), L("Money multiplication", "钱币乘法"));
  }

  /* ---- sg_unit3 长度、质量、容积 ---- */
  function qSgUnit3() {
    const type = rnd(0, 5);
    if (type === 0) {
      const k = rnd(1, 9), m = rnd(1, 999), ans = k * 1000 + m;
      return Q(L(`${k} km ${m} m = ? m`, `${k} 千米 ${m} 米 = ？米`), pos(ans, 500), "Basic",
        L(`${k} km = ${fmt(k * 1000)} m; + ${m} = ${fmt(ans)} m.`, `${k} 千米=${fmt(k * 1000)} 米；+${m}=${fmt(ans)} 米。`), L("Compound units", "复合单位"));
    }
    if (type === 1) {
      const k = rnd(1, 9), g = rnd(1, 999), ans = k * 1000 + g;
      return Q(L(`${k} kg ${g} g = ? g`, `${k} 千克 ${g} 克 = ？克`), pos(ans, 500), "Basic",
        L(`${k} kg = ${fmt(k * 1000)} g; + ${g} = ${fmt(ans)} g.`, `${k} 千克=${fmt(k * 1000)} 克；+${g}=${fmt(ans)} 克。`), L("Compound units", "复合单位"));
    }
    if (type === 2) {
      const k = rnd(1, 9), ml = rnd(1, 999), ans = k * 1000 + ml;
      return Q(L(`${k} ℓ ${ml} ml = ? ml`, `${k} 升 ${ml} 毫升 = ？毫升`), pos(ans, 500), "Basic",
        L(`${k} ℓ = ${fmt(k * 1000)} ml; + ${ml} = ${fmt(ans)} ml.`, `${k} 升=${fmt(k * 1000)} 毫升；+${ml}=${fmt(ans)} 毫升。`), L("Compound units", "复合单位"));
    }
    if (type === 3) {
      const k = rnd(1, 9), g = rnd(1, 999), N = k * 1000 + g;
      return Q(L(`${fmt(N)} g written in kg and g is`, `${fmt(N)} 克用千克和克表示是`),
        cats(`${k} kg ${g} g`, [`${k} kg ${g + 1} g`, `${g} kg ${k} g`, `${k + 1} kg ${g} g`], 4), "Intermediate",
        L(`${fmt(k * 1000)} g = ${k} kg, leaving ${g} g.`, `${fmt(k * 1000)} 克 = ${k} 千克，余 ${g} 克。`), L("Regroup units", "单位重组"));
    }
    if (type === 4) {
      const k = rnd(1, 9), m = rnd(1, 999), N = k * 1000 + m;
      return Q(L(`${fmt(N)} m written in km and m is`, `${fmt(N)} 米用千米和米表示是`),
        cats(`${k} km ${m} m`, [`${k} km ${m + 1} m`, `${m} km ${k} m`, `${k + 1} km ${m} m`], 4), "Intermediate",
        L(`${fmt(k * 1000)} m = ${k} km, leaving ${m} m.`, `${fmt(k * 1000)} 米 = ${k} 千米，余 ${m} 米。`), L("Regroup units", "单位重组"));
    }
    const k = rnd(1, 9), ml = rnd(1, 999), N = k * 1000 + ml;
    return Q(L(`${fmt(N)} ml written in ℓ and ml is`, `${fmt(N)} 毫升用升和毫升表示是`),
      cats(`${k} ℓ ${ml} ml`, [`${k} ℓ ${ml + 1} ml`, `${ml} ℓ ${k} ml`, `${k + 1} ℓ ${ml} ml`], 4), "Intermediate",
      L(`${fmt(k * 1000)} ml = ${k} ℓ, leaving ${ml} ml.`, `${fmt(k * 1000)} 毫升 = ${k} 升，余 ${ml} 毫升。`), L("Regroup units", "单位重组"));
  }

  /* ---- sg_time3 时间 ---- */
  function qSgTime3() {
    const type = rnd(0, 5);
    const hm = t => String(Math.floor(t / 60)).padStart(2, "0") + ":" + String(t % 60).padStart(2, "0");
    const fd = t => t < 60 ? `${t} min` : `${Math.floor(t / 60)} h ${t % 60} min`;
    if (type === 0) {
      const m = rnd(2, 9), ans = m * 60;
      return Q(L(`${m} minutes = ? seconds`, `${m} 分钟 = ？秒`), pos(ans, 60), "Basic",
        L(`1 min = 60 s: ${m} × 60 = ${ans} s.`, `1 分=60 秒：${m}×60=${ans} 秒。`), L("Seconds", "秒"));
    }
    if (type === 1) {
      const h = rnd(1, 11), m = pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
      return Q(L(`${String(h + 12).padStart(2, "0")}:${String(m).padStart(2, "0")} in 12-hour time is`, `${String(h + 12).padStart(2, "0")}:${String(m).padStart(2, "0")} 用 12 小时制表示是`),
        cats(`${h}:${String(m).padStart(2, "0")} p.m.`, [`${h}:${String(m).padStart(2, "0")} a.m.`, `${h + 12}:${String(m).padStart(2, "0")} p.m.`, `${h === 12 ? 12 : h + 1}:${String(m).padStart(2, "0")} p.m.`], 4), "Basic",
        L(`${h + 12} − 12 = ${h}, afternoon → ${h}:${String(m).padStart(2, "0")} p.m.`, `${h + 12}−12=${h}，下午 → 下午 ${h}:${String(m).padStart(2, "0")}。`), L("24-hour clock", "24 小时制"));
    }
    if (type === 2) {
      const st = rnd(8 * 60, 16 * 60), dur = rnd(20, 180), en = st + dur;
      return Q(L(`An event starts at ${hm(st)} and ends at ${hm(en)}. Its duration is`, `活动 ${hm(st)} 开始、${hm(en)} 结束，时长是`),
        cats(fd(dur), [fd(dur + 5), fd(dur + 10), fd(dur - 5), `${dur} min`], 4), "Intermediate",
        L(`From ${hm(st)} to ${hm(en)} is ${fd(dur)}.`, `${hm(st)} 到 ${hm(en)} 是 ${fd(dur)}。`), L("Duration", "经过时长"));
    }
    if (type === 3) {
      const st = rnd(7 * 60, 15 * 60), dur = rnd(30, 150), en = st + dur;
      return Q(L(`A journey of ${fd(dur)} starts at ${hm(st)}. It ends at`, `车程 ${fd(dur)}，${hm(st)} 出发，到达时间是`),
        cats(hm(en), [hm(en + 10), hm(en - 10), hm(st + 60)], 4), "Intermediate",
        L(`${hm(st)} + ${fd(dur)} = ${hm(en)}.`, `${hm(st)}+${fd(dur)}=${hm(en)}。`), L("Finish time", "结束时间"));
    }
    if (type === 4) {
      const h = rnd(2, 5), m = pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
      return Q(L(`${h} h ${m} min = ? min`, `${h} 时 ${m} 分 = ？分`), pos(h * 60 + m, 30), "Basic",
        L(`${h} × 60 = ${h * 60}; + ${m} = ${h * 60 + m} min.`, `${h}×60=${h * 60}；+${m}=${h * 60 + m} 分。`), L("Hours ↔ minutes", "时与分"));
    }
    const h = rnd(1, 11), m = pick([0, 10, 20, 30, 40, 50]);
    return Q(L(`${h}:${String(m).padStart(2, "0")} p.m. in 24-hour time is`, `下午 ${h}:${String(m).padStart(2, "0")} 用 24 小时制表示是`),
      cats(`${String(h + 12).padStart(2, "0")}:${String(m).padStart(2, "0")}`, [`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`, `${String(h + 10).padStart(2, "0")}:${String(m).padStart(2, "0")}`, `${String(h).padStart(2, "0")}:${String(m + 10).padStart(2, "0")}`], 4), "Basic",
      L(`p.m. hours add 12: ${h} + 12 = ${h + 12} → ${String(h + 12).padStart(2, "0")}:${String(m).padStart(2, "0")}.`, `下午时数 +12：${h}+12=${h + 12} → ${String(h + 12).padStart(2, "0")}:${String(m).padStart(2, "0")}。`), L("24-hour clock", "24 小时制"));
  }

  /* ---- sg_area3 面积与周长基础 ---- */
  function qSgArea3() {
    const type = rnd(0, 5);
    if (type === 0) {
      const l = rnd(4, 15), b = rnd(2, 12), ans = 2 * (l + b);
      return Q(L(`The perimeter of a ${l} cm × ${b} cm rectangle is`, `长 ${l} 厘米、宽 ${b} 厘米的长方形周长是`),
        pos(ans, 10), "Basic", L(`2 × (${l} + ${b}) = ${ans} cm.`, `2×(${l}+${b})=${ans} 厘米。`), L("Perimeter", "周长"));
    }
    if (type === 1) {
      const l = rnd(4, 15), b = rnd(2, 12), ans = l * b;
      return Q(L(`The area of a ${l} cm × ${b} cm rectangle is`, `长 ${l} 厘米、宽 ${b} 厘米的长方形面积是`),
        pos(ans, 12), "Basic", L(`${l} × ${b} = ${ans} cm².`, `${l}×${b}=${ans} 厘米²。`), L("Area", "面积"));
    }
    if (type === 2) {
      const s = rnd(3, 12), ans = 4 * s;
      return Q(L(`A square has side ${s} cm. Its perimeter is`, `正方形边长 ${s} 厘米，周长是`),
        pos(ans, 10), "Basic", L(`4 × ${s} = ${ans} cm.`, `4×${s}=${ans} 厘米。`), L("Square perimeter", "正方形周长"));
    }
    if (type === 3) {
      const s = rnd(3, 12), ans = s * s;
      return Q(L(`A square has side ${s} cm. Its area is`, `正方形边长 ${s} 厘米，面积是`),
        pos(ans, 12), "Basic", L(`${s} × ${s} = ${ans} cm².`, `${s}×${s}=${ans} 厘米²。`), L("Square area", "正方形面积"));
    }
    if (type === 4) {
      const s = rnd(3, 12), P = 4 * s;
      return Q(L(`A square has perimeter ${P} cm. Its side length is`, `正方形周长 ${P} 厘米，边长是`),
        pos(s, 5), "Intermediate", L(`${P} ÷ 4 = ${s} cm.`, `${P}÷4=${s} 厘米。`), L("Square side", "求边长"));
    }
    const l = rnd(4, 15), b = rnd(2, 12), A = l * b;
    return Q(L(`A rectangle has area ${A} cm² and length ${l} cm. Its breadth is`, `长方形面积 ${A} 厘米²、长 ${l} 厘米，宽是`),
      pos(b, 5), "Intermediate", L(`Breadth = ${A} ÷ ${l} = ${b} cm.`, `宽=${A}÷${l}=${b} 厘米。`), L("Missing side", "求缺边"));
  }

  /* ---- sg_geo3 直角、垂直与平行 ---- */
  function qSgGeo3() {
    const type = rnd(0, 5);
    if (type === 0) {
      const wider = pick([0, 1]);
      return Q(wider ? L(`A door opens wider than a right angle. Its opening angle is`, `一扇门开得比直角大，这个角是`)
        : L(`A door opens less than a right angle. Its opening angle is`, `一扇门开得比直角小，这个角是`),
        cats(wider ? L("greater than a right angle", "比直角大的角") : L("smaller than a right angle", "比直角小的角"),
          [L("greater than a right angle", "比直角大的角"), L("smaller than a right angle", "比直角小的角"), L("exactly a right angle", "恰好是直角"), L("a straight angle", "平角")], 4), "Basic",
        L(`${wider ? "Wider" : "Narrower"} than 90° → ${wider ? "greater" : "smaller"} than a right angle.`, `${wider ? "比 90° 大" : "比 90° 小"} → ${wider ? "比直角大" : "比直角小"}。`),
        L("Compare with a right angle", "与直角比较"));
    }
    if (type === 1) {
      return Q(L(`Which pair of lines meets at a right angle?`, `下面哪组线相交成直角？`),
        cats(L("perpendicular lines", "垂直线"), [L("parallel lines", "平行线"), L("lines that never meet", "永不相交的线"), L("a curved line and itself", "曲线与自身")], 4), "Basic",
        L("Perpendicular lines form right angles where they meet.", "垂直线相交成直角。"), L("Perpendicular", "垂直"));
    }
    if (type === 2) {
      return Q(L(`Railway tracks stay the same distance apart and never meet. They are`, `铁轨距离始终相同、永不相交，它们是`),
        cats(L("parallel", "平行线"), [L("perpendicular", "垂直线"), L("crossing", "相交线"), L("curved", "曲线")], 4), "Basic",
        L("Same distance apart and never meeting = parallel.", "距离相同且永不相交 = 平行。"), L("Parallel", "平行"));
    }
    if (type === 3) {
      const shape = pick([L("rectangle", "长方形"), L("square", "正方形")]);
      return Q(L(`How many right angles does a ${shape} have?`, `${shape}有几个直角？`),
        cats("4", ["1", "2", "3", "8"], 4), "Basic",
        L(`All four corners of a ${shape} are right angles.`, `${shape}的四个角都是直角。`), L("Right angles", "直角"));
    }
    if (type === 4) {
      return Q(L(`Two lines cross at exactly 90°. They are`, `两条线恰好成 90° 相交，它们是`),
        cats(L("perpendicular", "垂直线"), [L("parallel", "平行线"), L("the same line", "同一条线"), L("curved", "曲线")], 4), "Basic",
        L("Meeting at 90° = perpendicular.", "成 90° 相交 = 垂直。"), L("Perpendicular", "垂直"));
    }
    const a = pick([30, 45, 60, 120, 150]);
    return Q(L(`An angle of ${a}° is`, `${a}° 的角是`),
      cats(a > 90 ? L("greater than a right angle", "比直角大") : L("smaller than a right angle", "比直角小"),
        [L("greater than a right angle", "比直角大"), L("smaller than a right angle", "比直角小"), L("exactly a right angle", "恰好是直角"), L("a straight angle", "平角")], 4), "Basic",
      L(`${a}° ${a > 90 ? ">" : "<"} 90°, so it is ${a > 90 ? "greater" : "smaller"} than a right angle.`, `${a}° ${a > 90 ? ">" : "<"} 90°，所以${a > 90 ? "比直角大" : "比直角小"}。`), L("Compare with a right angle", "与直角比较"));
  }

  /* ---- sg_data3 条形统计图 ---- */
  function qSgData3() {
    const type = rnd(0, 5);
    const names = [[L("Baseball", "棒球"), L("Tennis", "网球"), L("Swimming", "游泳"), L("Chess", "棋类")],
                   [L("Reading", "阅读"), L("Drawing", "画画"), L("Singing", "唱歌"), L("Dancing", "跳舞")]];
    if (type === 0) {
      const k = pick([2, 5, 10]), h = rnd(2, 9), ans = k * h;
      return Q(L(`A bar graph's scale is 1 square = ${k} children. A bar ${h} squares tall stands for`, `条形图刻度为 1 格 = ${k} 人，${h} 格的条代表`),
        pos(ans, Math.max(4, k)), "Basic", L(`${h} × ${k} = ${ans} children.`, `${h}×${k}=${ans} 人。`), L("Scales", "刻度"));
    }
    if (type === 1) {
      const set = pick(names), a = rnd(8, 25), b = rnd(2, a - 1);
      return Q(L(`${set[0]} has ${a} children, ${set[1]} has ${b}. How many more chose ${set[0]}?`, `${set[0]} ${a} 人，${set[1]} ${b} 人。选${set[0]}的多几人？`),
        pos(a - b, 6), "Basic", L(`${a} − ${b} = ${a - b}.`, `${a}−${b}=${a - b} 人。`), L("Compare data", "数据比较"));
    }
    if (type === 2) {
      const set = pick(names), v = [rnd(5, 20), rnd(5, 20), rnd(5, 20), rnd(5, 20)];
      let mi = 0; for (let i = 1; i < 4; i++) if (v[i] > v[mi]) mi = i;
      return Q(L(`${set[0]} ${v[0]}, ${set[1]} ${v[1]}, ${set[2]} ${v[2]}, ${set[3]} ${v[3]} children. Which is the most popular?`, `${set[0]} ${v[0]} 人、${set[1]} ${v[1]} 人、${set[2]} ${v[2]} 人、${set[3]} ${v[3]} 人。最受欢迎的是？`),
        cats(set[mi], set.slice(), 4), "Basic", L(`The largest value is ${v[mi]} (${set[mi]}).`, `最大值是 ${v[mi]}（${set[mi]}）。`), L("Most popular", "最受欢迎"));
    }
    if (type === 3) {
      const set = pick(names), v = [rnd(5, 20), rnd(5, 20), rnd(5, 20)], tot = v[0] + v[1] + v[2];
      return Q(L(`${set[0]} ${v[0]}, ${set[1]} ${v[1]}, ${set[2]} ${v[2]}. Altogether how many?`, `${set[0]} ${v[0]} 人、${set[1]} ${v[1]} 人、${set[2]} ${v[2]} 人，一共多少人？`),
        pos(tot, 8), "Basic", L(`${v[0]} + ${v[1]} + ${v[2]} = ${tot}.`, `${v[0]}+${v[1]}+${v[2]}=${tot} 人。`), L("Totals", "求总数"));
    }
    if (type === 4) {
      const k = pick([2, 5, 10]), v = k * rnd(2, 9);
      return Q(L(`A bar graph's scale is 1 square = ${k} children. A value of ${v} children is shown by how many squares?`, `条形图刻度为 1 格 = ${k} 人，${v} 人要画几格？`),
        pos(v / k, 4), "Intermediate", L(`${v} ÷ ${k} = ${v / k} squares.`, `${v}÷${k}=${v / k} 格。`), L("Scales", "刻度"));
    }
    const set = pick(names), v = [rnd(5, 20), rnd(5, 20), rnd(5, 20), rnd(5, 20)];
    let mi = 0; for (let i = 1; i < 4; i++) if (v[i] < v[mi]) mi = i;
    return Q(L(`${set[0]} ${v[0]}, ${set[1]} ${v[1]}, ${set[2]} ${v[2]}, ${set[3]} ${v[3]} children. Which is the least popular?`, `${set[0]} ${v[0]} 人、${set[1]} ${v[1]} 人、${set[2]} ${v[2]} 人、${set[3]} ${v[3]} 人。最不受欢迎的是？`),
      cats(set[mi], set.slice(), 4), "Basic", L(`The smallest value is ${v[mi]} (${set[mi]}).`, `最小值是 ${v[mi]}（${set[mi]}）。`), L("Least popular", "最不受欢迎"));
  }

  if (typeof window !== "undefined") {
    window.QGEN_SG_PART1 = { sg_num4: qSgNum4, sg_fact4: qSgFact4, sg_model4: qSgModel4, sg_dec4: qSgDec4,
      sg_fract4: qSgFract4, sg_area4: qSgArea4, sg_ang4: qSgAng4, sg_sym4: qSgSym4, sg_data4: qSgData4,
      sg_num3: qSgNum3, sg_frac3: qSgFrac3, sg_money3: qSgMoney3, sg_unit3: qSgUnit3, sg_time3: qSgTime3,
      sg_area3: qSgArea3, sg_geo3: qSgGeo3, sg_data3: qSgData3 };
  }
})();
