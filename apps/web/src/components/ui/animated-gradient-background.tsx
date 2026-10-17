/**
 * The hero's backdrop: two soft blooms over the page colour, breathing on
 * offset cycles. Pure CSS animation, no canvas and no library, so it costs one
 * compositor layer each and survives a page that is otherwise idle.
 *
 * `aria-hidden` rather than a `<div>` with no label: it is decoration, and a
 * screen reader announcing it would be inventing content.
 *
 * Every geometry decision lives in `globals.css` under `.grad-bg` - see the
 * note there for why the two cycle lengths differ.
 */
export default function AnimatedGradientBackground() {
  return (
    <div className="grad-bg" aria-hidden="true">
      <div className="grad-bloom grad-bloom-a" />
      <div className="grad-bloom grad-bloom-b" />
      <div className="grad-fade" />
    </div>
  );
}
