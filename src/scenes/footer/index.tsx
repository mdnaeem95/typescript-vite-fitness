import Logo from "@/assets/Logo.png";

type Props = {}

const index = (props: Props) => {
  return <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img src={Logo} alt="logo" />
            <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident perspiciatis at molestias debitis nisi, suscipit magni repudiandae voluptatibus nulla molestiae?</p>
            <p>&#169; Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Massa orci senectus</p>
            <p className="my-5">Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur.</p>
            <p>(333)425-6825</p>
        </div>
    </div>
  </footer>
}

export default index