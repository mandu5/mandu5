## Youngmin Ko

AI Forward Deployed Engineer at KRAFTON. I go into business teams, turn the work they repeat by hand into AI systems, and build the evaluation first so the results can be trusted.

**At work**
- Rebuilt the evaluation for a support-ticket classifier after a 100% score turned out to be an artifact of single-class test data. On a two-class set the legacy rules scored 2%; the new rules score 72%.
- Labeled 31,000+ Chinese-language tickets with Claude batch processing, 87% correct on a human spot check.
- Run 13 Claude agent jobs that work with no one watching. A job counts as done only when there is a delivery record.

**Research**
- Sole author, under review at DMLR. The often-quoted 31% rank-flip rate between anomaly-detection metrics sits below its 50% chance level; where both metrics clearly separate two models, they disagree 2% of the time. [Project page](https://tsad-eval-site.onrender.com/) · [code](https://github.com/mandu5/structure-aware-tsad-evaluation)

**Open source**

| | |
|---|---|
| [jobradar](https://github.com/mandu5/jobradar) | Reads every job posting in full and grades it against your own rubric with Claude Code. I run it every day; it has sorted 2,000+ postings so far. |
| [sessionreel](https://github.com/mandu5/sessionreel) | Turns a Claude Code session log into a 30–60 second recap video. Local, redacted, on PyPI. |
| [claude-drift](https://github.com/mandu5/claude-drift) | Replays your own Claude Code sessions against a new model to show what actually changed. On PyPI. |
| [jevcompat](https://github.com/mandu5/jevcompat) | A testable spec and conformance suite for Jev-compatible API servers. |
| [UGV-MON](https://github.com/mandu5/RealTimeDashboard) | Anomaly detection for unmanned ground vehicle communications, built in eight weeks at Hanwha Aerospace with no labeled data. |

[mandu05.com](https://mandu05.com) · rhdudals0505@naver.com
