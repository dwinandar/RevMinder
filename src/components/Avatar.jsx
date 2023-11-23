const Avatar = ({ round, width, src }) => {
  return (
    <>
      <div className="avatar ">
        <div className={`p-0 ${width} ${round}`}>
          <img src={src} />
        </div>
      </div >
    </>
  );
}

export default Avatar;
