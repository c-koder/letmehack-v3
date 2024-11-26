"use client";
import { useRouter } from 'next/navigation';
import '../styles/globals.css';

export default function member2() {
  const router = useRouter();
  return <div className="min-h-screen bg-registerbg flex flex-col items-center">
  {/* Form */}
  <div className="bg-registerfieldfill border-2 border-green-700 w-full max-w-lg p-8 m-8 rounded-3xl shadow-lg text-white ">
    <h1 className="text-3xl font-bold mb-6 text-center">Register Here</h1>
    <form className="space-y-4">
      <div>
        <label className="block mb-1">Member2 Name</label>
        <input type="text" placeholder="Your answer" className="w-full p-2 rounded bg-registerfield text-white focus:outline-none" />
      </div>
      <div>
        <label className="block mb-1">University</label>
        <input type="text" placeholder="Your answer" className="w-full p-2 rounded bg-registerfield text-white focus:outline-none" />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input type="email" placeholder="example@gmail.com" className="w-full p-2 rounded bg-registerfield text-white focus:outline-none" />
      </div>
      <div>
        <label className="block mb-1">NIC</label>
        <input type="text" placeholder="Your answer" className="w-full p-2 rounded bg-registerfield text-white focus:outline-none" />
      </div>
      <div>
        <label className="block mb-1">WhatsApp Contact Number</label>
        <input type="text" placeholder="Your answer" className="w-full p-2 rounded bg-registerfield text-white focus:outline-none" />
      </div>
      <div>
        <label className="block mb-1">Degree Program</label>
        <input type="text" placeholder="Your answer" className="w-full p-2 rounded bg-registerfield text-white focus:outline-none" />
      </div>
      <div>
        <label className="block mb-1">Academic Year</label>
        <div className="space-y-2">
          <div>
            <input type="radio" name="academic_year" id="year1" className="mr-2" />
            <label htmlFor="year1">1st Year</label>
          </div>
          <div>
            <input type="radio" name="academic_year" id="year2" className="mr-2" />
            <label htmlFor="year2">2nd Year</label>
          </div>
          <div>
            <input type="radio" name="academic_year" id="year3" className="mr-2" />
            <label htmlFor="year3">3rd Year</label>
          </div>
          <div>
            <input type="radio" name="academic_year" id="year4" className="mr-2" />
            <label htmlFor="year4">4th Year</label>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="button" onClick={() => router.push('/member1')}
          className="bg-neutral-600 hover:bg-neutral-800 text-white py-2 px-4 rounded"
        >
          Back
        </button>
        <button type="button" onClick={() => router.push('/member3')}
          className="bg-green-600 hover:bg-neutral-800 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </div>        </form>
  </div>

</div>
}