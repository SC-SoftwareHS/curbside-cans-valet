import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'

export function NewsVideo() {
  return (
    <Section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-red-100 text-red-800 ring-2 ring-red-200 mb-6">
            📺 Featured on Local News
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl mb-4">
            Our founding story was featured for entrepreneurial success!
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch how Mark & Matt's student business has made an impact in the La Jolla community
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 shadow-2xl">
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/KITNbtQESWk?rel=0&modestbranding=1&autoplay=0"
                title="Curbside Cans Valet - Featured on Local News for Entrepreneurial Success"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/80 rounded-lg p-4">
                <div className="text-xl font-bold text-green-600">2 Years</div>
                <div className="text-sm text-slate-600">In Business</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <div className="text-xl font-bold text-green-600">99%</div>
                <div className="text-sm text-slate-600">On-Time Rate</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <div className="text-xl font-bold text-green-600">Local</div>
                <div className="text-sm text-slate-600">La Jolla Students</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}