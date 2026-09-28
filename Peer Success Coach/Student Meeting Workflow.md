# Student Meeting Workflow (draft v1)

*Draft workflow, 27 Sep 2026. All examples are generic. No real student information.*

## The goal
Claude handles the busywork around each 30-minute student meeting: the research beforehand, the notes and paperwork afterward, and tracking over time. That leaves you free to focus on the student during the meeting. The workflow is the same for every student, so once it works for one it works for all ~50.

## Ground rules
- **Nothing gets sent automatically.** Emails are saved as drafts and system summaries are filled in but not submitted. You review, edit and send or submit everything yourself.
- **Record only with consent.** At the start of each meeting, say something like "I'm going to record this for my notes, is that okay?"
- **Check before using real student data.** Grades, GPAs and advising notes are FERPA-protected. Before running real student records through Claude, confirm with your supervisor that USU allows this, and whether an approved tool or account is required. Until then, test with made-up or anonymized students.

---

## Stage 1 — Before the meeting: "Prep [student]"
**You say:** "Prep my meeting with [student]."

**Claude:**
1. Pulls what the student said they want to work on (from the booking).
2. Pulls their profile: degree, GPA, and grades in each class compared with the class average.
3. Reads past notes from you, their college advisor and anyone else who has met with them.
4. Reads last meeting's plan and checks what changed since then.
5. Produces a **one-page prep sheet** with:
   - Snapshot: major, GPA and trend, stated goal
   - **Red flags:** outliers such as a low grade in one class, a dropping grade or a missed follow-up
   - Last meeting's goal and whether it seems to have happened
   - 2–3 suggested questions to get below the surface ("they say study skills, but is it really something else?")

**Meeting plan it follows (your usual 30 minutes):**
| Time | Part |
|---|---|
| 0–5 min | Get to know them, build rapport |
| 5–15 min | Find what's underneath what they asked for |
| 15–25 min | Choose **one** thing, set a goal and make a plan |
| 25–30 min | Confirm next steps and schedule a follow-up in about 2 weeks |

## Stage 2 — During the meeting
- Record the meeting (with consent).
- Stay present. Say ideas and resources out loud ("I'll send you the tutoring center link") so they end up in the recording.

## Stage 3 — After the meeting: "Debrief [student]"
**You say:** "Debrief [student]." Then give Claude the recording or transcript.

**Claude:**
1. **Summarizes** what was discussed, the goal and the plan.
2. **Checks for gaps** against the prep sheet. For example: "You didn't bring up the class they're struggling in."
3. **Lists resources** mentioned, with working links, times and dates.
4. **Drafts the follow-up email** to the student covering what you talked about, the plan, the links, and anything you missed ("we didn't get to that class, let's talk about it next time or reach out anytime").
5. **Fills in the summary** in the USU system(s) you log meetings in, and stops before submitting.
6. **Updates the student's running file** in the Google Drive folder (never in this repo).

## Stage 4 — Over time: the student's story
Every meeting adds to that student's running file. Before the next meeting, the prep sheet shows:
- What's changed since last time (grades, goals)
- What's worked and what hasn't
- Where they said they did something but nothing changed

## Stage 5 — Across your caseload
Ask questions across all your students, for example:
- "Who's struggling right now?"
- "Who's trying to find friends?"
- "Who mentioned a shared hobby?" to connect students with shared interests.

## Side project — Student resources app
A small website you can pull up during meetings or send to students. It would have study tips, organized by topic, with links to USU resources such as tutoring, counseling, accessibility services and study-skills workshops. It's quick to build.

---

## Proposed folder layout
```
Claude/
├── Students/         (lives in Google Drive only, never in this repo)
│   └── [Student]/
│       ├── [Student] - running file.md      (the story over time)
│       ├── 2026-09-30 prep sheet.md
│       └── 2026-09-30 debrief.md
├── Transcripts/        (Google Drive only, never in this repo)
├── Templates/          (prep sheet, debrief, email templates)
└── Ideas & Planning/   (this workflow)
```

## Build order
1. **Templates.** Lock in the prep sheet, debrief and email formats with a made-up student.
2. **"Debrief" skill.** Turn a transcript into a summary, gap check and draft email. This saves time from day one and needs no system logins.
3. **"Prep" skill.** Once we know where the student data lives, pull it through Chrome and build the sheet.
4. **Auto-fill USU summaries** through Chrome, stopping before submit.
5. **Caseload search and the resources app.**

## Open questions for Isaac
1. What's the name of the system that holds student profiles, grades and advisor notes? (Starfish, EAB Navigate, something else?)
2. Where do post-meeting summaries go? ("the USU thing and…" which systems?)
3. Is your work email Gmail or Outlook?
4. How will you record meetings? (Phone voice memo, Zoom, Otter, etc.)
5. Has your supervisor or USU said anything about using AI tools with student information?
