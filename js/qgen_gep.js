/* ============================================================
 * 融会贯通 · GEP 拓展模块（独立分区，不与课内学段混合）
 *  - 8 个 GEP 常考但原仓库未覆盖的模块：计数原理、排列组合、
 *    逻辑推理、数字谜、最坏保证型、数阵图（幻方）、时钟问题、博弈逻辑
 *  - 全部走参数化随机出题 qgen(n)，答案由构造保证
 *  - 逻辑类题目的唯一性由程序内枚举验证（构造时保证解唯一）
 *  - 配图只展示题给数据与结构，绝不泄露答案
 * ============================================================ */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  const K = {
    ink: "#334155", sub: "#64748b", line: "#cbd5e1",
    pri: "#7c3aed", ok: "#16a34a", warn: "#d97706", red: "#dc2626",
    soft: "#f3ecff", blue: "#2563eb", purple: "#7c3aed", orange: "#ea580c",
    green: "#16a34a", pink: "#db2777"
  };
  function S(w, h, inner, maxw) {
    return `<svg viewBox="0 0 ${w} ${h}" width="100%" style="max-width:${maxw || w}px;height:auto;display:block" xmlns="${NS}">${inner}</svg>`;
  }

  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = a => a[rnd(0, a.length - 1)];
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(0, i); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  // 选项构造：含正确项 + n-1 个互异干扰项（碰撞安全）
  function opts(ans, make, n) {
    n = n || 4;
    const set = new Set([ans]);
    let g = 0;
    while (set.size < n && g++ < 400) { const d = make(); if (d !== ans) set.add(d); }
    let k = 1;
    while (set.size < n) { const v = ans + k; if (!set.has(v)) set.add(v); const w = ans - k; if (set.size < n && !set.has(w)) set.add(w); k++; }
    const arr = shuffle([...set]).map(String);
    return { opts: arr, ans: arr.indexOf(String(ans)) };
  }

  function Q(q, optsObj, level, explain, point, fig) {
    return Object.assign({ q, level: level || "基础", explain, point: point || "" }, optsObj, { fig: fig || null });
  }

  /* ---------------- 配图（只画题给数据，不画答案） ---------------- */
  const Fig = {};
  // 树状图：分支数量 = 题给数据；不显示总数
  Fig.gep_tree = function (p) {
    const W = 300, H = 170;
    const CAP = 24; // 只画结构骨架，节点过多时截断显示"…"（数数归题面，不归图）
    let s = `<text x="14" y="24" font-size="12" fill="${K.sub}">树状图（结构 = 题给数据）</text>`;
    if (p.mode === "mul") {
      let prev = [[140, 85]], drawn = 1;
      s += `<circle cx="140" cy="85" r="12" fill="${K.soft}" stroke="${K.pri}" stroke-width="1.5"/>`;
      p.steps.forEach((cnt, si) => {
        const next = [];
        prev.forEach(([x, y], bi) => {
          for (let e = 0; e < cnt; e++) {
            if (drawn >= CAP) continue;
            const ny = y + (e - (cnt - 1) / 2) * 18 + si * 10;
            const nx = x + 50;
            s += `<line x1="${x + 12}" y1="${y}" x2="${nx - 10}" y2="${ny}" stroke="${K.line}"/>`;
            s += `<circle cx="${nx}" cy="${ny}" r="7" fill="${K.soft}" stroke="${K.ok}" stroke-width="1.2"/>`;
            next.push([nx, ny]); drawn++;
          }
        });
        prev = next;
        s += `<text x="${60 + si * 50}" y="${H - 12}" font-size="11" fill="${K.sub}">第${si + 1}步 ${cnt} 种</text>`;
      });
      if (drawn >= CAP) s += `<text x="14" y="${H - 30}" font-size="11" fill="${K.warn}">…（分支多，完整计数在题面）</text>`;
    } else {
      p.sizes.forEach((cnt, i) => {
        const y = 45 + i * 40;
        s += `<circle cx="40" cy="85" r="12" fill="${K.soft}" stroke="${K.pri}" stroke-width="1.5"/>`;
        s += `<line x1="52" y1="85" x2="110" y2="${y}" stroke="${K.line}"/>`;
        s += `<rect x="110" y="${y - 14}" width="70" height="28" rx="6" fill="${K.soft}" stroke="${K.ok}" stroke-width="1.2"/>`;
        s += `<text x="145" y="${y + 4}" font-size="11" fill="${K.ink}" text-anchor="middle">${cnt} 个</text>`;
      });
      s += `<text x="14" y="${H - 12}" font-size="11" fill="${K.sub}">分类：各类互不重叠，用加法</text>`;
    }
    return S(W, H, s);
  };
  // 彩色球袋：袋中数量是题给数据
  Fig.gep_bags = function (p) {
    const cols = { red: K.red, blue: K.blue, green: K.green, orange: K.orange, purple: K.purple, pink: K.pink };
    let s = "";
    p.bags.forEach((b, i) => {
      const x = 20 + i * 90;
      s += `<rect x="${x}" y="30" width="70" height="80" rx="8" fill="${K.soft}" stroke="${cols[b.c]}" stroke-width="1.5"/>`;
      s += `<text x="${x + 35}" y="55" font-size="12" fill="${cols[b.c]}" text-anchor="middle">${b.name}</text>`;
      s += `<text x="${x + 35}" y="80" font-size="13" font-weight="700" fill="${K.ink}" text-anchor="middle">${b.n} 个</text>`;
    });
    s += `<text x="20" y="132" font-size="11" fill="${K.sub}">最坏情形：每色先取到 (需要数−1)，再取 1 个必达标</text>`;
    return S(20 + p.bags.length * 90, 145, s);
  };
  // 数阵图：显示格 = 题给数据，? = 要求解的格
  Fig.gep_grid = function (p) {
    const cell = 44, x0 = 40, y0 = 30;
    let s = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
      const x = x0 + c * cell, y = y0 + r * cell;
      s += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="#fff" stroke="${K.line}" stroke-width="1.5"/>`;
      const v = p.grid[r][c];
      const hidden = (r === p.hideR && c === p.hideC);
      s += `<text x="${x + cell / 2}" y="${y + cell / 2 + 4}" font-size="13" font-weight="700" fill="${hidden ? K.purple : K.ink}" text-anchor="middle">${hidden ? "?" : v}</text>`;
    }
    s += `<text x="40" y="${y0 + 3 * cell + 24}" font-size="11" fill="${K.sub}">每行/列/对角线之和都是 ${p.magic}（题给条件）</text>`;
    return S(172, 185, s);
  };
  // 钟面：指针位置是题给数据（时刻），不标注夹角答案
  Fig.gep_clock = function (p) {
    const cx = 80, cy = 85, R = 62;
    let s = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="#fff" stroke="${K.line}" stroke-width="2"/>`;
    // 刻度线代替数字（12 个刻度是钟面固有结构，与答案无关）
    for (let i = 1; i <= 12; i++) {
      const a = i * 30 - 90;
      const x1 = cx + (R - 6) * Math.cos(a * Math.PI / 180), y1 = cy + (R - 6) * Math.sin(a * Math.PI / 180);
      const x2 = cx + (R - 12) * Math.cos(a * Math.PI / 180), y2 = cy + (R - 12) * Math.sin(a * Math.PI / 180);
      s += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${K.sub}" stroke-width="2"/>`;
    }
    const ha = (30 * p.h + 0.5 * p.m) - 90, ma = 6 * p.m - 90;
    s += `<line x1="${cx}" y1="${cy}" x2="${cx + R * 0.55 * Math.cos(ha * Math.PI / 180)}" y2="${cy + R * 0.55 * Math.sin(ha * Math.PI / 180)}" stroke="${K.pri}" stroke-width="3.5" stroke-linecap="round"/>`;
    s += `<line x1="${cx}" y1="${cy}" x2="${cx + R * 0.8 * Math.cos(ma * Math.PI / 180)}" y2="${cy + R * 0.8 * Math.sin(ma * Math.PI / 180)}" stroke="${K.blue}" stroke-width="2.5" stroke-linecap="round"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="3.5" fill="${K.ink}"/>`;
    s += `<text x="${cx}" y="${cy + R + 18}" font-size="11" fill="${K.sub}" text-anchor="middle">${p.h} 点 ${p.m} 分（题给时刻）</text>`;
    return S(160, 170, s);
  };
  // 竖式谜：数字是题给数据，□ 是未知位
  Fig.gep_crypt = function (p) {
    let s = "";
    s += `<text x="30" y="34" font-size="16" font-weight="700" fill="${K.ink}">${p.top}</text>`;
    s += `<text x="30" y="58" font-size="16" font-weight="700" fill="${K.ink}">${p.bot}</text>`;
    s += `<line x1="24" y1="66" x2="120" y2="66" stroke="${K.ink}" stroke-width="1.5"/>`;
    s += `<text x="30" y="86" font-size="16" font-weight="700" fill="${K.purple}">${p.sum}</text>`;
    s += `<text x="14" y="110" font-size="11" fill="${K.sub}">同一个 □ 代表同一个数字</text>`;
    return S(140, 120, s);
  };

  Object.keys(Fig).forEach(k => { if (window.Fig) window.Fig[k] = Fig[k]; });

  /* ============================================================
   * 1. 计数原理（加法原理 / 乘法原理）
   * ============================================================ */
  function qCount() {
    if (Math.random() < 0.5) { // 分步乘法
      const steps = [];
      for (let i = 0; i < 2; i++) steps.push(rnd(2, 5));
      if (Math.random() < 0.4) steps.push(rnd(2, 4));
      const ans = steps.reduce((a, b) => a * b, 1);
      const q = `从学校到少年宫要分 ${steps.length} 步走完：依次有 ${steps.join(" 种、")} 种走法。一共有多少条不同路线？`;
      const exp = `分步用乘法：${steps.join(" × ")} = ${ans} 条。（每一步都要走完，缺一不可）`;
      return Q(q, opts(ans, () => steps.reduce((a, b) => a * b, 1) + rnd(-4, 8)), "基础", exp, "分步乘法",
        { name: "gep_tree", mode: "mul", steps });
    }
    const k = rnd(2, 3);
    const sizes = []; for (let i = 0; i < k; i++) sizes.push(rnd(3, 9));
    const ans = sizes.reduce((a, b) => a + b, 0);
    const q = `书架上有 ${k} 类书，分别有 ${sizes.join(" 本、")} 本。从中任取一本，共有多少种取法？`;
    const exp = `分类用加法（各类互不重叠）：${sizes.join(" + ")} = ${ans} 种。`;
    return Q(q, opts(ans, () => ans + rnd(-5, 7)), "基础", exp, "分类加法",
      { name: "gep_tree", mode: "add", sizes });
  }

  /* ============================================================
   * 2. 排列与组合（小数值，笔算级）
   * ============================================================ */
  const fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320];
  function C(n, k) { return fact[n] / (fact[k] * fact[n - k]); }
  function A(n, k) { return fact[n] / fact[n - k]; }
  function qPermComb() {
    const n = rnd(4, 8), k = rnd(2, 3);
    const askA = Math.random() < 0.5;
    const ans = askA ? A(n, k) : C(n, k);
    const names = ["小明、小红、小刚、小美、小华、小杰、小婷、小磊"].join().split("、").slice(0, n);
    const q = askA
      ? `从 ${names.slice(0, n)} 这 ${n} 人中选出 ${k} 人排成一列报数，共有多少种排法？`
      : `从 ${names.slice(0, n)} 这 ${n} 人中选出 ${k} 人参加小组（不分顺序），共有多少种选法？`;
    const exp = askA
      ? `排成一列有顺序：A(${n},${k}) = ${n} × ${[...Array(k)].map((_, i) => n - i).slice(1).join(" × ")} = ${ans}；若不分顺序要除以 ${k}!（= ${fact[k]}），即 C(${n},${k}) = ${C(n, k)}。`
      : `不分顺序：C(${n},${k}) = A(${n},${k}) ÷ ${k}! = ${A(n, k)} ÷ ${fact[k]} = ${ans}。`;
    return Q(q, opts(ans, () => (askA ? C(n, k) : A(n, k)) + rnd(-3, 6)), "基础", exp, askA ? "排列有顺序" : "组合除 k!",
      { name: "gep_tree", mode: "mul", steps: Array.from({ length: k }, (_, i) => n - i) });
  }

  /* ============================================================
   * 3. 逻辑推理（唯一性由构造时枚举验证）
   * ============================================================ */
  function qLogic() {
    if (Math.random() < 0.5) {
      // 真话谜题：三人中有一人作案，三句话恰一句为真；解唯一才通过
      const nm = ["甲", "乙", "丙"];
      for (let g = 0; g < 400; g++) {
        const culprit = rnd(0, 2);
        const stmts = nm.map(i => ({ by: i, type: pick(["did", "not"]), who: rnd(0, 2) }));
        const tr = t => stmts.map(s => s.type === "did" ? s.who === t : s.who !== t).filter(Boolean).length;
        if (tr(culprit) !== 1) continue;
        if ([0, 1, 2].some(t => t !== culprit && tr(t) === 1)) continue; // 解必须唯一
        const sTxt = stmts.map((s, i) => `${nm[i]}说：「${s.type === "did" ? nm[s.who] + "作的案" : nm[s.who] + "没有作案"}」`);
        const exp = `逐人验证作案者假设：只有假设${nm[culprit]}作案时恰有一句真话（其余两人假设各有两句真或全假），故作案者是${nm[culprit]}。`;
        return Q(`密室案：甲乙丙三人中恰好一人作案，三句话${sTxt.join("；")}中只有一句是真话。谁作的案？`,
          opts(nm[culprit], () => pick(nm), 3), "进阶", exp, "假设验证法·解唯一");
      }
      return null;
    }
    // 排序推理：构造全序链，答案（最高者）由构造保证
    const names = shuffle(["小红", "小明", "小亮", "小芳"]);
    const chain = names; // chain[0] 最高
    const lines = []; for (let i = 0; i < 3; i++) lines.push(`${chain[i]}比${chain[i + 1]}高`);
    const exp = `链条 ${chain.join(" > ")} 传递得到最高的是${chain[0]}。`;
    return Q(`身高比赛已知：${shuffle(lines).join("，")}。四人中谁最高？`,
      opts(chain[0], () => pick(names)), "基础", exp, "传递性·链式推理");
  }

  /* ============================================================
   * 4. 数字谜（同一个□同一数字，方程唯一解）
   * ============================================================ */
  function qCrypt() {
    const d = rnd(2, 9);
    const x = rnd(0, 9), y = rnd(0, 9);
    if (x === d || y === d) return qCrypt();
    const top = `□${x}`, bot = `${y}□`, Ssum = (10 * d + x) + (10 * y + d);
    const q = `数字谜竖式：${top} + ${bot} = ${Ssum}（同一个□代表同一个数字）。□ 是几？`;
    const exp = `${top} = 10×□+${x}，${bot} = ${y}×10+□，相加 = 11×□ + ${x + 10 * y} = ${Ssum}，解得 □ = (${Ssum} − ${x + 10 * y}) ÷ 11 = ${d}。`;
    return Q(q, opts(d, () => rnd(0, 9)), "进阶", exp, "位值方程·唯一解",
      { name: "gep_crypt", top, bot, sum: String(Ssum) });
  }

  /* ============================================================
   * 5. 最坏保证型（抽屉最坏情形）
   * ============================================================ */
  const COLORS = { red: "红", blue: "蓝", green: "绿", orange: "橙", purple: "紫", pink: "粉" };
  function qWorst() {
    const k = rnd(3, 4), need = rnd(2, 4);
    const cn = shuffle(Object.keys(COLORS)).slice(0, k);
    const bags = cn.map(c => ({ c, name: COLORS[c], n: need + rnd(3, 8) }));
    const ans = (need - 1) * k + 1;
    const q = `袋中有 ${bags.map(b => `${b.name}球 ${b.n} 个`).join("、")}。至少取出几个，才能保证一定取到 ${need} 个同色球？`;
    const exp = `最坏情形：每种颜色先各取到 ${need - 1} 个（共 ${(need - 1) * k} 个），再取 1 个必凑成 ${need} 个同色 → ${ans} 个。`;
    return Q(q, opts(ans, () => ans + pick([-3, -2, 1, 2, k])), "进阶", exp, "最坏情形+1", { name: "gep_bags", bags });
  }

  /* ============================================================
   * 6. 数阵图 · 幻方（每行和已知，空格唯一）
   * ============================================================ */
  function qMagic() {
    const base = [[8, 1, 6], [3, 5, 7], [4, 9, 2]]; // 经典 3×3 幻方
    const s = rnd(2, 3);
    const grid = base.map(r => r.map(v => v * s));
    const magic = 15 * s;
    const r = rnd(0, 2);
    let c = rnd(0, 2);
    if (grid[r][c] === 5 * s) c = (c + 1) % 3; // 中心格 = 幻和/3，避免"中心"成为平凡答案
    const ans = grid[r][c];
    const rowTxt = grid[r].map((v, i) => i === c ? "?" : v).join(" + ");
    const q = `三阶幻方（每行、每列、每条对角线的和都是 ${magic}）。已知第 ${r + 1} 行为 ${rowTxt}（其余条件同题图），问号格是几？`;
    const exp = `该行已知两格之和为 ${grid[r].reduce((a, v, i) => i === c ? a : a + v, 0)}，行和为幻和 ${magic}，故问号 = ${magic} − 已知和 = ${ans}。`;
    return Q(q, opts(ans, () => ans + pick([-s, s, -2 * s, 3, 11 - 5 * s])), "基础", exp, "行和=幻和", { name: "gep_grid", grid, hideR: r, hideC: c, magic });
  }

  /* ============================================================
   * 7. 时钟问题（夹角由公式直接算出）
   * ============================================================ */
  function qClock() {
    const h = rnd(2, 11), m = 2 * rnd(1, 28); // 取偶数分，夹角为整数
    let ang = Math.abs(30 * h - 5.5 * m);
    if (ang > 180) ang = 360 - ang;
    const q = `${h} 点 ${m} 分时，时针与分针的夹角是多少度？`;
    const exp = `时针每分钟走 0.5°、分针每分钟走 6°。夹角 = |30×${h} − 5.5×${m}| = ${Math.abs(30 * h - 5.5 * m)}°${Math.abs(30 * h - 5.5 * m) > 180 ? "，取小于 180° 的一侧 = " + ang + "°" : ""}。`;
    return Q(q, opts(ang, () => { const alt = pick([30 * h - 6 * m, 6 * m - 30 * h, 30 * h, Math.abs(30 * h - 5.5 * m) + 30]); return Math.abs(Math.round(alt)); }), "进阶", exp, "时针0.5°/分·分针6°/分", { name: "gep_clock", h, m });
  }

  /* ============================================================
   * 8. 博弈逻辑（智巧趣题）——答案用 DP 枚举验证
   * ============================================================ */
  function qGame() {
    const n = rnd(8, 20), k = rnd(1, 3);
    const dp = [false];
    for (let i = 1; i <= n; i++) {
      let w = false;
      for (let t = 1; t <= k; t++) if (i >= t && !dp[i - t]) { w = true; break; }
      dp.push(w);
    }
    const firstWins = dp[n];
    const ans = firstWins ? "先手必胜" : "后手必胜";
    const q = `桌上有 ${n} 根火柴，两人轮流取，每次取 1~${k} 根，取到最后一根者获胜（双方都采用最优策略）。谁必胜？`;
    const key = n % (k + 1);
    const exp = `把 ${k + 1} 作为一轮：若 ${n} ÷ ${k + 1} 余 ${key}${key === 0 ? "（整除）" : ""}，${firstWins ? "先手先拿走 " + key + " 根抢占主动，之后每轮凑满 " + (k + 1) + " 根，必胜" : "无论先手怎么取，后手每轮凑满 " + (k + 1) + " 根，后手必胜"}。DP 枚举验证：f(${n})=${firstWins ? "胜" : "负"}。`;
    const arr = shuffle([ans, firstWins ? "后手必胜" : "先手必胜"]);
    return Q(q, { opts: arr, ans: arr.indexOf(ans) }, "进阶", exp, "凑整周期·DP验证");
  }

  /* ---------------- 技巧条目（独立学段 "GEP拓展"） ---------------- */
  const ENTRIES = [
    { id: "gep_count", grade: "GEP思维", stage: "GEP拓展", name: "计数原理（加法·乘法）", anim: null,
      summary: "分类用加法、分步用乘法；判断是『完成一件事的几种途径』还是『几个环节』。",
      kou: "互不重叠用加法，缺一不可用乘法；先分类再分步。",
      steps: ["先问：方案之间是『任选其一』还是『依次完成』？", "分类：各类互不重叠 → 各类方案数相加。", "分步：每步都要走完 → 各步方案数相乘。", "用树状图检查有没有漏类或重类。"],
      questions: [
        { q: "有 2 件上衣、3 条裤子，配成套共有几种穿法？", opts: ["6 种", "5 种", "9 种", "11 种"], ans: 0, level: "基础", explain: "分步：选上衣 2 种 × 选裤子 3 种 = 6 种。", point: "分步乘法" },
        { q: "从 4 个不同城市里选 2 个旅游（不分顺序），共有几种选法？", opts: ["6 种", "12 种", "8 种", "4 种"], ans: 0, level: "进阶", explain: "不分顺序是组合：C(4,2)=6；若 12 是把顺序算重了。", point: "组合除 k!" }
      ] },
    { id: "gep_permcomb", grade: "GEP思维", stage: "GEP拓展", name: "排列与组合", anim: null,
      summary: "A(n,k) 管顺序，C(n,k) 除 k!；先判断题目分不分顺序。",
      kou: "排着站用 A，选出来用 C；C 比 A 少一个 k! 倍。",
      steps: ["判断是否区分顺序（排队/报数=顺序，选组=无顺序）。", "排列 A(n,k)=n×(n−1)×…连乘 k 个。", "组合 C(n,k)=A(n,k)÷k!。", "特殊情形：全排列 n!、C(n,n)=1、C(n,1)=n。"],
      questions: [
        { q: "A(5,2) 等于多少？", opts: ["20", "10", "15", "25"], ans: 0, level: "基础", explain: "A(5,2)=5×4=20。", point: "连乘 k 个" },
        { q: "6 人里选 3 人值日（不分顺序）有多少种？", opts: ["20", "120", "40", "15"], ans: 0, level: "基础", explain: "C(6,3)=120÷3!=20。", point: "除 3!=6" }
      ] },
    { id: "gep_logic", grade: "GEP思维", stage: "GEP拓展", name: "逻辑推理（假设验证）", anim: null,
      summary: "真话谜题按假设逐人验证；排序题抓传递链。构造时保证解唯一。",
      kou: "假设法：轮流假设谁作案，数真话句数，恰一句真才成立。",
      steps: ["列出所有可能情形（谁作案/谁最高）。", "对每种情形逐句判断真假。", "找出唯一让条件成立的情形。", "排序链用传递性：a>b, b>c → a>c。"],
      questions: [
        { q: "甲说「乙说的假话」，乙说「丙说的假话」，丙说「甲乙都在说假话」。若恰有一人说真话，谁说真话？", opts: ["乙", "甲", "丙", "无法确定"], ans: 0, level: "进阶", explain: "假设甲真→乙假→丙真（两句真，矛盾）；假设乙真→甲假（甲说乙假→矛盾）；逐验只有乙真成立。", point: "逐人假设" },
        { q: "已知 小美比小杰高、小杰比小婷高、小婷比小雨高，谁最高？", opts: ["小美", "小杰", "小婷", "小雨"], ans: 0, level: "基础", explain: "传递链：小美>小杰>小婷>小雨，最高是小美。", point: "链式传递" }
      ] },
    { id: "gep_digitcrypt", grade: "GEP思维", stage: "GEP拓展", name: "数字谜（竖式谜）", anim: null,
      summary: "同一个符号代表同一个数字；按位值列方程，解唯一。",
      kou: "□ab 表示 10×□+b 这类位值，列一条方程就够。",
      steps: ["把带符号的数写成位值表达式（十位、个位）。", "按竖式（进位/借位）列方程。", "解方程并检验数字在 0~9 且首位不为 0。"],
      questions: [
        { q: "□3 + 6□ = 107，□ 是几？", opts: ["4", "3", "5", "6"], ans: 0, level: "基础", explain: "(10□+3)+(60+□)=11□+63=107 → 11□=44 → □=4。检验：43+64=107 ✓", point: "位值方程整除" },
        { q: "□1 + 9□ = 113，□ 是几？", opts: ["2", "3", "1", "9"], ans: 0, level: "进阶", explain: "11□+1+90=113 → 11□=22 → □=2。检验：21+92=113 ✓", point: "检验整除" }
      ] },
    { id: "gep_worst", grade: "GEP思维", stage: "GEP拓展", name: "最坏保证型问题", anim: null,
      summary: "『保证一定』要按最坏情形算：每种都差一步时再取一步才稳。",
      kou: "保证 = 最坏情形 + 1；最坏 = 每种都到 (目标−1)。",
      steps: ["按最坏情形想：每种颜色/类别都刚好差一点。", "最坏情形数 = Σ(目标数−1)。", "再取 1 个必然达标 → 答案 = 最坏 + 1。", "注意前提：袋中各类数量必须足够。"],
      questions: [
        { q: "袋中有红蓝黄球各 6 个，至少取几个保证有 2 个同色？", opts: ["4", "3", "7", "6"], ans: 0, level: "基础", explain: "最坏：三色各取 1 个（3 个全不同），再取 1 必配对 → 4 个。", point: "最坏+1" },
        { q: "50 人中保证最少有多少人同月生日？", opts: ["5 人", "4 人", "17 人", "2 人"], ans: 0, level: "基础", explain: "最坏情形尽量均分：12 个月每月 4 人用掉 48 人，剩下 2 人使某月达 5 → 保证 ⌈50÷12⌉=5 人同月。", point: "⌈物体÷抽屉⌉（最坏保证）" }
      ] },
    { id: "gep_magic", grade: "GEP思维", stage: "GEP拓展", name: "数阵图与幻方", anim: null,
      summary: "三阶幻方每行/列/对角线和相等（幻和=3×中心）；已知行缺格=幻和−已知和。",
      kou: "幻和 = 3×中心格；已知行两格，缺格 = 幻和 − 两格和。",
      steps: ["确认每行、每列、两条对角线之和都是幻和。", "中心格 = 幻和 ÷ 3（三阶）。", "对含问号的行/列：缺格 = 幻和 − 已知格之和。", "检验重复数字与对角线约束。"],
      questions: [
        { q: "1~9 填三阶幻方，幻和是多少？", opts: ["15", "14", "16", "20"], ans: 0, level: "基础", explain: "幻和 = 1~9 总和 ÷ 3 行 = 45÷3 = 15。", point: "总和÷3" },
        { q: "某行为 ?、7、6，幻和为 15，问号格是几？", opts: ["2", "1", "8", "5"], ans: 0, level: "进阶", explain: "7+6=13，缺格 = 幻和 15 − 13 = 2。", point: "缺格=幻和−已知和" }
      ] },
    { id: "gep_clock", grade: "GEP思维", stage: "GEP拓展", name: "时钟问题", anim: null,
      summary: "时针 0.5°/分、分针 6°/分；夹角 = |30h − 5.5m|，超 180° 取补角。",
      kou: "30h − 5.5m 是公式核心；追及速度差 5.5°/分。",
      steps: ["时针位置 = 30h + 0.5m（度数）。", "分针位置 = 6m（度数）。", "夹角 = 两者差，超过 180° 取 360°−差。", "重合问题：分针追时针，追及时间 = 差距 ÷ 5.5。"],
      questions: [
        { q: "3 点 20 分时时针与分针夹角？", opts: ["20°", "30°", "50°", "90°"], ans: 0, level: "进阶", explain: "|30×3 − 5.5×20| = |90 − 110| = 20°。", point: "公式 30h−5.5m" },
        { q: "3 点后分针第一次与时针重合大约是什么时刻？", opts: ["约 3 点 16.4 分", "约 3 点 15 分", "约 3 点 20 分", "约 3 点 30 分"], ans: 0, level: "进阶", explain: "3 点整时针在 90°，分针追 90°，速度差 5.5°/分 → 90÷5.5 ≈ 16.36 分。", point: "追及 5.5°/分" }
      ] },
    { id: "gep_game", grade: "GEP思维", stage: "GEP拓展", name: "博弈逻辑（取物游戏）", anim: null,
      summary: "取最后者胜：把每轮凑成固定周期 (k+1)，谁抢到余数谁赢；用 DP 枚举验证。",
      kou: "每次取 1~k，周期是 k+1；n 除以 k+1 有余数 → 先手拿余数抢主动。",
      steps: ["从最后往前推：剩 1~k 根者胜，剩 k+1 根者必败（轮次陷阱）。", "必胜态/必败态交替，周期为 k+1。", "n ≡ 0 (mod k+1) → 后手必胜；否则先手取余数后占陷阱。", "用 DP 枚举 f(i) 验证小规模结论。"],
      questions: [
        { q: "15 根火柴，每次取 1~2 根，取最后一根者胜，谁必胜？", opts: ["后手", "先手", "平局", "无法确定"], ans: 0, level: "进阶", explain: "15 ÷ 3 = 5 整除 → 先手怎么取，后手凑 3 → 后手胜。", point: "整除周期→后手" },
        { q: "22 根火柴，每次取 1~3 根，取最后一根者胜，先手第一步应取几根才能必胜？", opts: ["2 根", "1 根", "3 根", "先手必胜不了"], ans: 0, level: "进阶", explain: "22 mod 4 = 2：先手取 2 根后剩 20（4 的倍数，即后手踩进必败态），此后先手每轮凑 4。DP 验证 f(22)=先手胜。", point: "抢余数占陷阱" }
      ] }
  ];
  if (window.TECHNIQUES) ENTRIES.forEach(e => { e.gep = true; window.TECHNIQUES.push(e); });

  const GEN = { gep_count: qCount, gep_permcomb: qPermComb, gep_logic: qLogic, gep_digitcrypt: qCrypt,
               gep_worst: qWorst, gep_magic: qMagic, gep_clock: qClock, gep_game: qGame };
  if (window.TECHNIQUES) {
    window.TECHNIQUES.forEach(t => {
      if (GEN[t.id]) t.qgen = function (n) { const out = []; for (let i = 0; i < (n || 6); i++) { const q = GEN[t.id](); if (q) out.push(q); } return out; };
    });
  }
  window.QGEN_GEP_READY = true;
})();
