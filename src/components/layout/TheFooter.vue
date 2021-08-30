<template>
    <footer class="container-fluid container-footer">
        <div class="row d-flex justify-content-between p-md-5 text-white">
            <div class="col-12 col-sm-6 mt-3 mt-md-0 text-center">
                <h3>Plan du site</h3>
                <b-navbar-nav>
                    <b-nav-item to="/" exact exact-active-class="active">Accueil</b-nav-item>
                    <b-nav-item to="/contact" exact exact-active-class="active">Contact</b-nav-item> 
                </b-navbar-nav>
            </div>
            <!-- <div class="col-12 col-sm-6 col-lg-4 mt-3 mt-md-0 text-center">
                <h3>Restons en contact</h3>
                <p class="d-flex justify-content-center">
                    <b-icon class="mr-2" icon="telephone-fill" variant="primary" font-scale="1.5"></b-icon>
                    0660939930</p>
                <p class="d-flex justify-content-center">
                    <b-icon class="mr-2" icon="envelope-fill" variant="primary" font-scale="1.5"></b-icon>
                    julien.coudert34@gmail.com</p>
                <p class="d-flex justify-content-center">
                    <b-icon class="mr-sm-1 mr-2" icon="house-door-fill" variant="primary" font-scale="1.5"></b-icon>
                    6 rue du pradet - 34430 Saint-Jean-de-Védas</p>
            </div> -->
            <div class="col-12 col-sm-6 mt-3 mt-lg-0 text-center">
                <h3>Reseaux sociaux</h3>
                <b-list-group class="d-flex flex-row justify-content-center mt-3"> 
                   <b-list-group-item class="reseaux-item">
                        <a href="">
                        <b-icon icon="linkedin" variant="light" font-scale="2"></b-icon></a>
                    </b-list-group-item> 
                   <b-list-group-item class="reseaux-item">
                       <a href="https://github.com/judev34">
                       <b-icon icon="github" variant="light" font-scale="2"></b-icon></a>
                    </b-list-group-item> 
                </b-list-group>
            </div>
        </div>
    </footer>
</template>

<script>


export default {
    name: "TheFooter"
}
</script>

<style>

.container-footer {
    background: rgb(0,78,152);
}

.nav-item > a {
    color: white;
}

.nav-item > a:hover {
    color: lightgrey;
}
 
.reseaux-item {
    border: none;
    background: rgb(0,78,152);
}
</style>