"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Remove blogImages array

const blogPosts = [
  {
    title: "Quant Interview Brain Teasers – From Experience",
    date: "February 12, 2025",
    category: "Career & Interviews",
    description: "Real quant interview brain teasers, how I approached them, and what they reveal about the process.",
    image: "/blog-1.png",
    featured: true,
    content: (
      <div>
        <h1 className="text-3xl font-extrabold text-green-400 mb-4">Quant Interview Brain Teasers – From Experience</h1>
        <p className="mb-4">If you&apos;re preparing for quant interviews, you&apos;ve probably seen lists of brain teasers, probability puzzles, and logic riddles that show up in technical rounds. I used to treat them like trivia something to memorize and move on from. But after going through a dozen actual interviews, I realized that brain teasers are less about the &quot;gotcha&quot; and more about showing how you think when there&apos;s no obvious path forward.</p>
        <p className="mb-4">This post is about the brain teasers I&apos;ve faced in real interviews, how I approached them, what went well, and what didn&apos;t. I&apos;m not going to list 100 puzzles. I&apos;ll share four that stuck with me and what they revealed about the interview process and myself.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">1. The Biased Coin</h2>
        <p className="mb-4"><em>&quot;You have a coin that lands heads with unknown bias p (0 &lt; p &lt; 1). How can you simulate a fair coin toss?&quot;</em></p>
        <p className="mb-4">This one caught me off guard not because I hadn&apos;t seen it before, but because I couldn&apos;t remember the solution on the spot. I froze for a moment, then remembered to step back. I said: &quot;Let me think through it step by step.&quot;</p>
        <p className="mb-4">Eventually, I landed on the von Neumann approach: flip the coin twice. If the result is HT, return Heads. If it&apos;s TH, return Tails. Otherwise, repeat. This works because HT and TH are equally likely, regardless of p.</p>
        <p className="mb-4">What helped was <em>not</em> rushing. I talked through my logic slowly, which reassured the interviewer I was methodical, not clueless.</p>
        <p className="mb-4"><strong>Lesson learned:</strong> when you&apos;re stuck, narrate your reasoning clearly. Interviewers are often more interested in your process than your speed.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">2. The Expected Number of Dice Rolls</h2>
        <p className="mb-4"><em>&quot;You roll a fair six-sided die until you get a six. What is the expected number of rolls?&quot;</em></p>
        <p className="mb-4">This one was easier classic geometric distribution. I answered: the expected number is 1/p, where p = 1/6, so 6.</p>
        <p className="mb-4">But what made this question interesting was the follow-up: <em>&quot;What if you wanted to get two sixes in a row?&quot;</em></p>
        <p className="mb-4">That threw me off. It&apos;s no longer a memoryless problem. I tried breaking it into states:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>State 0: No six yet</li>
          <li>State 1: Just rolled one six</li>
          <li>State 2: Success (two in a row)</li>
        </ul>
        <p className="mb-4">I set up recursive expectations for each state and wrote out a system of equations. Eventually I got it, but what stuck with me was the silence. The interviewer didn&apos;t jump in. I had to stay calm while working through math I hadn&apos;t done in a while.</p>
        <p className="mb-4"><strong>Lesson learned:</strong> interviewers often want to see if you&apos;ll panic or organize your thoughts when things get layered.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">3. The Light Bulb Puzzle</h2>
        <p className="mb-4"><em>&quot;You&apos;re in a room with three light switches. One controls a bulb in the next room. You can flip the switches any way you like, but you can only enter the other room once. How do you figure out which switch controls the bulb?&quot;</em></p>
        <p className="mb-4">I&apos;d heard this before but still hesitated. My mind went blank for a second.</p>
        <p className="mb-4">Then I said, &quot;Let me try interacting with the problem physically.&quot; I described how I&apos;d flip the first switch on for a minute, turn it off, then flip the second one on and walk in. If the bulb is on, it&apos;s the second. If it&apos;s off but warm, it&apos;s the first. If it&apos;s off and cold, it&apos;s the third.</p>
        <p className="mb-4">The interviewer smiled. Not because it was hard, but because I didn&apos;t give up after freezing.</p>
        <p className="mb-4"><strong>Lesson learned:</strong> if your mind goes blank, it doesn&apos;t mean you&apos;ve failed. Reset, start from basic principles, and walk through the scenario out loud.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">4. The Envelope Paradox</h2>
        <p className="mb-4"><em>&quot;Two envelopes: one has twice as much money as the other. You pick one. Should you switch?&quot;</em></p>
        <p className="mb-4">This one gets you thinking. If you try to calculate expected values without constraints, you end up with a paradox suggesting you should always switch. I talked about the ambiguity of not knowing the distribution of values, which makes the expected value calculation meaningless without more information.</p>
        <p className="mb-4">We ended up having a discussion not a Q&A about assumptions, priors, and when expectation math can go wrong. That was the best part of the interview.</p>
        <p className="mb-4"><strong>Lesson learned:</strong> brain teasers aren&apos;t just logic traps. Sometimes they open the door to real conversations about modeling uncertainty and risk.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">How I Prepared</h2>
        <p className="mb-4">I didn&apos;t prepare by memorizing 100 problems. I practiced solving <em>10 problems well</em>. Each one, I forced myself to:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Solve from scratch</li>
          <li>Explain out loud</li>
          <li>Explore variants</li>
          <li>Write up a clean solution</li>
        </ul>
        <p className="mb-4">I also practiced thinking under time pressure. You don&apos;t need to be perfect. You just need to stay calm, structured, and humble.</p>
        <p className="mb-4">And finally: in every interview where I did well, I was honest when I got stuck and curious enough to keep going.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Final Thoughts</h2>
        <p className="mb-4">Brain teasers can feel intimidating. But they&apos;re really about how you reason under pressure. What matters isn&apos;t how fast you get to the answer. It&apos;s how clearly you explain your thinking, how you handle not knowing something, and how you recover when things go sideways.</p>
        <p className="mb-4">Don&apos;t approach these problems as a test of intelligence. Approach them like puzzles you&apos;re genuinely interested in solving. That mindset will help you more than anything else.</p>
      </div>
    ),
  },
  {
    title: "Why I Left Software Engineering to Become a Quant",
    date: "April 26, 2025",
    category: "Career & Transition",
    description: "A personal story about moving from software engineering to quant finance, and what made the leap worth it.",
    image: "/blog-2.png",
    featured: false,
    content: (
      <div>
        <h1 className="text-3xl font-extrabold text-green-400 mb-4">Why I Left Software Engineering to Become a Quant</h1>
        <p className="mb-4">I spent years working as a software engineer. I built systems, debugged problems at scale, shipped code that people used. And I liked it especially the technical challenges. But the more time I spent in the industry, the more I felt like something was missing.</p>
        <p className="mb-4">At some point, I realized I wasn&apos;t just interested in writing good code I was interested in solving <em>problems that required deeper thinking, more modeling, more abstraction</em>. I wanted to build systems that interacted with uncertainty, that handled tradeoffs, that reflected human behavior in unpredictable environments.</p>
        <p className="mb-4">That&apos;s when I started looking into quantitative finance.</p>
        <p className="mb-4">I didn&apos;t know what a quant really did at first. Like most people, I had this vague idea that it involved math, trading, and hedge funds. But once I started digging deeper, I found something I hadn&apos;t felt in a long time: I was <em>hooked</em>.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">What drew me in</h2>
        <p className="mb-4">There were a few things that pulled me in.</p>
        <p className="mb-4">First, I loved the blend of theory and practice. Quant roles aren&apos;t just about writing code they&apos;re about understanding risk, modeling uncertainty, analyzing behavior, and making data-driven decisions under pressure. That combination of intellectual rigor and real-world application felt exciting.</p>
        <p className="mb-4">Second, I missed the feeling of learning something hard. I&apos;d gotten comfortable as a software engineer. I wanted to feel stretched again. Studying stochastic processes, portfolio theory, optimization it gave me the same feeling I&apos;d had when I first learned to program.</p>
        <p className="mb-4">And finally, I liked the culture of clarity that good quant work demands. You can&apos;t hand-wave your way through a pricing model. You have to understand your assumptions, defend your logic, and be honest about what your model can and can&apos;t do. That felt intellectually honest in a way I respected.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Making the jump</h2>
        <p className="mb-4">It wasn&apos;t easy. I knew I needed to fill in gaps probability theory, derivatives pricing, fixed income. I enrolled in the Master of Mathematical Finance program at the University of Toronto, and for the first time in years, I was back in lectures, problem sets, and late-night debugging sessions but now with volatility surfaces instead of APIs.</p>
        <p className="mb-4">I also started building projects that reflected this new focus: pricing engines, hedging strategies, signal research. It wasn&apos;t always clean, but it gave me context. I started seeing how software and math came together in real ways how a good model still needs clean implementation, and how good code can only take you so far without domain knowledge.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">How my engineering background helped</h2>
        <p className="mb-4">Leaving engineering didn&apos;t mean abandoning it. In fact, it&apos;s been one of my biggest advantages.</p>
        <p className="mb-4">Most quant teams are short on people who can build reliable systems. I&apos;ve worked on production pipelines. I know how to debug weird edge cases. I&apos;ve been part of teams that ship under pressure. That gives me a practical lens when I approach a modeling problem: How will this scale? What are the failure modes? What&apos;s the testing framework?</p>
        <p className="mb-4">In interviews, this came up again and again. I wasn&apos;t the pure math person. But I could bridge the gap between research and production. That turned out to be valuable.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Looking back</h2>
        <p className="mb-4">I didn&apos;t leave software engineering because I didn&apos;t like it. I left because I found something I liked more.</p>
        <p className="mb-4">Quant finance let me re-engage with math in a serious way. It gave me a space to build and reason, not just ship. And it let me apply everything I&apos;d learned as an engineer to a new domain that challenged me intellectually and professionally.</p>
        <p className="mb-4">I don&apos;t think there&apos;s a &quot;right&quot; path into quant roles. But for me, this one made sense. I was ready for a shift, and I wanted something that felt harder, more meaningful, and more rewarding.</p>
        <p className="mb-4">If you&apos;re thinking about making a similar move, my advice is: don&apos;t try to reinvent yourself. Bring what you already have. Learn what you need to learn. And find the intersection between the two. That&apos;s where the opportunity usually is.</p>
      </div>
    ),
  },
  {
    title: "Cracking the Credit Code: How Credit Ratings Actually Work",
    date: "May 13th 2025",
    category: "Quant Finance",
    description: "A deep dive into what credit ratings really mean, how they&apos;re determined, and how quants use them in practice.",
    image: "/blog-3.png",
    featured: false,
    content: (
      <div>
        <blockquote className="italic text-green-200 border-l-4 border-green-400 pl-4 mb-6">&quot;Credit risk is like oxygen it&apos;s invisible, but everything depends on it.&quot;</blockquote>
        <p className="mb-4">At some point, most people come across the term <em>credit rating</em> in a news article about sovereign debt, on a corporate bond prospectus, or while applying for a mortgage. Yet despite being central to how capital flows in modern economies, credit ratings remain misunderstood by many.</p>
        <p className="mb-4">Are they objective measures? Are they reliable? Who decides what gets rated AAA or junk?</p>
        <p className="mb-4">This post breaks it down from the lens of someone transitioning into quantitative finance, combining theory, modeling, and firsthand experience from valuation internships.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">What Is a Credit Rating?</h2>
        <p className="mb-4">A <strong>credit rating</strong> is an assessment of the likelihood that a borrower be it a corporation, country, or structured product will default on its financial obligations.</p>
        <p className="mb-4">It&apos;s not a score like a GPA. It&apos;s a structured <strong>opinion</strong>, issued by credit rating agencies like <strong>Moody&apos;s</strong>, <strong>S&amp;P</strong>, and <strong>Fitch</strong>, based on historical data, projections, financial ratios, and qualitative analysis.</p>
        <h3 className="text-xl font-bold text-green-300 mt-6 mb-2">Visual: Credit Rating Scale Chart</h3>
        <table className="mb-4 w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-900 text-green-200">
              <th className="p-2">Grade</th>
              <th className="p-2">S&amp;P/Fitch</th>
              <th className="p-2">Moody&apos;s</th>
              <th className="p-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-green-800">
              <td className="p-2">Investment Grade</td>
              <td className="p-2">AAA – BBB-</td>
              <td className="p-2">Aaa – Baa3</td>
              <td className="p-2">Very low to moderate risk</td>
            </tr>
            <tr>
              <td className="p-2">Speculative (&quot;Junk&quot;)</td>
              <td className="p-2">BB+ – D</td>
              <td className="p-2">Ba1 – C</td>
              <td className="p-2">High risk to default</td>
            </tr>
          </tbody>
        </table>
        <div className="mb-4 text-green-200 text-sm">📌 <em>Note: A downgrade from BBB- to BB+ is considered a &quot;fallen angel&quot; and it matters a lot to institutional investors.</em></div>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Who Gets Rated?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Sovereign debt (governments)</li>
          <li>Corporate bonds</li>
          <li>Structured products (e.g., MBS, CLOs)</li>
          <li>Municipal bonds</li>
        </ul>
        <p className="mb-4">Not every issuer is rated. Ratings are typically <strong>requested and paid for by the borrower</strong>, which introduces the most common criticism of the system.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">The Issuer-Pays Model: Conflict or Convenience?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Funds the operations of agencies</li>
          <li>Creates potential <strong>conflicts of interest</strong></li>
          <li>Was one of the key culprits cited in the <strong>2008 financial crisis</strong></li>
        </ul>
        <p className="mb-4">Despite regulatory reforms, the incentive to rate favorably for business retention hasn&apos;t disappeared entirely.</p>
        <div className="mb-4 text-green-200 text-sm"><em>Visual Idea: A simple infographic showing a triangle with &quot;Issuer,&quot; &quot;Rating Agency,&quot; and &quot;Investor&quot; and arrows labeled &quot;Payment,&quot; &quot;Opinion,&quot; and &quot;Trust.&quot;</em></div>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Credit Ratings vs Market Signals</h2>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Credit ratings lag</strong> → updated slowly</li>
          <li><strong>Credit spreads</strong> (bond yields vs gov&apos;t yields) react in real time</li>
        </ul>
        <p className="mb-4">Smart investors often use ratings as a <strong>baseline</strong>, then layer market-based metrics for decision-making.</p>
        <div className="mb-4 text-green-200 text-sm"><em>Visual Idea: Line chart comparing bond spread movement vs. credit rating changes for a given issuer over time.</em></div>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">How Quants Model Credit Risk</h2>
        <p className="mb-4">There are three primary approaches:</p>
        <h3 className="text-lg font-bold text-green-300 mt-4 mb-1">1. Structural Models</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Based on Merton&apos;s model</li>
          <li>Default occurs when firm value &lt; liabilities at maturity</li>
        </ul>
        <h3 className="text-lg font-bold text-green-300 mt-4 mb-1">2. Reduced-Form Models</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Treat default as a stochastic jump process (hazard rate-based)</li>
        </ul>
        <h3 className="text-lg font-bold text-green-300 mt-4 mb-1">3. Machine Learning Models</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Use structured data (e.g., financial ratios, macro) + unstructured data (news, sentiment)</li>
          <li>Predict downgrade probabilities or credit events</li>
        </ul>
        <p className="mb-4">Each approach has trade-offs between interpretability, calibration effort, and real-time responsiveness.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">My Internship Experience with Credit Ratings</h2>
        <p className="mb-4">During my internship at <strong>KPMG&apos;s Complex Financial Instruments group</strong>, I worked directly with credit ratings when valuing uncollateralized swaps, PSUs, and structured equity instruments.</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Used <strong>issuer ratings from Bloomberg</strong> to determine appropriate <strong>credit spreads</strong></li>
          <li>Translated ratings into <strong>probability of default (PD)</strong> using Moody&apos;s tables</li>
          <li>For unrated firms, used <strong>internal scores or comparable issuers</strong></li>
        </ul>
        <p className="mb-4">In some cases, we challenged the external rating because the market was pricing the issuer as riskier than the rating implied. This experience taught me the importance of treating ratings as <strong>one input</strong>, not the final word.</p>
        <div className="mb-4 text-green-200 text-sm"><em>Visual: Table with 3 instruments → counterparty → credit rating → applied spread</em></div>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Practical Use Cases for Ratings in Quant Work</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Valuation models (e.g., CVA adjustments, risk premia)</li>
          <li>Portfolio filtering (e.g., only buy IG bonds)</li>
          <li>Regulatory reporting (Basel capital rules)</li>
          <li>Stress testing (simulate downgrades)</li>
          <li>Backtesting strategies that incorporate rating transitions</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Are Ratings Still Useful?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Deeply embedded</strong> in regulation</li>
          <li>Trusted for <strong>baseline filtering</strong></li>
          <li>Used by <strong>non-quant teams</strong> across finance</li>
        </ul>
        <p className="mb-4">For quants, understanding how they&apos;re built and how they&apos;re used allows you to build better models and avoid misinterpreting what a rating really means.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Final Thoughts</h2>
        <p className="mb-4">Credit ratings aren&apos;t magic numbers. They&apos;re informed opinions built on data, judgment, and sometimes legacy. But in a world where capital is governed by risk assessments, they matter more than many realize.</p>
        <p className="mb-4">As someone who transitioned into finance from a software engineering background, credit ratings were a concrete example of where theory meets systems. Understanding them helped me better communicate with stakeholders, improve valuation models, and design workflows that aligned with market standards.</p>
        <p className="mb-4">In a field where assumptions quietly shape outcomes, ratings are one of the loudest silent assumptions. Best to know where they&apos;re coming from.</p>
      </div>
    ),
  },
  {
    title: "Thoughts on the Quant Job Market: Trends, Frustrations, and What I've Learned",
    date: "June 02 2025",
    category: "Career",
    description: "A grounded, personal take on the realities of breaking into quant finance, what actually matters, and what I wish I knew starting out.",
    image: "/blog-4.png",
    featured: false,
    content: (
      <div>
        <h1 className="text-3xl font-extrabold text-green-400 mb-4">Thoughts on the Quant Job Market: Trends, Frustrations, and What I've Learned</h1>
        <p className="mb-4">When I first started exploring quant roles, I kept hearing the same refrains: the market is saturated, it&rsquo;s harder to break in than it used to be, and you probably need a PhD. But after going through the process myself&mdash;applying to a mix of research, valuations, and analytics roles&mdash;I&rsquo;ve realized that while those points aren&rsquo;t entirely wrong, they&rsquo;re definitely not the whole story.</p>
        <p className="mb-4">The quant job market today is complex. It&apos;s not just about skill anymore it&apos;s about how your specific skill set lines up with a very specific kind of role. In this post, I&apos;ll share what I&apos;ve seen, what surprised me, and what actually helped along the way.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">It&apos;s not about being &quot;good enough&quot; in general it&apos;s about being a fit</h2>
        <p className="mb-4">I used to think that if I could get really good at Python, math, and finance, I&apos;d be set. That helped, but it wasn&apos;t enough. What I&apos;ve realized is that most quant roles are hyper-specific. One job might want someone to build pricing models in C++. Another might be focused on alpha signal research using alternative data. Another might be more analytics-focused, where communication and business context matter more than theoretical math.</p>
        <p className="mb-4">You can&apos;t just be &quot;generally good.&quot; You have to show that you understand the type of quant they need and that you&apos;re that person. That shift in thinking changed how I approached applications and interviews.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Internships still matter more than anything</h2>
        <p className="mb-4">If you&apos;ve never worked in finance before, getting that first opportunity is hard. What helped me was my internship at KPMG in the Valuations – Complex Financial Instruments group. I wasn&apos;t on a trading desk, but I was building real models working on things like swaps, PSUs, and credit adjustments. More importantly, I was learning how financial models are actually used in a professional context.</p>
        <p className="mb-4">That experience gave me stories to tell in interviews. It gave me credibility. It gave me insight into how risk is priced, how assumptions get challenged, and how financial theory shows up in Excel sheets and Python code. If you&apos;re early in your journey, I&apos;d say this: get in wherever you can. Titles don&apos;t matter. Exposure does.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">There isn&apos;t one &quot;quant&quot; job market there are many</h2>
        <p className="mb-4">This was a big realization for me. We talk about &quot;quant jobs&quot; like they&apos;re one thing, but they&apos;re not. There&apos;s buy-side research, sell-side model validation, trading infrastructure, risk modeling, fintech strategy, and even valuation consulting like the work I did. And each of these spaces values different strengths.</p>
        <p className="mb-4">Some care deeply about academic research. Others want people who can ship code in production. Some need sharp statistics. Others are looking for financial intuition or communication skills. Once I figured out where my strengths actually fit, I started having better conversations.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">What I&apos;ve seen lately</h2>
        <p className="mb-4">Over the past year, I&apos;ve noticed a few trends from conversations, job boards, and interviews:</p>
        <p className="mb-4">First, there&apos;s been a noticeable shift toward practicality. Employers aren&apos;t as impressed by credentials alone they want people who can write clean code, reason through noisy data, and work with constraints. I&apos;ve been asked more often about things I&apos;ve built than things I&apos;ve studied.</p>
        <p className="mb-4">Second, Python has become the baseline. C++ still matters at some firms, especially in high-frequency trading or exotic derivatives, but Python is the dominant language for most research and analytics work.</p>
        <p className="mb-4">Third, the hiring bar is high but it&apos;s not just academic. It&apos;s about showing that you can think clearly, solve problems under pressure, and adapt. Whether that&apos;s through interviews, projects, or case studies, being able to walk someone through your thought process is just as important as getting to the right answer.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Coming from outside the bubble</h2>
        <p className="mb-4">I didn&apos;t grow up with this industry. I&apos;m originally from Zimbabwe, and by 25, I&apos;d lived in three countries. Quant finance wasn&apos;t something I was exposed to early. I had to find it later and catch up fast.</p>
        <p className="mb-4">That meant learning the terminology, building side projects, finding mentors, and sometimes just figuring things out from scratch. I didn&apos;t go to an Ivy League undergrad or spend summers at investment banks. What helped me was staying curious and finding ways to apply my skills in context whether that meant building a hedging simulator in Python or trying to replicate a risk model from scratch.</p>
        <p className="mb-4">If you&apos;re coming from a similar place geographically or educationally don&apos;t let it shake your confidence. It&apos;s possible to catch up. You just have to be strategic with your time and intentional with what you build.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">What&apos;s actually helped</h2>
        <p className="mb-4">Looking back, a few things made the biggest difference for me.</p>
        <p className="mb-4">One was working on personal projects that mirrored the kind of thinking quant roles require. I built backtesting tools, stress testing simulations, and experimented with signal strategies. Even if they weren&apos;t perfect, they taught me how to think and gave me something concrete to talk about.</p>
        <p className="mb-4">Another was talking to real people. Classmates, alumni, friends already working in the field. Those conversations taught me more than any prep guide ever could. They helped me refine how I described my skills and what I should focus on.</p>
        <p className="mb-4">And lastly, just accepting that rejection is part of the process. Not every firm will respond. Some interviews will go badly. But you only need a few to work out. And each round of prep makes you sharper.</p>
        <h2 className="text-2xl font-bold text-green-400 mt-8 mb-2">Final thoughts</h2>
        <p className="mb-4">The quant job market isn&apos;t easy but it&apos;s not closed off either. It rewards people who can do the work, explain their thinking, and keep learning. You don&apos;t need to be a genius. But you do need to be focused, realistic, and open to feedback.</p>
        <p className="mb-4">If you&apos;re in the middle of the search right now, hang in there. Know what kind of quant you want to be. Show that you understand the space. And don&apos;t underestimate how much your own path however non-traditional can work in your favor when you frame it right.</p>
      </div>
    ),
  },
];

const tags = [
  "Brain Teasers",
  "Interviews",
  "Quant",
  "Credit",
  "Ratings",
  "Career",
  "Software Engineering",
  "Transition",
  "Job Market",
  "Personal Journey"
];

export default function BlogPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null); // index in blogPosts
  const cards = blogPosts.slice(1);
  const showBlog = (idx: number) => {
    setSelected(idx);
    setDrawerOpen(true);
  };
  const closeBlog = () => {
    setSelected(null);
    setDrawerOpen(false);
  };

  // Add/remove 'drawer-open' class to <body> for global CSS
  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
    // Clean up on unmount
    return () => {
      document.body.classList.remove('drawer-open');
    };
  }, [drawerOpen]);

  return (
    <div className={`min-h-screen w-full bg-[#07190e] flex flex-col items-center pt-16 px-2 relative${drawerOpen ? ' drawer-open' : ''}`}>
      {/* Floating More Posts Button (only show if not in expanded view) */}
      {!drawerOpen && selected === null && (
        <button
          onClick={() => setDrawerOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-green-700 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="More Posts"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span className="hidden sm:inline font-semibold">More Posts</span>
        </button>
      )}
      {/* Slide-In Drawer (no overlay/blur) */}
      {drawerOpen && (
        <div className="fixed inset-y-0 right-0 z-50 flex">
          {/* Drawer Panel */}
          <aside className="ml-auto w-80 max-w-full h-full bg-[#10241b] shadow-2xl border-l border-green-900 flex flex-col p-6 gap-4 transition-transform duration-300 animate-slide-in-right relative">
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-4 right-4 text-green-300 hover:text-green-400 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-xl font-bold text-green-400 mb-2">Others You May Like</h3>
            <div className="flex flex-col gap-4 overflow-y-auto pr-2" style={{ maxHeight: 'calc(100vh - 80px)' }}>
              {blogPosts.map((post, i) => (
                <button
                  key={i}
                  onClick={() => { setSelected(i); setDrawerOpen(true); }}
                  className={`group block w-full text-left bg-[#183524] rounded-xl p-4 shadow hover:bg-green-900/30 transition border border-green-900${selected === i ? ' animate-pulse-border' : ''}`}
                >
                  <div className="text-base font-semibold text-green-200 group-hover:text-green-300 mb-1 truncate">{post.title}</div>
                  <div className="text-green-100/80 text-sm mb-1 truncate">{post.description}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 rounded-full bg-green-900 text-green-200 text-xs font-semibold border border-green-800">{post.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}
      {/* Main Blog Layout */}
      <div className={`flex flex-col md:flex-row gap-8 transition-all duration-300 ${drawerOpen ? 'ml-0 mr-[22rem] max-w-4xl justify-center' : 'w-full max-w-6xl mx-auto'}`}>
        {/* Left: Main Blog Section */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Featured Post */}
          {selected === null && (
            <div className={`bg-[#10241b] rounded-2xl shadow-2xl p-8 flex flex-row gap-6 items-center min-h-[220px] transition-transform duration-300${drawerOpen ? ' scale-95' : ''}`}>
              <div className="flex-1 flex flex-col gap-2 justify-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-green-400 mb-1 leading-tight">{blogPosts[0].title}</h2>
                <div className="text-green-200 text-base mb-1 font-medium">{blogPosts[0].date} ・ {blogPosts[0].category}</div>
                <div className="text-green-100/90 text-base mb-4 leading-relaxed">{blogPosts[0].description}</div>
                <button onClick={() => showBlog(0)} className="w-fit px-5 py-2 rounded-md bg-green-700 hover:bg-green-600 text-white font-semibold text-base transition focus:outline-none focus:ring-2 focus:ring-green-400">Read More</button>
              </div>
              <div className="w-48 h-36 flex items-center justify-center bg-[#07190e] rounded-xl overflow-hidden">
                <Image src={blogPosts[0].image} alt="Blog visual" className="w-full h-full object-cover" fill priority sizes="100vw" />
              </div>
            </div>
          )}
          {/* Blog List or Expanded Blog */}
          {selected === null ? (
            <div className="flex flex-col gap-8 w-full">
              {cards.map((post, i) => (
                <div key={i} className={`bg-[#10241b] rounded-2xl shadow-2xl px-8 py-6 flex flex-row gap-6 w-full min-h-[220px] max-h-[350px] items-center border border-green-900/30 mx-2 transition-transform duration-300${drawerOpen ? ' scale-95' : ''}`}>
                  <div className="flex-1 flex flex-col gap-2 justify-center">
                    <h3 className="text-2xl font-bold text-green-400 mb-1 leading-tight">{post.title}</h3>
                    <div className="text-green-200 text-base mb-1 font-medium">{post.category}</div>
                    <div className="text-green-100/90 text-base mb-3 leading-relaxed max-w-2xl">{post.description}</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <button onClick={() => showBlog(i + 1)} className="px-4 py-1 rounded-md bg-green-700 hover:bg-green-600 text-white font-semibold text-base transition">Read More</button>
                      {post.title === "Stochastic Calculus for P&L Attribution" && (
                        <>
                          <span className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold">Finance</span>
                          <span className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold">Python</span>
                          <span className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold">Backtesting</span>
                        </>
                      )}
                      {post.title === "Thoughts on the Quant Job Market!" && (
                        <>
                          <span className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold">Finance</span>
                          <span className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold">Quantitative Research</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="w-48 h-36 flex items-center justify-center bg-[#07190e] rounded-xl overflow-hidden">
                    <Image src={post.image} alt="Blog visual" className="w-full h-full object-cover" fill priority sizes="100vw" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full min-h-[80vh] bg-[#07190e] flex justify-center items-start py-12 px-2">
              <div className="w-full max-w-3xl mx-auto flex flex-col items-start px-6">
                <h1 className="text-3xl md:text-4xl font-extrabold text-green-400 mb-4 leading-tight">{blogPosts[selected].title}</h1>
                <div className="text-green-200 text-lg mb-1 font-medium">Aubrey Tsambatare</div>
                <div className="text-green-200 text-base mb-6 font-medium italic">April 18, 2025 ・ <span className="not-italic font-normal">{blogPosts[selected].category}</span></div>
                <div className="text-green-100/90 text-base mb-6 leading-relaxed">
                  {blogPosts[selected].content}
                </div>
                <button onClick={closeBlog} className="mt-8 px-5 py-2 rounded-md bg-green-700 hover:bg-green-600 text-white font-semibold text-base transition self-center">Back to All Posts</button>
              </div>
            </div>
          )}
        </div>
        {/* Sidebar: Only show when not in expanded view */}
        {selected === null && !drawerOpen && (
          <aside className="w-full md:w-80 flex flex-col gap-8 mt-8 md:mt-0">
            <div className="bg-[#10241b] rounded-2xl shadow-xl p-6 mb-2">
              <h3 className="text-xl font-bold text-green-400 mb-4">Recently Posted</h3>
              <ul className="flex flex-col gap-2">
                {blogPosts.slice(1, 6).map((post, i) => (
                  <li key={i}>
                    <a href="#" className="text-green-300 hover:text-green-400 transition-colors text-base font-medium block truncate">
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#10241b] rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold border border-green-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
} 