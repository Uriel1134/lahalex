import { Header } from "@/components/other-header";
import { Footer } from "@/components/footer";

export default function NousContacter() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#770D28] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-gobold text-4xl sm:text-5xl lg:text-2xl text-white leading-tight">NOUS CONTACTER</h1>
        </div>
      </section>

      {/* Formulaire de contact - version épurée et responsive */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-16">
        <form className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Prénom*</label>
              <input type="text" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Nom*</label>
              <input type="text" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Société*</label>
              <input type="text" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Téléphone*</label>
              <input type="tel" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-sf-pro text-sm text-gray-700">E-mail professionnel*</label>
            <input type="email" className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Activité*</label>
              <select className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro" required>
                <option value="">Veuillez sélectionner</option>
                <option value="Avocat">Avocat</option>
                <option value="Notaire">Notaire</option>
                <option value="Commissaire de justice">Commissaire de justice</option>
                <option value="Juriste">Juriste</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-sf-pro text-sm text-gray-700">Pays</label>
              <select className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro">
                <option value="">Sélectionner</option>
                <option value="France">France</option>
                <option value="Belgique">Belgique</option>
                <option value="Suisse">Suisse</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-sf-pro text-sm text-gray-700">Commentaires</label>
            <textarea className="border border-gray-300 rounded-md px-4 py-2 font-sf-pro min-h-[100px]" />
          </div>
            <div className="text-xs text-gray-600 font-sf-pro mb-4">
            LAHALEX peut vous contacter pour vous communiquer des informations sur nos produit, services et événements. Vous pourrez vous désabonner à tout moment via le lien fourni dans nos communications. Pour plus d'information, vous pouvez consulter notre <a href="#" className="text-blue-600 underline">politique de confidentialité</a>.
          </div>
          <button type="submit" className="bg-[#770D28] w-full sm:w-auto text-white font-sf-pro px-8 py-3 rounded-md text-lg font-semibold shadow hover:bg-[#5a0a1e] transition-all">ENVOYER</button>
          <div className="text-xs text-gray-500 font-sf-pro mt-2">
            Ce site est protégé par reCAPTCHA et la <a href="#" className="underline">politique de confidentialité</a> et les <a href="#" className="underline">conditions d'utilisation</a> de Google s'appliquent.
          </div>
        </form>
      </div>



      <Footer />
    </div>
  )
}
