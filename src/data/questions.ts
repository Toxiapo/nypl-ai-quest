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

  // ── WAI-ARIA Authoring Practices Guide (APG) ────────────────────────────────

  {
    id: 35,
    category: "APG · Dialog Pattern",
    sc: "APG",
    level: "Development",
    question:
      "According to the APG modal dialog pattern, when a dialog opens, where should keyboard focus be placed?",
    options: [
      "On the element that triggered the dialog (e.g., the opening button)",
      "On the first focusable element inside the dialog, or on an element designated by the author",
      "On the dialog's heading element if one is present",
      "On the browser's default focus position at the top of the page",
    ],
    correct: 1,
    explanation:
      "The APG modal dialog pattern requires that when a dialog opens, focus moves to an element inside the dialog — typically the first focusable element, or a specific element designated by the author (such as the dialog container itself if it has a tabindex, or a prominent action button). Focus must not remain on the triggering element while the dialog is open, as that leaves the user outside the modal context.",
  },
  {
    id: 36,
    category: "APG · Dialog Pattern",
    sc: "APG",
    level: "Development",
    question:
      "According to the APG modal dialog pattern, when a dialog is closed (e.g., by pressing Escape), where should keyboard focus return?",
    options: [
      "The first focusable element on the page (e.g., a skip link or logo)",
      "The main landmark region of the page",
      "The element that had keyboard focus before the dialog was opened",
      "The element immediately following the dialog in the DOM",
    ],
    correct: 2,
    explanation:
      "When a modal dialog closes, the APG requires focus to return to the element that had focus immediately before the dialog was opened — usually the button or control that triggered it. Returning focus elsewhere (such as the top of the page or the next DOM element) disorients keyboard and screen reader users who lose their place in the page.",
  },
  {
    id: 37,
    category: "APG · Tabs Pattern",
    sc: "APG",
    level: "Development",
    question:
      "In the APG Tabs pattern, which key moves focus between tabs within a horizontal tablist?",
    options: [
      "Tab and Shift+Tab",
      "Enter or Space",
      "Left Arrow and Right Arrow",
      "Home and End only",
    ],
    correct: 2,
    explanation:
      "The APG Tabs pattern uses Left Arrow and Right Arrow to move focus between tabs in a horizontal tablist (Up/Down for vertical). The Tab key moves focus out of the tablist entirely — to the active tabpanel or the next focusable element. Only one tab is in the tab sequence at a time (roving tabindex), so Tab does not cycle through individual tabs.",
  },
  {
    id: 38,
    category: "APG · Focus Management",
    sc: "APG",
    level: "Development",
    question:
      "What is the key distinction between the 'roving tabindex' and 'aria-activedescendant' focus management patterns described in the APG?",
    options: [
      "Roving tabindex is only for menus; aria-activedescendant is used in all composite widgets",
      "With roving tabindex, DOM focus physically moves to each item; with aria-activedescendant, focus stays on the container and a property identifies the active item",
      "aria-activedescendant requires JavaScript to work; roving tabindex works with CSS alone",
      "Roving tabindex uses tabindex=\"1\" on the active item; aria-activedescendant uses tabindex=\"0\"",
    ],
    correct: 1,
    explanation:
      "With roving tabindex, the currently active item has tabindex=\"0\" and all others have tabindex=\"-1\"; DOM focus physically moves between items as arrow keys are pressed. With aria-activedescendant, keyboard focus stays on the composite widget container and the aria-activedescendant attribute points to the ID of the logically active descendant — the AT announces that element but no focus event fires on it. Both are valid; roving tabindex is preferred when CSS :focus styles are important.",
  },
  {
    id: 39,
    category: "APG · Radio Group Pattern",
    sc: "APG",
    level: "Development",
    question:
      "According to the APG radio group pattern, how should keyboard navigation work within a group of radio buttons?",
    options: [
      "Each radio button must have its own tab stop so users can Tab through them individually",
      "Arrow keys move focus and selection between radio buttons; only one radio button is in the tab sequence at any time",
      "Space bar cycles through all available radio button options in order",
      "Enter moves to the next radio button; Tab submits the current selection",
    ],
    correct: 1,
    explanation:
      "The APG radio group pattern uses the roving tabindex approach: only one radio button in the group is in the tab sequence (tabindex=\"0\"); the others have tabindex=\"-1\". Pressing arrow keys both moves focus and selects the new radio button. This matches native <input type=\"radio\"> keyboard behavior. Using Tab to move between individual radios would be non-standard and increase the number of tab stops unnecessarily.",
  },
  {
    id: 40,
    category: "APG · Slider Pattern",
    sc: "APG",
    level: "Development",
    question:
      "Which set of ARIA attributes is required on an element with role=\"slider\" according to the APG?",
    options: [
      "aria-label, aria-valuetext, and aria-orientation",
      "aria-valuemin, aria-valuemax, and aria-valuenow",
      "aria-checked, aria-selected, and aria-expanded",
      "aria-controls, aria-owns, and aria-describedby",
    ],
    correct: 1,
    explanation:
      "The APG slider pattern requires three properties on role=\"slider\": aria-valuemin (the minimum allowed value), aria-valuemax (the maximum), and aria-valuenow (the current value). aria-valuetext is strongly recommended when the numeric value alone is not meaningful (e.g., displaying 'Small/Medium/Large' instead of '1/2/3'). aria-orientation defaults to horizontal and is optional. An accessible name (via aria-label or aria-labelledby) is also required but is not a slider-specific property.",
  },
  {
    id: 41,
    category: "APG · Disclosure Pattern",
    sc: "APG",
    level: "Development",
    question:
      "In the APG Disclosure (Show/Hide) pattern, which ARIA attribute on the controlling button communicates whether the disclosure content is currently visible?",
    options: [
      "aria-hidden",
      "aria-pressed",
      "aria-expanded",
      "aria-selected",
    ],
    correct: 2,
    explanation:
      "The APG Disclosure pattern uses aria-expanded on the controlling button: aria-expanded=\"true\" when the content is visible, aria-expanded=\"false\" when hidden. aria-hidden is applied to the content element itself to hide it from the accessibility tree when collapsed, not to the button. aria-pressed is for toggle buttons that do not control a separate content region. aria-selected is used in selection contexts (tabs, listboxes).",
  },
  {
    id: 42,
    category: "APG · Dialog Pattern",
    sc: "APG",
    level: "Development",
    question:
      "According to the APG modal dialog pattern, what should happen when a user presses Tab on the last focusable element inside an open modal dialog?",
    options: [
      "Focus moves to the first focusable element in the page's main content area",
      "The dialog closes and focus returns to the triggering element",
      "Focus wraps back to the first focusable element inside the dialog",
      "Focus moves to the browser's address bar",
    ],
    correct: 2,
    explanation:
      "Modal dialogs must trap focus — keyboard users must not be able to Tab into the background page content while the dialog is open. When Tab is pressed on the last focusable element, focus wraps to the first focusable element inside the dialog. Shift+Tab on the first element wraps to the last. This cycle continues until the dialog is explicitly dismissed (e.g., via Escape or a close button).",
  },
  {
    id: 43,
    category: "APG · Tree Pattern",
    sc: "APG",
    level: "Development",
    question:
      "In the APG Tree pattern, what does pressing the Right Arrow key do when focus is on a collapsed tree node that has children?",
    options: [
      "Moves focus to the next sibling node at the same level",
      "Expands the node without moving focus; if already expanded, moves focus to the first child",
      "Selects the node and all of its child nodes",
      "Moves focus to the parent node one level up",
    ],
    correct: 1,
    explanation:
      "The APG Tree pattern specifies: Right Arrow on a collapsed node (aria-expanded=\"false\") expands it without moving focus. Right Arrow on an already-expanded node moves focus to its first child. Left Arrow is the inverse: it collapses an open node, or moves focus to the parent if the node is already collapsed. This mirrors the keyboard behavior of file system tree views.",
  },
  {
    id: 44,
    category: "APG · Alert & Alertdialog",
    sc: "APG",
    level: "Development",
    question:
      "What is the key behavioral difference between role=\"alert\" and role=\"alertdialog\" in the APG?",
    options: [
      "role=\"alert\" is for error messages only; role=\"alertdialog\" is for informational messages",
      "role=\"alert\" is a live region announced without moving focus; role=\"alertdialog\" is a modal dialog that moves focus into it",
      "role=\"alert\" requires the user to dismiss it; role=\"alertdialog\" is dismissed automatically after a timeout",
      "role=\"alert\" and role=\"alertdialog\" are interchangeable — the choice is purely a visual design decision",
    ],
    correct: 1,
    explanation:
      "role=\"alert\" acts as an aria-live=\"assertive\" region: its content is announced immediately by screen readers without keyboard focus moving to it. It is appropriate for important, time-sensitive messages that don't interrupt the user's workflow. role=\"alertdialog\" is a modal dialog containing an alert message that requires user action before proceeding; focus moves into the alertdialog when it appears. Using role=\"alert\" for content requiring interaction, or role=\"alertdialog\" when no interaction is needed, creates a mismatch between the announced role and the actual behavior.",
  },

  // ── WCAG 2.x — Perceivable gaps ─────────────────────────────────────────────

  {
    id: 45,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.2.5",
    level: "Level AA",
    question:
      "SC 1.2.5 Audio Description (Prerecorded) requires audio description for all prerecorded video content in synchronized media. What does audio description provide?",
    options: [
      "A text transcript of all spoken dialogue in the video",
      "Narration of visual information — actions, characters, scene changes, and on-screen text — not conveyed by the audio track alone",
      "Captions synchronized with the video for deaf and hard-of-hearing users",
      "An alternative version of the video with simplified language",
    ],
    correct: 1,
    explanation:
      "Audio description (also called video description or described video) adds narration to the gaps in the main audio track, describing visual content that is not apparent from the soundtrack alone — such as actions, facial expressions, scene changes, and on-screen text. It is distinct from captions (which serve deaf/hard-of-hearing users) and transcripts (which are not synchronized). SC 1.2.5 is Level AA; SC 1.2.3 at Level A allows a media alternative as a substitute.",
  },
  {
    id: 46,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.3.3",
    level: "Level A",
    question:
      "SC 1.3.3 Sensory Characteristics (Level A) requires that instructions do not rely solely on sensory characteristics of components. Which example violates this criterion?",
    options: [
      "\"Click the 'Submit' button to complete your order\"",
      "\"Select your preferred option from the dropdown menu labeled 'Color'\"",
      "\"To continue, click the round button on the right side of the screen\"",
      "\"Enter your name in the text field above the submit button\"",
    ],
    correct: 2,
    explanation:
      "SC 1.3.3 requires that instructions do not depend solely on shape, size, visual location, orientation, or sound. 'The round button on the right side' uses shape (round) and visual location (right side) as the only identifiers — users who cannot see the layout cannot determine which button is meant. Adding a label (e.g., 'the Next button') would satisfy the criterion. The other options all reference programmatically determinable names or labels.",
  },
  {
    id: 47,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.3.4",
    level: "Level AA",
    question:
      "SC 1.3.4 Orientation (added in WCAG 2.1) requires that content is not restricted to a single display orientation unless that restriction is essential. Which example represents an essential exception?",
    options: [
      "A news website that locks to portrait because it was designed for mobile",
      "A bank's online application that locks to landscape for a wider form layout",
      "A piano keyboard application that requires landscape to display the keys usably",
      "A social media app that locks to portrait to match its native mobile app",
    ],
    correct: 2,
    explanation:
      "SC 1.3.4 requires content to be usable in both portrait and landscape orientations, since many users with motor disabilities mount their devices in a fixed position. A piano keyboard app is a classic essential exception — the physical nature of piano keys makes a horizontal landscape layout genuinely essential to the function. Design preference, wider forms, or matching a native app are not essential reasons to restrict orientation.",
  },
  {
    id: 48,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.3.5",
    level: "Level AA",
    question:
      "SC 1.3.5 Identify Input Purpose (Level AA) requires that the purpose of form inputs collecting personal information can be programmatically determined. Which HTML mechanism directly satisfies this criterion?",
    options: [
      "Using placeholder text that describes the expected input format",
      "Providing a visible <label> element adjacent to every form input",
      "Using the autocomplete attribute with the appropriate token value (e.g., autocomplete=\"email\")",
      "Grouping related inputs in a <fieldset> with a descriptive <legend>",
    ],
    correct: 2,
    explanation:
      "SC 1.3.5 is satisfied by the HTML autocomplete attribute with standardized token values defined in the HTML specification (e.g., autocomplete=\"name\", autocomplete=\"email\", autocomplete=\"street-address\"). This allows browsers and assistive technologies — including AAC devices and symbol-based tools — to identify the input's purpose and offer appropriate autofill or contextual assistance. Placeholder text, visible labels, and fieldsets improve usability but do not programmatically expose the specific personal data purpose that SC 1.3.5 requires.",
  },
  {
    id: 49,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.4.2",
    level: "Level A",
    question:
      "SC 1.4.2 Audio Control (Level A) applies when audio plays automatically for more than how many seconds, and what must be provided?",
    options: [
      "5 seconds; a transcript of the audio content",
      "3 seconds; a mechanism to pause or stop the audio, or to control the audio volume independently of the overall system volume",
      "3 seconds; an automatic mute when a screen reader is detected",
      "10 seconds; a warning dialog before the audio begins playing",
    ],
    correct: 1,
    explanation:
      "SC 1.4.2 requires that if any audio plays automatically for more than 3 seconds, the user must be able to pause or stop it, or control its volume independently of the system volume. This is critical for screen reader users: auto-playing audio overlaps with and drowns out screen reader speech, making the page effectively unusable unless the user can quickly silence the media. A mechanism must be early in the page so users can find it easily.",
  },
  {
    id: 50,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.4.5",
    level: "Level AA",
    question:
      "SC 1.4.5 Images of Text (Level AA) discourages using images of text when the visual presentation can be achieved with real text. Which scenario is explicitly exempt from this requirement?",
    options: [
      "A call-to-action button that uses a custom font rendered as an image",
      "A navigation menu where link text is displayed as images to use a proprietary typeface",
      "Text that is part of a logo or logotype where the particular presentation is essential",
      "A product name displayed in a decorative script font saved as a PNG",
    ],
    correct: 2,
    explanation:
      "SC 1.4.5 has two explicit exemptions: (1) logotypes — text that is part of a logo or brand name where the particular visual presentation is essential to identity; and (2) essential — where a specific presentation of the text is fundamental to the information conveyed (e.g., a sample of a historical handwriting style). Custom fonts, navigation links, and product names can all be rendered with real text using @font-face web fonts, so they are not exempt.",
  },
  {
    id: 51,
    category: "WCAG 2.2 · Perceivable",
    sc: "1.4.13",
    level: "Level AA",
    question:
      "SC 1.4.13 Content on Hover or Focus (added in WCAG 2.1) defines three conditions for content that appears on hover or keyboard focus. Which of the following is NOT one of the three required conditions?",
    options: [
      "Dismissible: the user can dismiss the appearing content without moving pointer or keyboard focus",
      "Hoverable: the user can move the pointer over the appearing content without it disappearing",
      "High contrast: the appearing content meets a 3:1 contrast ratio against adjacent colors",
      "Persistent: the content remains visible until the hover or focus trigger is removed or dismissed",
    ],
    correct: 2,
    explanation:
      "SC 1.4.13 defines three conditions: (1) Dismissible — users can dismiss appearing content (typically via Escape) without moving pointer or focus, preventing it from obscuring other content; (2) Hoverable — users can move the pointer over the appearing content (e.g., a tooltip) without it disappearing; (3) Persistent — the content remains visible until the trigger is removed or the user dismisses it. Contrast requirements are addressed separately by SC 1.4.3 and SC 1.4.11, not by SC 1.4.13.",
  },

  // ── WCAG 2.x — Operable gaps ────────────────────────────────────────────────

  {
    id: 52,
    category: "WCAG 2.2 · Operable",
    sc: "2.1.2",
    level: "Level A",
    question:
      "SC 2.1.2 No Keyboard Trap (Level A) requires that keyboard focus can always be moved away from any component. Under what circumstance is a non-standard exit method acceptable?",
    options: [
      "When the component is a third-party embed and the developer does not control its source code",
      "When the user is advised of the non-standard method (e.g., press Escape) to move focus away before or when focus enters the component",
      "When the component is a rich text editor that requires Tab for text indentation",
      "When focus returns automatically after a 30-second timeout",
    ],
    correct: 1,
    explanation:
      "SC 2.1.2 requires that focus is never permanently trapped. A non-standard key (e.g., Escape to exit a rich text editor that uses Tab for indentation) is acceptable only if the user is informed of that method before or immediately upon entering the component. Third-party content is not exempt — developers must ensure embedded content does not trap focus, or find an alternative embedding approach. Automatic timeouts do not satisfy the criterion.",
  },
  {
    id: 53,
    category: "WCAG 2.2 · Operable",
    sc: "2.1.4",
    level: "Level A",
    question:
      "SC 2.1.4 Character Key Shortcuts (added in WCAG 2.1, Level A) addresses single-character keyboard shortcuts. What must users be able to do if such shortcuts are implemented?",
    options: [
      "View a complete list of all keyboard shortcuts on a dedicated help page",
      "Turn off, remap to include a modifier key, or activate the shortcut only when the relevant component has focus",
      "Override the shortcut using their browser's built-in keyboard preference settings",
      "Report conflicting shortcuts to the browser vendor via a standardized feedback mechanism",
    ],
    correct: 1,
    explanation:
      "SC 2.1.4 addresses shortcuts using only a single letter, number, punctuation, or symbol key (e.g., 'J'/'K' for next/previous item). These can be accidentally triggered by speech input users speaking commands or screen reader users navigating with single keystrokes. The criterion requires at least one of: (1) the shortcut can be turned off; (2) it can be remapped to require a modifier key (Ctrl, Alt, etc.); or (3) it is only active when a specific component has keyboard focus.",
  },
  {
    id: 54,
    category: "WCAG 2.2 · Operable",
    sc: "2.2.1",
    level: "Level A",
    question:
      "SC 2.2.1 Timing Adjustable (Level A) requires that users can turn off, adjust, or extend time limits. Which of the following scenarios is explicitly exempt from this requirement?",
    options: [
      "A 20-minute session timeout on a banking website that warns the user 2 minutes before expiring",
      "A live auction where each bid window is limited to 30 seconds and the time limit cannot be extended",
      "A 5-minute quiz with a countdown timer that prevents form submission after time expires",
      "An image slideshow that automatically advances every 10 seconds",
    ],
    correct: 1,
    explanation:
      "SC 2.2.1 has three exceptions: (1) the real-time exception — when the time limit is required by a real-time event where an extension is not possible (e.g., a live auction); (2) the essential exception — where extending the limit would invalidate the activity; and (3) time limits longer than 20 hours. A live auction is the canonical real-time exception. A banking session timeout must provide a warning and extension. Timed quizzes can be an essential exception if extending the time would invalidate the test.",
  },
  {
    id: 55,
    category: "WCAG 2.2 · Operable",
    sc: "2.4.2",
    level: "Level A",
    question:
      "SC 2.4.2 Page Titled (Level A) requires web pages to have titles that describe their topic or purpose. What is the recommended format for a page title?",
    options: [
      "The site name only, repeated consistently on every page for brand recognition",
      "The current page's unique purpose first, followed by the site name (e.g., 'Shopping Cart | Acme Store')",
      "The full URL path so users can identify and navigate to the page directly",
      "An exact copy of the page's main H1 heading with no additional information",
    ],
    correct: 1,
    explanation:
      "Best practice (per WCAG technique G88) is to put unique page information first, then the site name — e.g., 'Contact Us | Acme Corp'. Screen reader users hear the title when a page loads, and this format immediately surfaces the most important distinguishing information. Using only the site name makes all browser tabs and screen reader announcements identical, defeating the purpose of the title. The title does not need to match the H1 exactly and does not need to contain the URL.",
  },
  {
    id: 56,
    category: "WCAG 2.2 · Operable",
    sc: "2.4.3",
    level: "Level A",
    question:
      "SC 2.4.3 Focus Order (Level A) requires that if a page can be navigated sequentially, the focus order must preserve meaning and operability. Which scenario violates this criterion?",
    options: [
      "A modal dialog that moves keyboard focus into the dialog when it opens",
      "A skip navigation link that is the first element in the tab order",
      "A checkout form where the Submit button receives focus before any of the form input fields",
      "An expandable section where focus moves to the newly revealed content after expansion",
    ],
    correct: 2,
    explanation:
      "SC 2.4.3 requires the focus order to be logical for the task — not necessarily matching visual reading order, but making the experience coherent. A Submit button appearing in the tab sequence before any form fields is a clear violation: a keyboard user would activate the form before entering any data. A dialog receiving focus on open, a skip link appearing first, and focus moving to newly revealed content are all acceptable patterns.",
  },
  {
    id: 57,
    category: "WCAG 2.2 · Operable",
    sc: "2.4.4",
    level: "Level A",
    question:
      "SC 2.4.4 Link Purpose (In Context) (Level A) allows link purpose to be determined from the link text alone or from its surrounding context. Which of the following satisfies this criterion?",
    options: [
      "<a href=\"/report.pdf\">Click here</a> with no surrounding text or context",
      "<a href=\"/report.pdf\">Download</a> repeated five times on a page, each linking to a different document",
      "<a href=\"/report.pdf\">Click here</a> inside a paragraph that describes the annual financial report",
      "<a href=\"/report.pdf\">More</a> appended after a product description with no surrounding explanation",
    ],
    correct: 2,
    explanation:
      "SC 2.4.4 permits link purpose to be determined from context, defined as the same sentence, paragraph, list item, or table cell as the link. 'Click here' inside a paragraph describing an annual financial report satisfies the criterion because the surrounding paragraph context makes the link's purpose clear. The other options fail because 'Click here', repeated 'Download' links pointing to different documents, and 'More' all lack sufficient context for screen reader users who navigate links in isolation.",
  },
  {
    id: 58,
    category: "WCAG 2.2 · Operable",
    sc: "2.4.5",
    level: "Level AA",
    question:
      "SC 2.4.5 Multiple Ways (Level AA) requires more than one way to locate a web page within a set of pages. Which combination satisfies this criterion?",
    options: [
      "A bookmarkable URL and a browser back button",
      "A site search feature and a site map",
      "A skip navigation link and a page heading structure",
      "A breadcrumb trail and a persistent page title",
    ],
    correct: 1,
    explanation:
      "SC 2.4.5 requires multiple mechanisms for finding pages within a website — such as a site search, a site map, a table of contents for the site, related links, or navigation menus. A site search and site map are the canonical examples. Browser features like the back button and bookmarks are provided by the user agent, not the author, and do not satisfy the criterion. Skip links and heading structure aid within-page navigation but do not help users find different pages.",
  },
  {
    id: 59,
    category: "WCAG 2.2 · Operable",
    sc: "2.4.6",
    level: "Level AA",
    question:
      "SC 2.4.6 Headings and Labels (Level AA) requires that headings and labels describe their topic or purpose. Which scenario fails this criterion?",
    options: [
      "A page using <h2>Order Summary</h2> before a list of items in a cart",
      "A form field labeled 'Email Address' where users enter their email",
      "Multiple sections across a page all using <h2>Details</h2> with no further differentiation",
      "A data table with <caption>Q3 Revenue by Product Line</caption>",
    ],
    correct: 2,
    explanation:
      "SC 2.4.6 requires that headings and labels are descriptive — not merely present. Multiple sections all labeled 'Details' are ambiguous and fail to convey what each section actually contains, making it impossible for screen reader users to distinguish between sections by scanning headings. This fails the criterion even though heading markup is technically used. The other options all provide specific, meaningful, and distinguishing descriptions.",
  },
  {
    id: 60,
    category: "WCAG 2.2 · Operable",
    sc: "2.5.1",
    level: "Level A",
    question:
      "SC 2.5.1 Pointer Gestures (Level A, added in WCAG 2.1) requires that functionality using multipoint or path-based gestures can be operated with a single pointer. Which scenario violates this criterion?",
    options: [
      "A map that supports two-finger pinch-to-zoom and also has visible +/− zoom buttons",
      "A swipe-to-delete gesture on a list item with no alternative delete button or mechanism",
      "A signature capture field where freehand drawing is the explicit and essential purpose",
      "A slideshow that advances by swiping right but also has Previous and Next arrow buttons",
    ],
    correct: 1,
    explanation:
      "SC 2.5.1 requires that multipoint gestures (like pinch-to-zoom) and path-based gestures (like directional swipes) have a single-pointer alternative, unless the gesture is essential. A swipe-to-delete with no other deletion method violates this — users who cannot perform the swipe gesture have no way to delete items. The map (has buttons), the slideshow (has buttons), and the signature field (essential exception) all satisfy the criterion.",
  },
  {
    id: 61,
    category: "WCAG 2.2 · Operable",
    sc: "2.5.2",
    level: "Level A",
    question:
      "SC 2.5.2 Pointer Cancellation (Level A, added in WCAG 2.1) helps prevent accidental activation. What does it require for single-pointer operations?",
    options: [
      "All interactive controls must require a double-click to confirm activation",
      "The down-event must not execute the function, or the action can be aborted before the up-event, or the up-event can reverse the down-event outcome",
      "All destructive actions must display a confirmation dialog before executing",
      "Touch targets must apply a 300ms delay before registering any input",
    ],
    correct: 1,
    explanation:
      "SC 2.5.2 requires that for single-pointer operations, at least one of the following is true: (1) no down-event execution — the function does not trigger on the pointer-down event; (2) abort or undo — completion occurs on the up-event and the user can abort by moving the pointer off the target before releasing; (3) up-reversal — the up-event reverses what the down-event triggered; or (4) the down-event is essential to the function. This prevents accidental activations when users press the wrong element and slide away to cancel.",
  },

  // ── WCAG 2.x — Understandable gaps ──────────────────────────────────────────

  {
    id: 62,
    category: "WCAG 2.2 · Understandable",
    sc: "3.1.1",
    level: "Level A",
    question:
      "SC 3.1.1 Language of Page (Level A) requires that the default human language of each web page can be programmatically determined. How is this correctly implemented?",
    options: [
      "By adding <meta name=\"language\" content=\"en\"> in the <head> element",
      "By using the lang attribute on the <html> element with a valid BCP 47 language tag",
      "By including a visible language selector in the page header",
      "By specifying the Content-Language HTTP response header on the server",
    ],
    correct: 1,
    explanation:
      "SC 3.1.1 is satisfied by the lang attribute on the <html> element using a valid BCP 47 language tag — e.g., lang=\"en\", lang=\"fr\", lang=\"zh-Hant\". This allows screen readers to apply the correct voice, pronunciation rules, and language engine. The <meta name=\"language\"> tag is non-standard and not recognized by assistive technologies. HTTP headers and visible language selectors do not expose language programmatically in a way that AT can use per-page.",
  },
  {
    id: 63,
    category: "WCAG 2.2 · Understandable",
    sc: "3.2.3",
    level: "Level AA",
    question:
      "SC 3.2.3 Consistent Navigation (Level AA) requires navigation mechanisms repeated across multiple pages to appear in the same relative order. What does 'relative order' mean in this context?",
    options: [
      "Navigation must be pixel-identical on every page with no variation whatsoever",
      "Navigation items must appear in the same sequence relative to each other and other repeated components, though the page's unique content may be inserted between them",
      "The navigation must use the same HTML element type and class names on every page",
      "Navigation visual styling must be identical across all pages of the site",
    ],
    correct: 1,
    explanation:
      "SC 3.2.3 requires the same relative order — not pixel-perfect replication. The navigation links must appear in the same sequence relative to each other and other repeated components (like a header or footer), but the page's unique main content may be inserted within the structure. A user-initiated change such as a preference to reorder links is also permitted. The criterion focuses on behavioral consistency for users who rely on predictable placement to navigate efficiently.",
  },
  {
    id: 64,
    category: "WCAG 2.2 · Understandable",
    sc: "3.3.2",
    level: "Level A",
    question:
      "SC 3.3.2 Labels or Instructions (Level A) requires that labels or instructions are provided when content requires user input. Which scenario satisfies this criterion?",
    options: [
      "A date input field with no label and no hint about the required date format",
      "A password field requiring 12 characters minimum with no indication of this requirement",
      "A set of radio buttons with no group label and no individual option labels",
      "A search field with a visible magnifying glass icon, a visible 'Search' label, and placeholder text",
    ],
    correct: 3,
    explanation:
      "SC 3.3.2 requires sufficient labels or instructions for user inputs. A search field with a visible 'Search' label clearly communicates its purpose. The other options all fail: a date field without format hints leaves users guessing the required format; a password field with undisclosed minimum length requirements causes preventable errors; unlabeled radio buttons cannot be understood programmatically or visually. Placeholder text alone is not sufficient as a label because it disappears when the user begins typing.",
  },
  {
    id: 65,
    category: "WCAG 2.2 · Understandable",
    sc: "3.3.3",
    level: "Level AA",
    question:
      "SC 3.3.3 Error Suggestion (Level AA) requires that when an input error is detected and suggestions are known, they are provided to the user. Which response satisfies this criterion?",
    options: [
      "Highlighting erroneous fields in red and showing a generic 'Please correct the errors above' message",
      "Preventing form submission and scrolling automatically to the first error field",
      "Identifying the specific field in error and providing a text description of how to correct it (e.g., 'Date must be in MM/DD/YYYY format')",
      "Providing a tooltip that appears on hover over the erroneous field",
    ],
    correct: 2,
    explanation:
      "SC 3.3.3 requires specific correction suggestions when the system knows what would be correct — not just notification that an error occurred (that's SC 3.3.1). Highlighting fields in red and using a generic message satisfies 3.3.1 at best but provides no guidance on how to fix the problem. Auto-scrolling to an error is good UX but doesn't provide the textual suggestion. Tooltips on hover are not accessible to keyboard users or screen reader users unless programmatically associated.",
  },
  {
    id: 66,
    category: "WCAG 2.2 · Understandable",
    sc: "3.3.4",
    level: "Level AA",
    question:
      "SC 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA) applies to pages where users submit legal commitments, financial transactions, or modify personal data. What must such pages provide?",
    options: [
      "A CAPTCHA to confirm the user is human before allowing submission",
      "At least one of: the ability to reverse the submission, verify and confirm data before submitting, or check and correct data before finalizing",
      "A mandatory 24-hour waiting period before any financial transaction is processed",
      "An email confirmation link that must be clicked before the submission takes effect",
    ],
    correct: 1,
    explanation:
      "SC 3.3.4 requires at least one of three safeguards for legal/financial/data submissions: (1) Reversible — the submission can be reversed or cancelled after the fact; (2) Checked — data is checked for errors and the user is given the opportunity to correct them; (3) Confirmed — a mechanism is provided to review, confirm, and correct information before finalizing. CAPTCHAs, waiting periods, and email confirmations are not requirements of this criterion, though they may be used in conjunction with it.",
  },

  // ── WCAG 2.x — Robust gaps ───────────────────────────────────────────────────

  {
    id: 67,
    category: "WCAG 2.2 · Robust",
    sc: "4.1.1",
    level: "Level A",
    question:
      "In WCAG 2.2, what is the status of SC 4.1.1 Parsing, and why?",
    options: [
      "It was strengthened to require strict HTML5 validation on all public-facing web pages",
      "It was merged into SC 4.1.2 Name, Role, Value to simplify the robust principle",
      "It is effectively obsolete — a note was added stating the criterion is always satisfied because modern browsers and AT now handle malformed HTML robustly",
      "It was moved to WCAG 3.0 as a foundational guideline for future standards",
    ],
    correct: 2,
    explanation:
      "In WCAG 2.2, the WCAG Working Group added a note to SC 4.1.1 stating that the success criterion is always satisfied in practice, because modern browsers and assistive technologies now robustly handle malformed HTML in ways that no longer produce the accessibility failures the criterion was designed to prevent. The original concern — that parsing errors would prevent AT from building an accurate accessibility tree — became moot as browser error-handling matured. The criterion remains in the specification but is no longer a meaningful test point.",
  },

  // ── WAS Body of Knowledge — Laws & Standards ─────────────────────────────────

  {
    id: 68,
    category: "WAS Body of Knowledge · Laws",
    sc: "Laws",
    level: "Foundational",
    question:
      "The 2017 Section 508 refresh (effective January 18, 2018) aligned U.S. federal ICT accessibility requirements with which standard?",
    options: [
      "WCAG 1.0 Level AA",
      "WCAG 2.0 Level AA",
      "WCAG 2.1 Level AA",
      "WCAG 2.2 Level AA",
    ],
    correct: 1,
    explanation:
      "The 2017 Section 508 refresh updated the U.S. Access Board's standards to incorporate WCAG 2.0 Level AA success criteria by reference. This was a significant modernization from the original 2001 Section 508 technical standards, which predated WCAG 2.0. The refresh also harmonized with the European standard EN 301 549. Section 508 applies to federal agencies and organizations receiving federal funding — they must ensure their ICT (websites, software, hardware, documents) meets WCAG 2.0 Level AA.",
  },
  {
    id: 69,
    category: "WAS Body of Knowledge · Laws",
    sc: "Laws",
    level: "Foundational",
    question:
      "The European Accessibility Act (EAA) and EN 301 549 reference which accessibility standard for digital products and services?",
    options: [
      "Section 508 Technical Standards",
      "WCAG 2.1 Level AA",
      "ISO/IEC 40500 (equivalent to WCAG 2.0) only",
      "ARIA 1.2 as the primary digital accessibility standard",
    ],
    correct: 1,
    explanation:
      "EN 301 549 is the European harmonized standard for ICT accessibility. Its current version references WCAG 2.1 Level AA for web and non-web digital content. The European Accessibility Act (EAA), which EU member states are required to implement, references EN 301 549 as the presumed conformance standard. This means WCAG 2.1 Level AA is effectively the legal requirement for digital accessibility across the European Union for products and services covered by the EAA.",
  },

  // ── WAS Body of Knowledge — Universal Design ────────────────────────────────

  {
    id: 70,
    category: "WAS Body of Knowledge · Universal Design",
    sc: "Universal Design",
    level: "Foundational",
    question:
      "Which of the 7 Principles of Universal Design states that the design accommodates a wide range of individual preferences and abilities?",
    options: [
      "Principle 1: Equitable Use",
      "Principle 2: Flexibility in Use",
      "Principle 4: Perceptible Information",
      "Principle 6: Low Physical Effort",
    ],
    correct: 1,
    explanation:
      "The 7 Principles of Universal Design (developed at NC State University, 1997) include: Principle 1 — Equitable Use (useful to people with diverse abilities); Principle 2 — Flexibility in Use (accommodates a wide range of individual preferences and abilities, e.g., supporting both right- and left-handed use); Principle 3 — Simple and Intuitive Use; Principle 4 — Perceptible Information; Principle 5 — Tolerance for Error; Principle 6 — Low Physical Effort; and Principle 7 — Size and Space for Approach and Use. Flexibility in Use is the principle specifically about range of individual preferences and abilities.",
  },

  // ── WAS Body of Knowledge — Assistive Technologies ──────────────────────────

  {
    id: 71,
    category: "WAS Body of Knowledge · Disabilities",
    sc: "Disabilities",
    level: "Foundational",
    question:
      "A user with low vision who cannot read standard text but retains useful functional vision is most likely to use which primary assistive technology?",
    options: [
      "A screen reader with braille output",
      "A screen magnification application such as ZoomText or macOS Zoom",
      "Speech recognition software such as Dragon NaturallySpeaking",
      "An eye-tracking system for pointer control",
    ],
    correct: 1,
    explanation:
      "Users with low vision who retain functional vision typically use screen magnification software to enlarge the display. Products like ZoomText, SuperNova Magnifier, macOS Zoom, and Windows Magnifier allow users to magnify content from 2x to 20x or more and pan around an enlarged view of the screen. WCAG criteria like SC 1.4.4 (Resize Text) and SC 1.4.10 (Reflow) specifically address the needs of this population. Screen readers with braille output serve users with more severe vision loss or DeafBlind users; speech recognition is for motor impairment; eye tracking addresses motor disability.",
  },

  // ── WAS Body of Knowledge — Accessible Document / Tables ────────────────────

  {
    id: 72,
    category: "WAS Body of Knowledge · Development",
    sc: "Tables",
    level: "Development",
    question:
      "For a data table with both row and column headers, which HTML approach correctly associates data cells with their headers programmatically?",
    options: [
      "Using <table role=\"grid\"> with aria-rowspan attributes on each data cell",
      "Using <th> elements for headers with appropriate scope attributes (scope=\"col\" or scope=\"row\")",
      "Using <td> elements for all cells and relying on their visual position to imply header relationships",
      "Using role=\"columnheader\" and role=\"rowheader\" ARIA attributes on <td> elements instead of <th>",
    ],
    correct: 1,
    explanation:
      "The correct approach is native <th> elements with scope=\"col\" for column headers and scope=\"row\" for row headers. For complex tables with irregular spanning headers, the headers/id technique associates each <td> with the IDs of its relevant header cells. Using <td> for all cells relies solely on visual position, which is inaccessible to screen readers (violates SC 1.3.1). While role=\"columnheader\" and role=\"rowheader\" work, native <th> with scope is preferred per the first rule of ARIA.",
  },

  // ── WAS Body of Knowledge — ARIA Accessible Name ────────────────────────────

  {
    id: 73,
    category: "WAS Body of Knowledge · ARIA",
    sc: "Accessible Name",
    level: "Development",
    question:
      "When computing the accessible name of an HTML element, which source has the highest priority in the ARIA accessible name and description computation algorithm?",
    options: [
      "The element's visible text content",
      "The aria-label attribute",
      "The aria-labelledby attribute",
      "The title attribute",
    ],
    correct: 2,
    explanation:
      "The ARIA accessible name computation (defined in the 'Accessible Name and Description Computation' specification, also called 'accname') applies sources in this priority order: (1) aria-labelledby — references one or more existing elements whose text content is concatenated; (2) aria-label — provides the name as a direct string; (3) native naming mechanisms — visible text for buttons, <label> elements for inputs, alt text for images; (4) title attribute — used as a last resort fallback. aria-labelledby always overrides aria-label and visible text content.",
  },

  // ── APG — Additional patterns ────────────────────────────────────────────────

  {
    id: 74,
    category: "APG · Combobox Pattern",
    sc: "APG",
    level: "Development",
    question:
      "In the APG Combobox pattern, which ARIA attribute on the combobox input communicates whether the associated popup (listbox, grid, or tree) is currently visible?",
    options: [
      "aria-selected",
      "aria-haspopup",
      "aria-expanded",
      "aria-controls",
    ],
    correct: 2,
    explanation:
      "On the combobox input element, aria-expanded=\"true\" indicates the popup is visible; aria-expanded=\"false\" means it is collapsed. aria-haspopup indicates the type of popup that will appear (e.g., aria-haspopup=\"listbox\") but does not convey current visibility state — it is a static property. aria-controls references the ID of the popup element. aria-selected is used on options within the listbox to indicate which option is currently selected, not on the input itself.",
  },
  {
    id: 75,
    category: "APG · Menu Pattern",
    sc: "APG",
    level: "Development",
    question:
      "According to the APG, when should role=\"menu\" and role=\"menuitem\" be used instead of a native list of links within a <nav> landmark?",
    options: [
      "Whenever a navigation has dropdown submenus or more than one level of hierarchy",
      "When the navigation contains more than ten links and needs keyboard shortcut support",
      "When implementing application-style command menus (like File/Edit/View) that trigger actions, not navigation to new pages",
      "When the site requires arrow key navigation between links to improve keyboard efficiency",
    ],
    correct: 2,
    explanation:
      "The APG explicitly distinguishes menus from navigation: role=\"menu\" is for command menus that perform application functions — analogous to a desktop application's File, Edit, or View menus. Site navigation — links that take users to different pages — should use a <nav> landmark with a standard list of <a> elements. Applying role=\"menu\" to site navigation incorrectly imposes arrow-key interaction that keyboard users do not expect for links, and strips Tab as a valid navigation key within the list.",
  },
  {
    id: 76,
    category: "APG · Switch Pattern",
    sc: "APG",
    level: "Development",
    question:
      "In the APG Switch pattern, role=\"switch\" represents a binary on/off control. Which ARIA attribute communicates whether the switch is currently on or off?",
    options: [
      "aria-selected",
      "aria-pressed",
      "aria-checked",
      "aria-expanded",
    ],
    correct: 2,
    explanation:
      "role=\"switch\" uses aria-checked to communicate its binary state: aria-checked=\"true\" means the switch is on; aria-checked=\"false\" means it is off. This mirrors the checkbox role, which also uses aria-checked. aria-pressed is used with role=\"button\" for toggle buttons — not switches, which have on/off semantics. aria-selected indicates selection within a collection (tabs, listbox options). aria-expanded indicates whether a collapsible region is open or closed.",
  },
  {
    id: 77,
    category: "APG · Listbox Pattern",
    sc: "APG",
    level: "Development",
    question:
      "In the APG Listbox pattern, what ARIA attribute on each role=\"option\" element indicates that the option is currently selected?",
    options: [
      "aria-checked=\"true\"",
      "aria-pressed=\"true\"",
      "aria-selected=\"true\"",
      "aria-current=\"true\"",
    ],
    correct: 2,
    explanation:
      "In a listbox widget (role=\"listbox\"), each item has role=\"option\" and uses aria-selected=\"true\" to indicate selection and aria-selected=\"false\" for unselected items. aria-checked is used for checkboxes and switches; aria-pressed for toggle buttons. aria-current is used to indicate the current item in a set of related elements (e.g., the current page in a breadcrumb or the active step in a process), not selection within a listbox.",
  },

  // ── W3C: Accessible Name and Description Computation (AccName) ───────────────

  {
    id: 78,
    category: "W3C AccName",
    sc: "AccName",
    level: "Development",
    question:
      "According to the AccName specification, what happens when aria-labelledby references an element that is hidden with display:none?",
    options: [
      "The reference is silently ignored and the next name source in the computation order is used",
      "The text content of the hidden element IS included in the accessible name computation",
      "A browser error is triggered and the element falls back to using its title attribute",
      "The entire widget is hidden from the accessibility tree because its label is not rendered",
    ],
    correct: 1,
    explanation:
      "The AccName specification (Section 4.3.1) states that when computing a name via aria-labelledby, referenced nodes are traversed even if they are not rendered — including elements with display:none, visibility:hidden, or the hidden attribute. This is intentional and allows authors to provide accessible names from text that is intentionally hidden from visual display. This behavior is distinct from aria-describedby, which some implementations handle differently for hidden elements.",
  },
  {
    id: 79,
    category: "W3C AccName",
    sc: "AccName",
    level: "Development",
    question:
      "In the AccName specification, what is the functional difference between an element's accessible name and its accessible description?",
    options: [
      "The accessible name is computed from aria-label; the accessible description is computed from aria-labelledby",
      "The accessible name is the primary identifier of the element; the accessible description provides supplementary information that elaborates on the name",
      "The accessible name is announced by all assistive technologies; the description is only announced by screen readers, not braille displays",
      "There is no meaningful difference — screen readers read both attributes identically on focus",
    ],
    correct: 1,
    explanation:
      "The accessible name is the primary label that identifies a UI component — analogous to a visible label. The accessible description provides supplementary context that elaborates on the name but is secondary. Screen readers typically announce the name immediately when an element receives focus, and the description is announced after a brief pause or only when explicitly requested. aria-labelledby and aria-label compute the name; aria-describedby and (when a name already exists) the title attribute compute the description.",
  },
  {
    id: 80,
    category: "W3C AccName",
    sc: "AccName",
    level: "Development",
    question:
      "The AccName specification defines a 'name from content' mechanism for certain roles. Which element computes its accessible name from its visible text content without requiring an explicit ARIA attribute or HTML label?",
    options: [
      "<input type=\"text\"> — uses its visible text content when a label is present",
      "<img> — reads visible child text if the alt attribute is absent",
      "<a> (anchor/link element) — uses its visible text content as its accessible name",
      "<div> — inherits its accessible name from the visible text of its parent element",
    ],
    correct: 2,
    explanation:
      "The AccName spec designates certain roles as supporting 'name from content': the accessible name is computed from the element's visible text content, including the text of its rendered descendants. The link role (<a>) is one of these — its visible text is the accessible name by default. <input type=\"text\"> requires an explicit <label> or aria-label; <img> uses the alt attribute; <div> has no native role that supports name from content. Other elements supporting name from content include <button>, <h1>–<h6>, and table headers.",
  },
  {
    id: 81,
    category: "W3C AccName",
    sc: "AccName",
    level: "Development",
    question:
      "An element has aria-labelledby=\"city-label state-label\" where the element with id=\"city-label\" contains \"Seattle\" and id=\"state-label\" contains \"WA\". What is the resulting accessible name?",
    options: [
      "\"city-label state-label\" — the ID attribute values are used literally as the name",
      "\"Seattle WA\" — the text content of each referenced element is concatenated in order",
      "\"Seattle\" — only the first referenced element's content is used",
      "An error — aria-labelledby only accepts a single element ID reference",
    ],
    correct: 1,
    explanation:
      "When aria-labelledby references multiple IDs (space-separated), the AccName algorithm processes each referenced element in the listed order and concatenates their text content — separated by spaces — to form the accessible name. The result is \"Seattle WA\". This technique is useful for constructing names from multiple existing visible text nodes on the page, such as combining a table row header and column header for a data cell, or assembling a form label from separate pieces of visible text.",
  },

  // ── W3C: Techniques for WCAG 2.2 ────────────────────────────────────────────

  {
    id: 82,
    category: "W3C WCAG Techniques",
    sc: "Techniques",
    level: "Methodology",
    question:
      "In the WCAG Techniques document, what is the distinction between a 'sufficient technique' and an 'advisory technique'?",
    options: [
      "Sufficient techniques are normative requirements; advisory techniques are optional enhancements",
      "A sufficient technique, correctly implemented, satisfies a success criterion; an advisory technique enhances accessibility beyond the SC but is not required for conformance",
      "Sufficient techniques apply to Level A and AA; advisory techniques apply to Level AAA only",
      "Advisory techniques are stricter, more rigorous implementations of the same concept as sufficient techniques",
    ],
    correct: 1,
    explanation:
      "WCAG Techniques are informative guidance, not normative requirements. A sufficient technique — if correctly implemented — satisfies the normative success criterion text. However, any approach that genuinely meets the SC is acceptable; listed techniques are examples, not the only valid approaches. Advisory techniques go beyond what the criterion requires and further improve accessibility. There are also documented failures — implementations that always fail a SC. Satisfying a SC does not require using any specific listed technique.",
  },
  {
    id: 83,
    category: "W3C WCAG Techniques",
    sc: "H44",
    level: "Methodology",
    question:
      "WCAG Technique H44 describes using <label> elements to associate text labels with form controls. Which implementation correctly applies H44?",
    options: [
      "<label>Email</label><input type=\"email\" id=\"email\"> — label and input are adjacent but not associated",
      "<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\"> — label associated via matching for and id attributes",
      "<input type=\"email\" id=\"email\" placeholder=\"Email Address\"> — placeholder provides the visible label",
      "<input type=\"email\" id=\"email\" aria-label=\"Email Address\"> — ARIA label replaces the need for a <label> element",
    ],
    correct: 1,
    explanation:
      "H44 requires a programmatic association between the <label> and its control using the for attribute on the <label> matching the id on the input. Option A is adjacent but unassociated — screen readers will not announce it as the input's label. Option C uses only a placeholder, which disappears when typing and is not a sufficient persistent label. Option D uses aria-label, which provides an accessible name but is not Technique H44 (which specifically uses <label>) and lacks a persistently visible label that benefits all users.",
  },
  {
    id: 84,
    category: "W3C WCAG Techniques",
    sc: "F73",
    level: "Methodology",
    question:
      "WCAG Failure Technique F73 documents a failure of SC 1.4.1 Use of Color. Which implementation does F73 specifically describe?",
    options: [
      "Using a background color change as the only visual indicator of keyboard focus state on interactive elements",
      "Creating links that are not visually distinguishable from surrounding non-link text except by color alone",
      "Using text color alone to differentiate data categories in a chart legend without patterns or labels",
      "Changing the default color of visited links to match unvisited links, making navigation history imperceptible",
    ],
    correct: 1,
    explanation:
      "F73 (Failure of SC 1.4.1 due to creating links that are not visually evident without color vision) applies when hyperlinks are identified only by a color difference from surrounding text — without an underline, bold weight, border, icon, or other non-color visual cue. Users with color vision deficiency cannot perceive such links as interactive. Remediation includes adding underlines, using sufficient contrast between link and surrounding text (minimum 3:1), or another non-color visual indicator. Option A is more relevant to SC 2.4.7; options C and D relate to other use-of-color scenarios not covered by F73.",
  },

  // ── W3C: WCAG-EM (Conformance Evaluation Methodology) ───────────────────────

  {
    id: 85,
    category: "W3C WCAG-EM",
    sc: "WCAG-EM",
    level: "Methodology",
    question:
      "What are the five steps of the WCAG-EM methodology in the correct order?",
    options: [
      "Identify issues → Test pages → Define sample → Write report → Retest failed items",
      "Define scope → Explore the website → Select a representative sample → Audit the sample → Report the findings",
      "Run automated scans → Manual review → User testing → Expert review → Document results",
      "Determine conformance level → Select tools → Test all pages → Fix issues → Claim conformance",
    ],
    correct: 1,
    explanation:
      "WCAG-EM (Website Accessibility Conformance Evaluation Methodology) defines exactly five steps: (1) Define the scope — what pages and content are included, at which conformance level, and which accessibility support baseline is used; (2) Explore the target website — identify page types, key functionality, and technologies; (3) Select a representative sample — choose structured and random pages; (4) Audit the selected sample — test each page against applicable success criteria; (5) Report the findings — document scope, sample, methodology, results, and a conformance statement.",
  },
  {
    id: 86,
    category: "W3C WCAG-EM",
    sc: "WCAG-EM",
    level: "Methodology",
    question:
      "In WCAG-EM Step 3 (Select a representative sample), what two types of samples must be included?",
    options: [
      "An automated scan sample and a manually reviewed sample",
      "A structured sample (representative page types and functionality) and a random sample (randomly selected pages)",
      "A desktop sample and a mobile/responsive sample tested on separate devices",
      "An authenticated (logged-in) sample and an unauthenticated (public) sample",
    ],
    correct: 1,
    explanation:
      "WCAG-EM requires a structured sample — pages purposively selected to represent different page types, templates, and critical functionality (e.g., home page, login, checkout, contact form, content pages) — and a random sample of pages selected randomly from the defined scope. The structured sample ensures coverage of key functionality; the random sample helps uncover issues that might not appear in purposively chosen pages. Together they provide a representative picture of accessibility across the site.",
  },
  {
    id: 87,
    category: "W3C WCAG-EM",
    sc: "WCAG-EM",
    level: "Methodology",
    question:
      "In WCAG-EM Step 1 (Define the Scope), what is the 'accessibility support baseline'?",
    options: [
      "The minimum conformance score a site must achieve to pass the evaluation",
      "The set of web content technologies and assistive technology + browser combinations that the content must work with for the conformance claim",
      "A list of browser developer tools required to perform the evaluation",
      "The WCAG success criteria that must pass at a minimum to meet legal accessibility requirements",
    ],
    correct: 1,
    explanation:
      "The accessibility support baseline defines which web content technologies (HTML, CSS, JavaScript, ARIA, SVG, etc.) and which assistive technology + browser combinations (e.g., NVDA + Firefox, JAWS + Chrome, VoiceOver + Safari) evaluators will test with and that the content must work with to claim conformance. WCAG's definition of 'accessibility supported' requires that the technology works with AT that users can actually access. Evaluators must document this baseline so the conformance claim is reproducible.",
  },
  {
    id: 88,
    category: "W3C WCAG-EM",
    sc: "WCAG-EM",
    level: "Methodology",
    question:
      "After completing a WCAG-EM evaluation, for which pages can the evaluator issue a conformance statement?",
    options: [
      "The entire website, provided that all major page templates were included in the sample",
      "Only for the specific pages and scope explicitly included in the evaluated sample",
      "All pages sharing the same CMS template as a page that passed the evaluation",
      "The entire site if more than 80% of sampled pages passed all applicable success criteria",
    ],
    correct: 1,
    explanation:
      "A WCAG-EM conformance statement applies only to the specific pages within the defined evaluation scope and selected sample — not to the entire site or to untested pages that share templates with passing pages. Templates may be applied differently, dynamic content may vary, and third-party content may differ across pages. To extend a conformance claim to additional pages, those pages must be separately evaluated. WCAG-EM does not define a percentage pass threshold — the statement reflects actual findings for evaluated pages.",
  },

  // ── DHS: Trusted Tester Methodology (v5) ────────────────────────────────────

  {
    id: 89,
    category: "DHS Trusted Tester v5",
    sc: "Trusted Tester",
    level: "Methodology",
    question:
      "In the DHS Trusted Tester for Web methodology (v5), what is ANDI and what is its role in testing?",
    options: [
      "A paid automated crawling platform that generates WCAG conformance reports for entire websites",
      "A free browser bookmarklet (Accessible Name & Description Inspector) developed by the SSA, used to inspect the accessibility properties that assistive technology would receive",
      "An acronym for the Automated Navigability and Disability Index — a scoring framework for rating accessibility severity",
      "A screen reader built into the DHS testing environment to standardize screen reader output across testers",
    ],
    correct: 1,
    explanation:
      "ANDI (Accessible Name & Description Inspector) is a free, open-source browser bookmarklet developed by the U.S. Social Security Administration (SSA) and is the primary inspection tool in the DHS Trusted Tester methodology. It exposes the accessibility properties — accessible name, description, role, state, and other AT-relevant attributes — that a browser computes for each element, reflecting what assistive technology would actually receive. ANDI can inspect focusable elements, links, images, structures, tables, and color contrast. It is not a crawler, screen reader, or scoring platform.",
  },
  {
    id: 90,
    category: "DHS Trusted Tester v5",
    sc: "Trusted Tester",
    level: "Methodology",
    question:
      "The DHS Trusted Tester for Web v5 tests web content against which accessibility standard, and why?",
    options: [
      "WCAG 2.1 Level AA — because it is the most current standard at the time v5 was released",
      "WCAG 2.0 Level A and AA — because the 2017 Section 508 refresh incorporated WCAG 2.0 Level AA by reference",
      "WCAG 2.2 Level AA — to align with international standards such as EN 301 549",
      "Section 508 Original 2001 Standards — Trusted Tester preserves backwards compatibility",
    ],
    correct: 1,
    explanation:
      "Trusted Tester v5 tests for conformance with the 2017 Section 508 refresh, which incorporated WCAG 2.0 Level A and AA success criteria by reference. Federal agencies and contractors subject to Section 508 must meet this standard for ICT accessibility. Test conditions in Trusted Tester v5 are each mapped to specific WCAG 2.0 Level A or AA success criteria. While WCAG 2.1 and 2.2 have since been published, the Section 508 requirements as refreshed in 2017 reference WCAG 2.0.",
  },
  {
    id: 91,
    category: "DHS Trusted Tester v5",
    sc: "Trusted Tester",
    level: "Methodology",
    question:
      "In the DHS Trusted Tester methodology v5, what outcome does each test condition receive, and why is this important?",
    options: [
      "A weighted score from 1–5, where 5 is fully conformant — important for prioritizing remediation by severity",
      "One of three ratings — Conformant, Partially Conformant, or Non-Conformant — aligned with WCAG conformance levels",
      "A binary pass or fail result for each individual test condition, with each failure documented against a specific requirement",
      "A qualitative rating of Critical, Major, or Minor — important for communicating business risk to stakeholders",
    ],
    correct: 2,
    explanation:
      "Trusted Tester test conditions are evaluated as a binary pass or fail — not scored, weighted, or given severity ratings. Each failure is documented against the specific Section 508 requirement (mapped to a WCAG 2.0 SC) that was not met. This binary approach is designed to ensure consistency and repeatability: a trained Trusted Tester following the methodology should produce the same pass/fail result for a given test condition regardless of who conducts the test. The result is an objective, reproducible conformance finding.",
  },
  {
    id: 92,
    category: "DHS Trusted Tester v5",
    sc: "Trusted Tester",
    level: "Methodology",
    question:
      "In Trusted Tester v5, how is an image evaluated when the alt attribute is completely absent from the <img> tag?",
    options: [
      "Pass — browsers automatically treat images without alt as decorative",
      "Pass — only images with explicit content (not layout images) require alt attributes",
      "Fail — all <img> elements must have an alt attribute; its absence may cause screen readers to announce the image filename or URL",
      "Fail only if the image is larger than a specific pixel dimension threshold",
    ],
    correct: 2,
    explanation:
      "In Trusted Tester v5, every <img> element must have an alt attribute. A missing alt attribute is always a failure because screen readers fall back to announcing the image's filename or src URL — meaningless or confusing content for users who cannot see the image. Decorative images must use null alt (alt=\"\") to signal AT to ignore them. Content images must have meaningful alt text. This corresponds to a failure of WCAG SC 1.1.1 Non-text Content. The test condition result is binary pass/fail regardless of image size.",
  },

  // ── Keyboard Commands for Common Screen Readers ──────────────────────────────

  {
    id: 93,
    category: "Screen Readers · JAWS & NVDA",
    sc: "Screen Readers",
    level: "Methodology",
    question:
      "Both JAWS and NVDA use the Insert+F7 keyboard command. How do the results differ between the two screen readers?",
    options: [
      "JAWS opens a list of all headings; NVDA opens a list of all form fields",
      "JAWS opens a links-only dialog; NVDA opens the Elements List — a combined dialog for links, headings, form fields, buttons, and landmarks",
      "Both open an identical combined elements list with the same categories and interface",
      "JAWS opens a Virtual PC Cursor settings panel; NVDA opens a links-only dialog identical to JAWS",
    ],
    correct: 1,
    explanation:
      "In JAWS, Insert+F7 opens a dialog listing all links on the current page. In NVDA (using Insert as the default NVDA modifier key), NVDA+F7 opens the Elements List — a richer dialog with tabs for Links, Headings, Form Fields, Buttons, and Landmarks. This distinction is important for testers: JAWS provides separate dialogs per element type (Insert+F5 for form fields, Insert+F6 for headings, Insert+F7 for links), while NVDA consolidates them into one Elements List. Assuming identical behavior across screen readers can lead to missed test steps.",
  },
  {
    id: 94,
    category: "Screen Readers · NVDA",
    sc: "Screen Readers",
    level: "Methodology",
    question:
      "In NVDA for Windows, what does pressing NVDA+Space (Insert+Space) do, and why is this critical for accessibility testing?",
    options: [
      "It reads the current page title — important for verifying SC 2.4.2 Page Titled",
      "It toggles between Browse Mode (virtual cursor, where H/B/F/T are quick-nav keys) and Focus Mode (where keystrokes pass to the active element) — critical because quick navigation only works in Browse Mode",
      "It opens the NVDA Settings dialog — important for configuring speech output before testing begins",
      "It pauses NVDA speech temporarily — useful when page audio needs to be heard without interference",
    ],
    correct: 1,
    explanation:
      "NVDA+Space toggles between Browse Mode and Focus Mode. In Browse Mode (the default for web pages), single-letter keys like H (heading), B (button), F (form field), T (table), and D (landmark) are quick-navigation commands. In Focus Mode, keystrokes pass directly to the focused element — necessary for typing in a text field or using arrow keys in a custom widget. NVDA switches modes automatically when entering/leaving interactive elements, but manual toggling is needed for some custom components. Testers who are unaware of mode switching may miss form-related test steps.",
  },
  {
    id: 95,
    category: "Screen Readers · VoiceOver (macOS)",
    sc: "Screen Readers",
    level: "Methodology",
    question:
      "On macOS with VoiceOver, what does the keyboard command VO+U (Ctrl+Option+U) open?",
    options: [
      "The VoiceOver Utility settings application for configuring speech, braille, and verbosity",
      "The Rotor — a navigation interface presenting element categories (headings, links, form controls, landmarks, tables) navigable with arrow keys",
      "A list of all currently open browser tabs so the user can switch between them",
      "The VoiceOver keyboard shortcut reference guide",
    ],
    correct: 1,
    explanation:
      "VO+U (Ctrl+Option+U) opens the VoiceOver Rotor on macOS. The Rotor presents a 'dial' of element categories — Headings, Links, Form Controls, Tables, Landmarks, and others depending on context. Left/Right Arrow cycles through categories; Up/Down Arrow moves between items in the selected category; Enter navigates to the focused item. The Rotor is the macOS equivalent of JAWS's separate Insert+F5/F6/F7 dialogs and NVDA's combined Elements List. VO+F8 opens VoiceOver Utility; there is no built-in tab-switcher shortcut in VoiceOver.",
  },
  {
    id: 96,
    category: "Screen Readers · VoiceOver (macOS)",
    sc: "Screen Readers",
    level: "Methodology",
    question:
      "Using VoiceOver on macOS, which keyboard command activates (clicks) the element that VoiceOver is currently focused on?",
    options: [
      "VO+Enter (Ctrl+Option+Enter)",
      "VO+Space (Ctrl+Option+Space)",
      "Enter alone, relying on browser native activation",
      "VO+Return (Ctrl+Option+Return)",
    ],
    correct: 1,
    explanation:
      "VO+Space (Ctrl+Option+Space) is the VoiceOver command to activate — equivalent to a mouse click — the element currently in VoiceOver focus. This works for buttons, links, checkboxes, and other interactive controls. VO+Enter is not a standard VoiceOver command. Pressing Enter alone may activate certain focused elements through the browser's native behavior (links, buttons), but VO+Space is the explicit VoiceOver activation and is required for elements that do not respond to Enter. Knowing this distinction prevents missed activations during testing.",
  },
  {
    id: 97,
    category: "Screen Readers · JAWS",
    sc: "Screen Readers",
    level: "Methodology",
    question:
      "In JAWS for Windows, what does pressing Insert+Z do?",
    options: [
      "Opens a zoom or magnification control overlay for the current page",
      "Jumps focus to the last interactive element in the JAWS virtual buffer",
      "Toggles the Virtual PC Cursor on and off, switching between browse mode (quick-nav keys active) and application/forms mode (keystrokes pass to the app)",
      "Opens the JAWS Find dialog to search for text within the current virtual buffer",
    ],
    correct: 2,
    explanation:
      "Insert+Z in JAWS toggles the Virtual PC Cursor (VPC). When the VPC is on (the default for web pages), JAWS uses a virtual representation of the page and single-letter quick navigation keys (H, K, B, G, T, etc.) work as browse-mode commands. When toggled off — application or forms mode — keystrokes pass directly to the underlying application, necessary for rich web applications or embedded components that need direct key input. This is functionally analogous to NVDA's Browse Mode / Focus Mode toggle (NVDA+Space).",
  },
  {
    id: 98,
    category: "Screen Readers · TalkBack (Android)",
    sc: "Screen Readers",
    level: "Methodology",
    question:
      "When testing with TalkBack on Android, how does a user activate a focused interactive element (for example, press a button)?",
    options: [
      "Single tap directly on the element to both focus and activate it simultaneously",
      "Swipe up then immediately swipe right in a single continuous gesture",
      "Triple tap anywhere on the screen to confirm the current selection",
      "Double-tap anywhere on the screen after TalkBack focus has been moved to the element",
    ],
    correct: 3,
    explanation:
      "TalkBack uses an explore-by-touch model that separates focusing from activating. A single touch or swipe right moves TalkBack focus to elements; a double-tap anywhere on the screen activates whatever element currently has TalkBack focus. The double-tap does not need to land precisely on the element itself. This two-step interaction differs fundamentally from standard Android touch (where a single tap activates) and from iOS VoiceOver (where double-tap also activates, but after focusing). Understanding this pattern is essential for correctly executing TalkBack test cases.",
  },
  {
    id: 99,
    category: "Screen Readers · NVDA",
    sc: "Screen Readers",
    level: "Methodology",
    question:
      "In NVDA's Browse Mode, which single-letter quick navigation key moves focus to the next ARIA landmark region on the page?",
    options: [
      "L — for landmark",
      "R — for region",
      "D — navigates to the next landmark or ARIA region",
      "M — for the main landmark specifically",
    ],
    correct: 2,
    explanation:
      "In NVDA Browse Mode, D navigates to the next landmark region (Shift+D for the previous one). Landmark regions correspond to ARIA landmark roles: banner, navigation, main, complementary, contentinfo, search, form, and region. In JAWS, the equivalent command is R (for Region). Knowing the correct key per screen reader is important — using L in NVDA navigates to the next list, not a landmark. Landmark navigation is particularly useful for auditing whether pages expose a logical landmark structure that allows efficient navigation.",
  },
  {
    id: 100,
    category: "Screen Readers · VoiceOver (iOS)",
    sc: "Screen Readers",
    level: "Methodology",
    question:
      "When using VoiceOver on iOS, which gesture navigates to the next element on the page?",
    options: [
      "Double-tap with one finger",
      "Two-finger swipe down",
      "Swipe right with one finger",
      "Tap and hold with two fingers",
    ],
    correct: 2,
    explanation:
      "On iOS with VoiceOver, a one-finger swipe right moves VoiceOver focus to the next element in reading order; a one-finger swipe left moves to the previous element. To activate the focused element, the user double-taps with one finger (anywhere on the screen, not necessarily on the element). Two-finger swipe down triggers 'Read All' from the current position. This gesture model is distinct from macOS VoiceOver (which uses VO+Right/Left Arrow) and from standard iOS touch interaction, where a single tap activates an element directly.",
  },
];

