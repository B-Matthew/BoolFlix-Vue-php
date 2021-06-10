<header>
  <div class="myContainer">
    <nav>
      <div class="">
        <img id="flix-img" src="{{ asset('/storage/img/site-logo.png')}}" alt="">
      </div>
      <ul>
        <li><i class="fas fa-search"></i><input id="search_bar" type="text" name="search" value="" placeholder="Cerca" ></li>
        <li><i id="bell" class="fas fa-bell"></i></li>
        <li>
          <img :class="{ display: userSelected == 2 }" class="profile_icon icon1" src="{{ asset('/storage/img/llXO017.png')}}" alt="">
          <img :class="{ display: userSelected == 1 }" class="profile_icon icon2" src="{{ asset('/storage/img/Netflix-avatar.png')}}" alt="">
        </li>
        <li>
          <select class="users" name="" v-model="userSelected" @change="getUser()">
            <option value="1">Matthew</option>
            <option value="2">Sara</option>
          </select>
        </li>
      </ul>
    </nav>
  </div>
</header>
