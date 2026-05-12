# 🌐 Bionano Lab - Website Management Guide

Welcome to the Bionano Lab Content Management System (CMS). This dashboard allows you to easily update the website's text, images, news, and publications without touching any code. 

---

## 🔑 1. Getting Started
1. Go to your admin URL (usually `www.busattolab.com/admin`).
2. Click **Log in with Netlify Identity**.
3. Enter your email and password.
4. Once logged in, you will see the main Dashboard. On the left sidebar, you will find your main content collections: **Website Pages**, **News**, **Publications**, and this **Manual**.

---

## 🔄 2. The Editorial Workflow (Drafts & Publishing)
Because this CMS uses an "Editorial Workflow", your changes do **not** go live immediately just by saving. Look at the top left of your screen, next to "Collections", you will see a **Workflow** tab. This is your control center.

Here is how the publishing process works:
*   **Saving a Draft:** When you create a new post or edit a page and click **Save**, it goes into the **Drafts** column. It is safely stored in the system but is **NOT** visible to the public yet.
*   **The Kanban Board:** In the Workflow tab, you can drag and drop your entries between three columns: *Drafts*, *In Review*, and *Ready*. This is useful if you want another lab member or the PI to review a post before it goes live.
*   **How to Publish:** To actually push a page or a news post to the live website, you have two options:
    1. **From the Workflow board:** Drag the card to the **Ready** column and click the **Publish new entry** button on the card.
    2. **From inside the editor:** Look at the top of the screen, change the "Set status" dropdown to **Ready**, and then click the main **Publish** button.

*(Note: Once you click Publish, it usually takes about 1-2 minutes for the website server to rebuild and show the new content to the world).*

---

## 📄 3. Website Pages
This section contains all the static pages of the website. 

### 🏠 Homepage (Our Research)
*   **Main Heading & Description:** The introductory text at the top of the homepage.
*   **Research Pillars (Tiles):** To add a new research topic, click **Add Pillar Tile**, type the Title, and add the description. You can reorder them by dragging and dropping the items on the left.

### 👥 Team Profiles
*   **Principal Investigator (PI):** Update the name, role, bio, LinkedIn URL, and profile picture of the PI.
*   **Lab Members:** Click **Add Member** to insert a new researcher. You can upload their photo, add their role, and link their LinkedIn profile. *Tip: If a member leaves, you can simply remove their block or move them to a different section using the text editor.*

### 📺 Media
*   **Introduction Text:** A short text at the top of the media page.
*   **YouTube Videos:** To add a new video, click **Add Video**. You don't need the full link! Just paste the **Video Title** and the **YouTube Video ID**.
    *   *Example:* If the link is `youtube.com/watch?v=kM7J1PofqB8`, the ID is just **`kM7J1PofqB8`**.

### 📝 Standard Pages (CV, Teaching, Patents, Repositories, Privacy)
These are standard text pages. You have a title and a rich-text editor (similar to Word) where you can type, add bullet points, insert links, and format your text.

---

## 📰 4. News
This section is for your blog posts and announcements (e.g., new grants, lab events, new students). 

**How to add a new News post:**
1. Click on **News** on the left sidebar.
2. Click the **New News** button at the top right.
3. Fill in the fields:
    *   **Title:** The headline of the news.
    *   **Date:** Select the exact date and time.
    *   **Image (Optional):** Upload a picture from your computer to go with the post.
    *   **External Link (Optional):** If the news is just a link to another website (like a university press release), paste the link here.
    *   **Content:** Write the full story here.
4. Set status to **Ready** and click **Publish**.

---

## 📚 5. Publications (BibTeX)
To keep the updating process as fast as possible, the Publications panel is designed as a direct "Code Editor". Instead of manually typing out the title, journal, date, and authors into separate boxes for every new paper, you can just paste the raw data directly from academic databases!

**🟢 How to ADD a new publication:**
1. Go to **Google Scholar** (or PubMed/Mendeley/Zotero).
2. Find your new paper, click the "Cite" button, and select **Export as BibTeX**.
3. Copy the block of text (it always starts with `@article{...`).
4. Go to the CMS, click on **Publications (BibTeX)** and open the **Publications Code** entry.
5. Paste the text block inside the dark editor (at the top or bottom of the existing list).
6. Click **Publish**.

**🔴 How to DELETE a publication:**
1. Scroll through the dark editor to find the paper you want to remove.
2. Highlight the entire block of that specific paper with your mouse (from `@article{` down to the closing bracket `}`).
3. Press **Delete** on your keyboard.
4. Click **Publish**. 

**🟡 How to FIX a typo:**
1. Find the paper in the editor.
2. Simply click on the text and type your correction (for example, change `year={2025}` to `year={2026}`).
3. Click **Publish**.
