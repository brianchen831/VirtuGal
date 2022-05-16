function cmtFunction() {
    var cmt = document.getElementById("cmtText").value;
    var name = document.getElementById("nameText").value;

    const node = document.createElement("div");
    node.innerHTML =
        `<div class="card-body p-4">
            <div class="d-flex flex-start">
                <img class="rounded-circle shadow-1-strong me-3" 
                src="profile.png" alt="avatar" width="60" height="60"/>
                <div>
                    <h6 class=" mb-1">&nbsp;&nbsp;&nbsp;` + name + `</h6>
                    <div class="d-flex align-items-center mb-3">
                        <p class="mb-0">&nbsp;&nbsp;&nbsp;` + cmt; + 
                        `</p>
                    </div>
                </div>
            </div>
        </div>`;
    node.innerHTML += '<hr class="my-0">'
    document.getElementById("commentRoot").prepend(node);

    document.getElementById("cmtText").value="";
    document.getElementById("nameText").value="";
}