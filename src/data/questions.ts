export interface Question {
  id: number;
  category: string;
  sc: string;
  level: "Level A" | "Level AA" | "Level AAA" | "Methodology" | "Foundational" | "Development";
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.1.1",
    level: "Level A",
    question:
      "Under WCAG 2.2 SC 1.1.1 Non-text Content, which of the following requires a text alternative?",
    options: [
      "A purely decorative image with no meaning conveyed",
      "A CAPTCHA image used for security verification",
      "A CSS background image used for decoration only",
      "A blank spacer image used for layout",
    ],
    correct: 1,
    explanation:
      "SC 1.1.1 requires text alternatives for all non-text content. CAPTCHAs are a specific case: they must have a text alternative identifying their purpose, and an alternative form (e.g., audio CAPTCHA) must be offered. Purely decorative images, CSS background images, and spacer images are exempt — they should use null alt text (alt=\"\") or be otherwise hidden from assistive technology.",
  },
  {
    id: 2,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.2.2",
    level: "Level A",
    question:
      "SC 1.2.2 Captions (Prerecorded) requires captions for synchronized media. What is explicitly exempt?",
    options: [
      "A video whose full transcript is displayed as text directly on the same page",
      "Media that is a media alternative for text and is clearly labeled as such",
      "A prerecorded video that was originally broadcast as a live stream",
      "A training video that already includes embedded audio descriptions",
    ],
    correct: 1,
    explanation:
      "SC 1.2.2 requires captions for all prerecorded synchronized media (audio + video). The only exemption is when the media is itself a media alternative for text content and is clearly labeled as such — the text already provides equivalent information, making captions redundant. Live streams published later are treated as prerecorded content and require captions if not live-captioned.",
  },
  {
    id: 3,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.3.1",
    level: "Level A",
    question:
      "SC 1.3.1 Info and Relationships requires that information conveyed through presentation can be programmatically determined. Which example violates this criterion?",
    options: [
      "Using <th> elements with scope attributes to identify table headers",
      "Using <fieldset> and <legend> to group related form controls",
      "Using bold red text alone to indicate a required form field with no code or label",
      "Using <label> elements associated with every form input",
    ],
    correct: 2,
    explanation:
      'SC 1.3.1 requires that structure and relationships conveyed visually are also available programmatically. Using bold red text alone to indicate a required field fails this — screen reader users cannot perceive the "required" relationship. The fix is to use aria-required="true", visible text (e.g., "required"), or include it in the label so the relationship is programmatically determinable.',
  },
  {
    id: 4,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.4.1",
    level: "Level A",
    question:
      "SC 1.4.1 Use of Color states that color must not be used as the only visual means of conveying information. Which of the following would violate this criterion?",
    options: [
      "A pie chart where each segment has both a color and a text label",
      "A form validation error indicated only by a red border on the input field",
      "A hyperlink that is underlined and shown in blue",
      "A required field marked with an asterisk (*) and a legend explaining the symbol",
    ],
    correct: 1,
    explanation:
      "SC 1.4.1 prohibits using color as the only means of conveying information. A red border alone to indicate an error is a violation — users who cannot perceive color differences (e.g., colorblind users) would not know the field has an error. Adding an icon, text description, or other non-color indicator alongside the red border would satisfy this criterion.",
  },
  {
    id: 5,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.4.3",
    level: "Level AA",
    question:
      "According to WCAG 2.2 SC 1.4.3 Contrast (Minimum), what is the required contrast ratio for normal-sized body text?",
    options: ["3:1", "4.5:1", "7:1", "5:1"],
    correct: 1,
    explanation:
      "SC 1.4.3 requires a minimum contrast ratio of 4.5:1 for normal text. Large text (at least 18pt / 14pt bold) requires only 3:1. The enhanced Level AAA criterion (SC 1.4.6) raises the requirement to 7:1 for normal text and 4.5:1 for large text. Logotypes, decorative text, and inactive UI components are exempt.",
  },
  {
    id: 6,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.4.4",
    level: "Level AA",
    question:
      "SC 1.4.4 Resize Text requires that text can be resized without assistive technology up to what percentage without loss of content or functionality?",
    options: ["150%", "175%", "200%", "300%"],
    correct: 2,
    explanation:
      "SC 1.4.4 requires text to be resizable up to 200% (double) without loss of content or functionality. This typically means avoiding fixed pixel heights on containers that clip overflowing text. Browser zoom is the most common mechanism tested. Captions and images of text are exempt.",
  },
  {
    id: 7,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.4.10",
    level: "Level AA",
    question:
      "SC 1.4.10 Reflow requires content to be presented without loss of information at a viewport width equivalent to how many CSS pixels?",
    options: [
      "480 CSS pixels",
      "320 CSS pixels",
      "360 CSS pixels",
      "640 CSS pixels",
    ],
    correct: 1,
    explanation:
      "SC 1.4.10 (added in WCAG 2.1) requires content to reflow at 320 CSS pixels wide — equivalent to 1280px at 400% zoom — without requiring horizontal scrolling. Exceptions apply to content that inherently requires two-dimensional layout for usage, such as data tables, maps, and video.",
  },
  {
    id: 8,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.4.11",
    level: "Level AA",
    question:
      "SC 1.4.11 Non-text Contrast requires user interface components and graphical objects to have a contrast ratio of at least what against adjacent colors?",
    options: ["4.5:1", "7:1", "3:1", "2.5:1"],
    correct: 2,
    explanation:
      "SC 1.4.11 (added in WCAG 2.1) requires a minimum contrast ratio of 3:1 for UI components (such as form input borders and button boundaries) and graphical objects (such as icons and chart lines) against adjacent colors. This is distinct from the 4.5:1 requirement for text in SC 1.4.3.",
  },
  {
    id: 9,
    category: "WCAG 2.2 · Operable",
    sc: "2.1.1",
    level: "Level A",
    question:
      "SC 2.1.1 Keyboard states all functionality must be operable via a keyboard interface, except when the underlying function requires input that depends on what?",
    options: [
      "Simultaneous multi-point contact, such as multi-touch gestures, that a keyboard interface cannot replicate",
      "The path of movement and not just the endpoints",
      "The speed or timing of input, where delays inherent to keyboard operation would alter the outcome",
      "Physical precision beyond the level of accuracy that keyboard input can provide",
    ],
    correct: 1,
    explanation:
      "SC 2.1.1 requires all functionality to be keyboard accessible. The only exception is functionality whose core requirement depends on the path of movement and not just the endpoints — for example, freehand drawing or handwriting recognition. This exemption is intentionally narrow; simply preferring mouse input does not justify excluding keyboard access.",
  },
  {
    id: 10,
    category: "WCAG 2.2 · Operable",
    sc: "2.4.1",
    level: "Level A",
    question:
      "SC 2.4.1 Bypass Blocks requires a mechanism to skip blocks of content repeated across pages. Which implementation satisfies this criterion?",
    options: [
      "Adding a visible site map link in the footer",
      "Providing a 'Skip to main content' link as the first focusable element on the page",
      "Using a short navigation bar with fewer than five links",
      "Displaying a breadcrumb trail on every page",
    ],
    correct: 1,
    explanation:
      "SC 2.4.1 requires a mechanism to bypass repeated blocks (like navigation). The most common implementation is a 'Skip to main content' link as the first focusable element; it may be visually hidden until focused. Using ARIA landmark regions (e.g., <main>, <nav>) also satisfies this criterion in many contexts. Sitemaps and breadcrumbs are helpful but do not bypass repeated blocks.",
  },
  {
    id: 11,
    category: "WCAG 2.2 · Operable",
    sc: "2.4.7",
    level: "Level AA",
    question:
      "SC 2.4.7 Focus Visible requires any keyboard-operable interface to have a visible keyboard focus indicator. What conformance level is this criterion?",
    options: [
      "Level A",
      "Level AA",
      "Level AAA",
      "It was removed in WCAG 2.2",
    ],
    correct: 1,
    explanation:
      "SC 2.4.7 Focus Visible is a Level AA criterion and remains in WCAG 2.2. WCAG 2.2 added more specific focus-related criteria: SC 2.4.11 Focus Not Obscured (Minimum) at Level AA, SC 2.4.12 Focus Not Obscured (Enhanced) at Level AAA, and SC 2.4.13 Focus Appearance at Level AAA. SC 2.4.7 was not removed.",
  },
  {
    id: 12,
    category: "WCAG 2.2 · New in 2.2",
    sc: "2.4.11",
    level: "Level AA",
    question:
      "WCAG 2.2 SC 2.4.11 Focus Not Obscured (Minimum) states that when a component receives keyboard focus, the component must be:",
    options: [
      "Entirely visible within the viewport at all times",
      "Not entirely hidden due to author-created content",
      "Highlighted with at least a 3px solid outline",
      "Scrolled automatically to the top of the viewport",
    ],
    correct: 1,
    explanation:
      "SC 2.4.11 (new in WCAG 2.2, Level AA) requires that when a UI component receives keyboard focus, it is not completely hidden behind author-created content such as a sticky header or cookie banner. The component may be partially obscured — it just cannot be entirely hidden. The stricter Level AAA criterion 2.4.12 requires the focused component to not be hidden at all.",
  },
  {
    id: 13,
    category: "WCAG 2.2 · New in 2.2",
    sc: "2.5.7",
    level: "Level AA",
    question:
      "WCAG 2.2 SC 2.5.7 Dragging Movements requires all functionality using a dragging movement can also be achieved using:",
    options: [
      "A keyboard shortcut defined by the author",
      "A two-finger swipe gesture on a touchscreen",
      "A single pointer without dragging",
      "An equivalent voice command or speech input interaction",
    ],
    correct: 2,
    explanation:
      "SC 2.5.7 (new in WCAG 2.2, Level AA) requires that all functionality achievable by dragging — such as drag-and-drop, sliders, or sortable lists — can also be accomplished using a single pointer action without dragging, unless dragging is essential. This benefits users with motor disabilities who find precise dragging difficult.",
  },
  {
    id: 14,
    category: "WCAG 2.2 · New in 2.2",
    sc: "2.5.8",
    level: "Level AA",
    question:
      "SC 2.5.8 Target Size (Minimum) in WCAG 2.2 requires that pointer input targets are at least:",
    options: [
      "44 × 44 CSS pixels",
      "24 × 24 CSS pixels",
      "32 × 32 CSS pixels",
      "20 × 20 CSS pixels",
    ],
    correct: 1,
    explanation:
      "SC 2.5.8 (new in WCAG 2.2, Level AA) requires pointer targets to be at least 24 × 24 CSS pixels, or have sufficient spacing so a 24px circle centered on the target does not intersect another target or the boundary of the minimum target spacing. The Level AAA criterion SC 2.5.5 (from WCAG 2.1) recommends the larger 44 × 44 CSS pixels.",
  },
  {
    id: 15,
    category: "WCAG 2.2 · New in 2.2",
    sc: "3.2.6",
    level: "Level A",
    question:
      "WCAG 2.2 SC 3.2.6 Consistent Help requires that if a help mechanism is provided on multiple pages, it appears in the same relative order on each page. What level is this criterion?",
    options: ["Level AA", "Level AAA", "Level A", "It is a best practice, not a normative criterion"],
    correct: 2,
    explanation:
      "SC 3.2.6 Consistent Help is a Level A criterion new in WCAG 2.2. If a webpage provides a help mechanism (such as a phone number, email link, chat widget, or self-help page), it must appear in the same relative order across pages. This benefits users with cognitive disabilities who need predictable placement of support resources.",
  },
  {
    id: 16,
    category: "WCAG 2.2 · New in 2.2",
    sc: "3.3.7",
    level: "Level A",
    question:
      "SC 3.3.7 Redundant Entry (new in WCAG 2.2) states that information previously entered by the user that is required again in the same process must be:",
    options: [
      "Re-entered by the user to confirm accuracy",
      "Auto-populated or available to select, unless re-entering is essential or a security requirement",
      "Stored in a cookie for use in future sessions",
      "Presented in a confirmation screen before reuse",
    ],
    correct: 1,
    explanation:
      "SC 3.3.7 (Level A, new in WCAG 2.2) requires that information already provided in an ongoing process is auto-populated or selectable when needed again, unless re-entering is essential (e.g., confirming a password) or is a security requirement. This reduces cognitive load, especially for users with memory or attention-related disabilities.",
  },
  {
    id: 17,
    category: "WCAG 2.2 · New in 2.2",
    sc: "3.3.8",
    level: "Level AA",
    question:
      "SC 3.3.8 Accessible Authentication (Minimum) in WCAG 2.2 prohibits requiring a cognitive function test during authentication unless which condition is met?",
    options: [
      "The cognitive test involves only simple arithmetic with no text recall",
      "An alternative authentication method is available, or the test uses object recognition or personal content, or a mechanism to assist the user is provided",
      "The test requires only identifying objects from images the user themselves uploaded to the service",
      "The test is optional and the user can choose to authenticate a different way on the same page",
    ],
    correct: 1,
    explanation:
      "SC 3.3.8 (Level AA, new in WCAG 2.2) prohibits authentication steps that require cognitive function tests (like solving puzzles or transcribing characters) unless: (1) an alternative authentication method is provided, (2) a mechanism (e.g., copy/paste or password manager) is available to assist, or (3) the test uses object recognition or identification of personal content (such as user-uploaded photos). This supports users with cognitive and memory disabilities.",
  },
  {
    id: 18,
    category: "WCAG 2.2 · Understandable",
    sc: "3.3.1",
    level: "Level A",
    question:
      "SC 3.3.1 Error Identification requires that if an input error is automatically detected, what must happen?",
    options: [
      "The field must be highlighted in red",
      "The item in error must be identified and the error described to the user in text",
      "The form must prevent submission and scroll to the first error",
      "An audible alert must sound to notify the user",
    ],
    correct: 1,
    explanation:
      "SC 3.3.1 requires that when an error is detected, the item in error is identified and the error is described in text. Color alone (e.g., red border) is insufficient and would also fail SC 1.4.1. The error description must be programmatically associated with the input (e.g., via aria-describedby) so screen reader users can understand what went wrong.",
  },
  {
    id: 19,
    category: "WCAG 2.2 · Robust",
    sc: "4.1.2",
    level: "Level A",
    question:
      "SC 4.1.2 Name, Role, Value requires that UI component names and roles can be programmatically determined. Which ARIA attribute provides the accessible name for an icon-only button?",
    options: [
      "aria-labelledby",
      "aria-label",
      "aria-describedby",
      "aria-hidden",
    ],
    correct: 1,
    explanation:
      "SC 4.1.2 requires UI components to expose their name, role, and value programmatically. For an icon-only button with no visible text, aria-label directly provides the accessible name string. aria-labelledby also computes an accessible name but references an existing element's text — it requires a target element to reference. aria-describedby provides a supplementary description, not a name. aria-hidden removes the element from the accessibility tree entirely.",
  },
  {
    id: 20,
    category: "WCAG 2.2 · Robust",
    sc: "4.1.3",
    level: "Level AA",
    question:
      "SC 4.1.3 Status Messages (added in WCAG 2.1) requires status messages to be perceivable by assistive technology without receiving focus. Which ARIA role is most appropriate for a non-urgent success notice?",
    options: [
      'role="alertdialog"',
      'role="status"',
      'role="dialog"',
      'role="tooltip"',
    ],
    correct: 1,
    explanation:
      'SC 4.1.3 requires status messages (success notices, progress updates, error counts) to be announced by assistive technology without focus moving to them. role="status" has an implicit aria-live="polite" and is appropriate for non-urgent updates. role="alert" (aria-live="assertive") is for critical or time-sensitive messages. role="alertdialog" is for dialogs requiring user interaction.',
  },
  {
    id: 21,
    category: "WAS Body of Knowledge · ARIA",
    sc: "ARIA",
    level: "Development",
    question:
      "According to the first rule of ARIA use, when is it appropriate to use ARIA roles, states, and properties?",
    options: [
      "Whenever you want to enhance the semantics of any HTML element",
      "Only when a native HTML element or attribute with the required semantics does not exist or cannot be used",
      "Always, because ARIA provides more consistent browser support than HTML",
      "Only on interactive elements such as buttons and links",
    ],
    correct: 1,
    explanation:
      "The first rule of ARIA (from the W3C's 'Using ARIA' guidance) states: if you can use a native HTML element or attribute with the required semantics and behavior already built in, do so instead of repurposing an element and adding ARIA. ARIA should fill gaps when native HTML cannot achieve the required accessible semantics — not replace correct semantic HTML.",
  },
  {
    id: 22,
    category: "WAS Body of Knowledge · Disabilities",
    sc: "Disabilities",
    level: "Foundational",
    question:
      "Which assistive technology is most commonly used by people who are DeafBlind to access digital content?",
    options: [
      "Screen magnifier",
      "Refreshable braille display",
      "Screen reader with audio output only",
      "Voice recognition software",
    ],
    correct: 1,
    explanation:
      "People who are DeafBlind typically use refreshable braille displays, which render text as tactile braille dots, to access digital content. They cannot rely on audio output from a screen reader (requires hearing) or screen magnification (requires vision). Web content must expose text programmatically so braille displays can render it correctly.",
  },
  {
    id: 23,
    category: "WAS Body of Knowledge · Testing",
    sc: "Testing",
    level: "Methodology",
    question:
      "Approximately what percentage of WCAG issues can automated accessibility testing tools detect?",
    options: [
      "80–90%",
      "60–70%",
      "20–40%",
      "Less than 10%",
    ],
    correct: 2,
    explanation:
      "Industry research and W3C guidance consistently indicate that automated accessibility testing tools can detect roughly 20–40% of WCAG issues. Many criteria — such as focus order logic, meaningful sequence, label in name, and cognitive appropriateness — require human judgment and cannot be reliably detected by automated tools alone. Manual expert review and testing with assistive technology users are essential for comprehensive evaluation.",
  },
  {
    id: 24,
    category: "WAS Body of Knowledge · Testing",
    sc: "Testing",
    level: "Methodology",
    question:
      "When testing with a screen reader in NVDA or JAWS on Windows, which key navigates to the next heading on a page?",
    options: ["Tab", "H", "G", "Arrow Down"],
    correct: 1,
    explanation:
      "In NVDA and JAWS (the two most widely used Windows screen readers), pressing H in browse/virtual cursor mode moves to the next heading, and Shift+H moves to the previous heading. This is a core navigation pattern: a properly structured heading hierarchy (H1–H6) allows screen reader users to scan and jump to sections efficiently, similar to how sighted users visually skim a page.",
  },
  {
    id: 25,
    category: "WAS Body of Knowledge · Standards",
    sc: "WAI-ARIA",
    level: "Foundational",
    question:
      "Which W3C specification defines roles, states, and properties to make dynamic web content more accessible to assistive technologies?",
    options: ["WCAG 2.2", "WAI-ARIA 1.2", "HTML Living Standard", "ATAG 2.0"],
    correct: 1,
    explanation:
      "WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications), currently at version 1.2, defines roles (e.g., role=\"dialog\"), states (e.g., aria-expanded), and properties (e.g., aria-label) that make dynamic, JavaScript-driven UI widgets accessible. WCAG 2.2 defines success criteria; ATAG 2.0 covers authoring tool accessibility; the HTML Living Standard provides native semantic elements.",
  },
  {
    id: 26,
    category: "WCAG 2.2 · Operable",
    sc: "2.5.3",
    level: "Level A",
    question:
      "SC 2.5.3 Label in Name (added in WCAG 2.1) requires that the accessible name of a UI component contains its visible label text. Why is this primarily important?",
    options: [
      "It ensures screen readers announce the visible label text rather than any overriding accessible name",
      "It ensures speech input users can activate controls by speaking the visible label",
      "It prevents tooltips from overriding the accessible name in assistive technologies",
      "It ensures the label remains visible to sighted users at all times",
    ],
    correct: 1,
    explanation:
      "SC 2.5.3 is primarily important for users of speech input software (such as Dragon NaturallySpeaking), who activate controls by speaking their visible label. If the accessible name does not contain the visible label text — for example, if aria-label overrides it with a different string — spoken commands will not match and the control cannot be voice-activated. The accessible name must contain the visible text, though it can be longer.",
  },

  // ── Official WAS Sample Questions ───────────────────────────────────────────

  {
    id: 27,
    category: "WAS Body of Knowledge · ATAG",
    sc: "ATAG 2.0",
    level: "Foundational",
    question:
      "Based on the Authoring Tool Accessibility Guidelines (ATAG), what must an authoring tool be?",
    options: [
      "Interoperable with all major content management systems",
      "Keyboard accessible",
      "Java-based to ensure cross-platform compatibility",
      "Standalone and not reliant on browser plug-ins",
    ],
    correct: 1,
    explanation:
      "ATAG 2.0 Part A (Make the authoring tool user interface accessible) requires that authoring tools are keyboard accessible — authors with motor disabilities must be able to operate the tool without a mouse. The guidelines also require the tool to follow applicable platform accessibility guidelines, but keyboard accessibility is the foundational requirement. Java, interoperability with CMSs, and standalone operation are not ATAG requirements.",
  },
  {
    id: 28,
    category: "WAS Body of Knowledge · ARIA",
    sc: "WAI-ARIA",
    level: "Development",
    question:
      "What is an example of an ARIA attribute that conveys a property?",
    options: [
      "role=\"menuitem\"",
      "aria-selected",
      "aria-labelledby",
      "aria-checked",
    ],
    correct: 2,
    explanation:
      "In WAI-ARIA, attributes are classified as roles, states, or properties. Properties are characteristics less likely to change dynamically — such as aria-labelledby, aria-label, aria-describedby, and aria-required. States are dynamic conditions that change based on user interaction — such as aria-selected, aria-checked, and aria-expanded. role=\"menuitem\" is a role value, not a state or property attribute.",
  },
  {
    id: 29,
    category: "WCAG 2.1 · New Success Criteria",
    sc: "WCAG 2.1",
    level: "Foundational",
    question:
      "Which of the following is one of the three areas of accessibility that the seventeen new success criteria in WCAG 2.1 address?",
    options: [
      "Internet of Things device compatibility",
      "Windows desktop application features",
      "Mobility disabilities",
      "Cognitive and learning disabilities",
    ],
    correct: 3,
    explanation:
      "WCAG 2.1 added 17 new success criteria addressing three specific areas of accessibility: (1) mobile accessibility, (2) people with low vision, and (3) people with cognitive and learning disabilities. Internet of Things, Windows desktop features, and mobility disabilities are not among the three named focus areas. Note that 'mobility' as a broad concept partially overlaps with mobile accessibility, but the correct WCAG 2.1 framing is cognitive/learning, low vision, and mobile.",
  },
  {
    id: 30,
    category: "Domain II: Identifying Issues",
    sc: "3.2.2",
    level: "Level A",
    question:
      "A webpage has a set of radio buttons for preferences. Selecting the last option 'Other' automatically moves focus to a text input for more information. All radio buttons are individually labeled and the group has an associated label. Which WCAG violation applies?",
    options: [
      "2.1.1 – Keyboard: the auto-focus prevents keyboard-only navigation",
      "3.2.2 – On Input: selecting a setting automatically causes a change of context without prior notice",
      "2.4.3 – Focus Order: focus moves out of the radio button group unexpectedly",
      "None – this pattern is fully WCAG 2.1 AA conforming",
    ],
    correct: 1,
    explanation:
      "SC 3.2.2 On Input states that changing the setting of a UI component must not automatically cause a change of context unless the user has been advised beforehand. Automatically moving focus to a different element when a radio button is selected constitutes a change of context (an automatic focus change). The user was not warned this would happen. Providing a submit button or advisory text before the radio group would bring this into conformance.",
  },
  {
    id: 31,
    category: "Domain II: Identifying Issues",
    sc: "1.4.12",
    level: "Level AA",
    question:
      "Which of the following statements is true about the intent of SC 1.4.12 – Text Spacing?",
    options: [
      "It dictates that text and spacing must be set to one specific set of prescribed metrics",
      "It prevents users from overriding the author's typographic structure and formats",
      "It ensures users can increase spacing between lines and paragraphs without loss of content",
      "It requires that words and characters be displayed in non-overlapping patterns",
    ],
    correct: 2,
    explanation:
      "SC 1.4.12 Text Spacing (added in WCAG 2.1, Level AA) ensures that when users override text spacing properties — line height, letter spacing, word spacing, and spacing after paragraphs — no content or functionality is lost. The criterion does not prescribe specific spacing values; it tests that the page remains functional when users apply their own spacing preferences. It protects user ability to adjust spacing, not author control over it.",
  },
  {
    id: 32,
    category: "WAS Body of Knowledge · Testing",
    sc: "Testing",
    level: "Methodology",
    question:
      "Of the browsers listed below, which is the best choice when using NVDA for accessibility testing?",
    options: ["Safari", "Firefox", "Internet Explorer 11", "Microsoft Edge"],
    correct: 1,
    explanation:
      "NVDA (NonVisual Desktop Access) works best with Firefox due to Firefox's strong and mature implementation of accessibility APIs, particularly the IAccessible2 and UIA APIs that NVDA relies on. While NVDA can function with Chrome and Edge, Firefox provides the most consistent and well-tested compatibility. Safari is primarily paired with VoiceOver on macOS, not NVDA. IE 11 is deprecated and no longer recommended for testing.",
  },
  {
    id: 33,
    category: "Domain III: Remediating Issues",
    sc: "Remediation",
    level: "Methodology",
    question:
      "Which option can a non-technical site owner implement to remove barriers for people using screen readers?",
    options: [
      "Change all element outlines to zero to create a cleaner visual design",
      "Turn off auto-play on video players",
      "Apply a pointer gesture plug-in to the site",
      "Display open captions burned into all video content",
    ],
    correct: 1,
    explanation:
      "Turning off auto-play on video players is a low-technical-barrier action that addresses SC 1.4.2 Audio Control — auto-playing audio can interfere with screen reader speech output and disorient users. A non-technical owner can typically configure this in CMS or media player settings. Removing outlines harms keyboard users (violates SC 2.4.7). Pointer gesture plug-ins and burned-in open captions require technical implementation and wouldn't necessarily be achievable by a non-technical site owner without developer help.",
  },
  {
    id: 34,
    category: "WAS Body of Knowledge · Standards",
    sc: "WCAG-EM",
    level: "Methodology",
    question:
      "Which accessibility testing methodology is designed to address how to approach a large enterprise audit?",
    options: ["WCAG-UX", "ATAG 2.0", "WAI-ARIA 1.2", "WCAG-EM"],
    correct: 3,
    explanation:
      "WCAG-EM (Website Accessibility Conformance Evaluation Methodology) is the W3C methodology specifically designed for evaluating the accessibility conformance of websites, including large, complex enterprise sites. It defines a structured five-step process: define the scope, explore the target website, select a representative sample, audit the selected sample, and report the findings. ATAG covers authoring tools, WAI-ARIA covers dynamic widget semantics, and WCAG-UX is not a recognized W3C standard.",
  },
];
