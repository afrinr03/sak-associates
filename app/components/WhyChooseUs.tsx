export default function WhyChooseUs() {
  return (
    <section className="bg-white border-t">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Why Choose SAK Associates</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          We follow safe practices, clear planning, and timely execution
          for every demolition project.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="border rounded-lg p-5">
            <h3 className="font-semibold">Safety First</h3>
            <p className="mt-2 text-sm text-slate-600">
              Controlled demolition with proper safety measures and PPE.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold">Experienced Team</h3>
            <p className="mt-2 text-sm text-slate-600">
              Skilled manpower with hands-on demolition experience.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold">Timely Completion</h3>
            <p className="mt-2 text-sm text-slate-600">
              Planned execution to finish work within committed timelines.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold">Clean Site Handover</h3>
            <p className="mt-2 text-sm text-slate-600">
              Debris clearance and proper site cleaning after demolition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
