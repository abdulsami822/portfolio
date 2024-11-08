import Image from "next/image";
import NextjsIcon from "@/public/techicons/nextjs.svg";
import ReactjsIcon from "@/public/techicons/reactjs.svg";
import JsIcon from "@/public/techicons/js.svg";
import SassIcon from "@/public/techicons/sass.svg";
import TailwindIcon from "@/public/techicons/tailwind.svg";
import VscodeIcon from "@/public/techicons/vscode.svg";
import RadixUIIcon from "@/public/techicons/radixui.svg";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto ">
      <header className="sticky top-0 px-4 py-2 bg-accent w-fit mx-auto">
        <p className="text-center text-secondary text-sm">
          The site is currently under development, with only basic information
          available at this stage.
        </p>
      </header>
      <div className="mt-10 py-10 px-6">
        <section>
          <h1 className="lg:text-6xl md:text-6xl text-4xl font-bold">
            Abdul <span className="text-accent">Sami</span>
          </h1>
          <p className="text-secondary/70">A web developer</p>
          <div className="flex items-center gap-2 mt-2">
            <Link
              href="https://www.linkedin.com/in/shaikabdulsami/"
              target="_blank"
            >
              <FaLinkedin className="text-xl cursor-pointer" />
            </Link>
            <Link href="mailto:samiabdul822@gmail.com" target="_blank">
              <MdMail className="text-2xl cursor-pointer" />
            </Link>
          </div>
        </section>
        <hr className="my-6 w-full border-secondary/20" />
        <section>
          <h2 className="font-semibold text-lg md:text-xl">
            My Current tech stack 😎
          </h2>
          <div className="flex flex-wrap md:flex-row gap-8 items-center mt-6">
            <NextjsIcon className="text-3xl  md:text-5xl" />
            <TailwindIcon className="text-3xl md:text-5xl" />
            <RadixUIIcon className="text-3xl md:text-5xl" />
            <ReactjsIcon className="text-3xl md:text-5xl" />
            <JsIcon className="text-3xl md:text-5xl" />
            <SassIcon className="text-3xl md:text-5xl" />
            <VscodeIcon className="text-3xl md:text-5xl" />
          </div>
        </section>
        <hr className="my-6 w-full border-secondary/20" />
        <section>
          <h2 className="text-lg md:text-xl font-semibold">
            Work experience 💻
          </h2>
          <div className="flex items-center gap-2 mt-6">
            <Image
              src="/gg-icon.jpeg"
              alt="GreedyGame"
              width={60}
              height={60}
            />
            <div>
              <h3 className="font-semibold">GreedyGame</h3>
              <p className="text-secondary/70">2 yrs</p>
            </div>
          </div>
          <div>
            <ul className=" ml-12 md:ml-16">
              <li className="mt-4">
                <h3 className="font-semibold">
                  Frontend Developer - Jan 2023 - Sep 2024
                </h3>
                <p className=" text-secondary/70 mt-2 text-sm">
                  <Link
                    href="https://pubscale.com/offerwall"
                    className="hover:underline"
                    target="_blank"
                  >
                    <span className="font-semibold">Pubscale Offerwall</span>
                    <MdOutlineOpenInNew className="inline-block mb-1 ml-1 " />
                  </Link>{" "}
                  -{" "}
                  <span className="text-secondary">
                    Next.js, TailwindCSS, Android JS Bridge, Axios
                  </span>
                </p>
                <p className="text-secondary/70 text-sm">
                  I built an Offerwall frontend from scratch using Next.js 13,
                  delivering a pixel-perfect and high-performing UI within the
                  deadline. This project exceeded expectations, reaching $1000
                  daily revenue in its first month instead of the projected
                  $100. This app has been served to millions of users,
                  delivering a smooth and reliable experience.
                </p>
                <p className="text-secondary/70 mt-2 text-sm">
                  <Link
                    href="https://dashboard.pubscale.com/"
                    className="hover:underline"
                    target="_blank"
                  >
                    <span className="font-semibold">Pubscale Dashboard</span>
                    <MdOutlineOpenInNew className="inline-block mb-1 ml-1" />
                  </Link>{" "}
                  -{" "}
                  <span className="text-secondary">
                    React.js, Redux, MaterialUI, Axios, SCSS
                  </span>
                </p>
                <p className="text-secondary/70 text-sm ">
                  {" "}
                  I developed core features and core components across the
                  dashboard, including a plug-and-play analytics component that
                  streamlined complex pages. I enhanced chart visuals using
                  Recharts and implemented user-driven improvements like
                  annotations to create a more intuitive UX. These optimizations
                  were informed by user interviews, emphasizing both technical
                  and design skills.
                </p>

                <p className="text-secondary/70 text-sm mt-2">
                  I contributed to{" "}
                  <span className="font-semibold">
                    <Link
                      href="https://www.epicplay.in/"
                      className="hover:underline "
                      target="_blank"
                    >
                      Epicplay
                      <MdOutlineOpenInNew className="inline-block mb-1 ml-1" />
                    </Link>
                  </span>{" "}
                  and business websites like{" "}
                  <span className="font-semibold">
                    <Link
                      href="https://pubscale.com/"
                      className="hover:underline "
                      target="_blank"
                    >
                      pubscale.com
                      <MdOutlineOpenInNew className="inline-block mb-1 ml-1" />
                    </Link>
                  </span>{" "}
                  ,{" "}
                  <span className="font-semibold">
                    <Link
                      href="https://greedygame.com/"
                      className="hover:underline "
                      target="_blank"
                    >
                      greedygame.com
                      <MdOutlineOpenInNew className="inline-block mb-1 ml-1" />
                    </Link>
                  </span>{" "}
                  which are built on Next.js.
                </p>
              </li>
              <li className="mt-4">
                <h3 className="font-semibold">
                  Frontend Developer - Internship - Oct 2022 - Jan 2023
                </h3>
                <p className="text-secondary/70 text-sm mt-2">
                  I enhanced the UI, UX, and SEO of GreedyGame&apos;s business
                  website by building multiple pages, implementing schema markup
                  for rich search results, and designing landing pages that
                  boosted product conversion rates.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <hr className="my-6 w-full border-secondary/20" />
        <section>
          <h2 className="text-lg md:text-xl font-semibold">Projects 👷🔧 </h2>
          <div className="mt-6">
            <article>
              <Link
                href="https://ambits-admin.vercel.app"
                target="_blank"
                className="hover:underline"
              >
                <div className="flex items-center gap-1">
                  <h2>Dashboard for a real estate business</h2>
                  <MdOutlineOpenInNew className="text-sm inline-block" />
                </div>
              </Link>
              <p className="text-sm text-secondary/70">
                Nextjs, React table, Shadcn-ui, TailwindCSS, Radix UI, Supabase
                / SQL
              </p>
              <p className="text-secondary/70 mt-2 text-sm">
                I built an admin dashboard to optimize and scale business
                processes, utilizing Supabase for managing admin/user roles and
                RLS policies for database security. The frontend includes
                user-friendly elements like paginated and searchable tables and
                forms.
              </p>
            </article>
            <article className="mt-4">
              <Link
                href="https://timmy-threejs.vercel.app/"
                target="_blank"
                className="hover:underline"
              >
                <div className="flex items-center gap-1">
                  <h2>Timmy</h2>
                  <MdOutlineOpenInNew className="text-sm inline-block" />
                </div>
              </Link>
              <p className="text-sm text-secondary/70">Three.js, Cannon.js</p>
              <p className="text-secondary/70 mt-2 text-sm">
                I was bored on a sunday and made this three.js project, with a
                interactive character named Timmy. This site currently only
                works in desktop screens.
              </p>
            </article>
            <article className="mt-4">
              <Link
                href="https://github.com/rashid3011/ovs-frontend.git"
                target="_blank"
                className="hover:underline"
              >
                <div className="flex items-center gap-1">
                  <h2>Election Application using Blockchain</h2>
                  <FaGithub className="text-sm inline-block" />
                  <MdOutlineOpenInNew className="text-sm inline-block" />
                </div>
              </Link>
              <p className="text-sm text-secondary/70">
                Reactjs, Razorpay SDK, MongoDB, ExpressJs
              </p>
              <p className="text-secondary/70 mt-2 text-sm">
                For my 3rd year B.Tech project, I developed a frontend
                application for elections, incorporating authentication and
                authorization, along with Razorpay payment integration.
              </p>
            </article>
          </div>
          <p></p>
        </section>
      </div>
    </main>
  );
}
