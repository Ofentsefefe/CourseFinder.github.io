<?php
require 'config.php';
session_start();
if (!isset($_SESSION['username']) || !isset($_SESSION['email'])) {
    header('Location: login.php');
    exit();
}

$query2 = "SELECT * FROM users ORDER BY id DESC LIMIT 1";
$query3 = "SELECT * FROM users";
$result2 = $conn->query($query2);
$result3 = $conn->query($query3);

$query_review = "SELECT * FROM review";
$result_review = $conn->query($query_review);

while ($row = mysqli_fetch_assoc($result2)){
    $_SESSION['id'] = $row["id"] ;;
}
$num = 0;
while ($row = mysqli_fetch_assoc($result3)){
        $num += 1;
        $_SESSION["number"] = $num;
}
$ratings = "";
$reviews = "";
while ($row = mysqli_fetch_assoc($result_review)) {
$formatted_date = substr($row['created_at'], 0, 10);
$ratings .= "
<tr>
<td>
<p>" . htmlspecialchars($row['username']) . "</p>
</td>
<td>" .  htmlspecialchars($formatted_date) . "</td>
<td><span class=\"status process\">" . htmlspecialchars($row['stars']) . " stars</span></td>
</tr>";
$reviews .= "
<ul class=\"todo-list\">
<li class=\"completed\">
<p>" . htmlspecialchars($row['reviews']) . "</p>
<!-- <i class='bx bx-dots-vertical-rounded'></i> -->
</li>
</ul>
";

}     

$username = $_SESSION['username'];
$email = $_SESSION['email'];
$id = $_SESSION["id"];
$number = $_SESSION["number"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the textarea content is set
    if(isset($_POST['textarea_content'])) {
        $content = $_POST['textarea_content'];
        // Prepare and execute the INSERT query
        $query = "INSERT INTO review (username, food, stars, reviews) 
      VALUES ('tintwalo', 'burger', 4, '$content')";

        if ($con->query($query) === TRUE) {
            echo "Review posted successfully";
        } else {
            echo "Error posting review: " . $con->error;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Boxicons -->
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <!-- font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<!-- My CSS -->
	<link rel="stylesheet" href="style.css">
    <link rel="icon" href="images/happy-alt-regular-24.png" type="image/x-icon">

    <script>
        function logout() {
            window.location.href = "logIn.php";
        }
    </script>

	<title>CourseFinder</title>
</head>
<body>
	<!-- SIDEBAR -->
	<section id="sidebar">
		<a href="#" class="brand">
			<i class='bx bxs-happy'></i>
			<span class="text">CourseFinder</span>
		</a>
		<ul class="side-menu top">
			<li class="active" id="home_page">
				<a href="#">
					<i class='bx bxs-home' ></i>
					<span class="text">Home</span>
				</a>
			</li>
			<li id="add_page">
				<a href="#">
					<i class='bx bxs-folder-plus' ></i>
					<span class="text">Add subjects</span>
				</a>
			</li>
			<li id="dashboard_page">
				<a href="#">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</li>
			<li id="settings_page">
				<a href="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</a>
			</li>
            <li id="profile_page">
				<a href="#">
					<i class='bx bxs-user-circle' ></i>
					<span class="text">profile</span>
				</a>
			</li>
		</ul>
		<ul class="side-menu">
			
		</ul>
	</section>

    <!-- contents -->
	<section id="content">
		<nav>
			<i class='bx bx-menu' ></i>
			<a href="#" class="nav-link">Categories</a>
			<form action="#" id="search" name="search-btn">
				<div class="form-input">
					<input type="search" id="search_university_input" placeholder="Search universities...">
					<button  class="search-btn"><i class='bx bx-search' ></i></button>
				</div>
			</form>
            <div id="universities_search_container">
                <ul id="universities_search">
                    
                  </ul>
                  
            </div> 
			<input type="checkbox" id="switch-mode" hidden>
			<label for="switch-mode" class="switch-mode"></label>
			<a href="#" class="notification" id="notification-body">
				<i class='bx bxs-bell' ></i>
				<span class="num">1</span>
			</a>
            <div id="notification_body_content" class="notification_body_content">
                <div class="notification_header">
                    <p>notification</p>
                </div>
                <div class="notification_body">
                    <p>you have enabled now you can view notifications here</p>
                </div>
            </div>
		</nav>
		<!-- NAVBAR -->
		<!-- MAIN -->
		<main id="dashboard">
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>
					<ul class="breadcrumb">
					</ul>
				</div>
			</div>

			<ul class="box-info">
				<li>
					<i class='bx bxs-user-account' ></i>
					<span class="text">
						<h3><?php echo $number;?></h3>
						<p>accounts</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-user-minus' ></i>
					<span class="text">
						<h3><?php echo $id - $number;?></h3>
						<p>Deleted accounts</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3><?php echo $id;?></h3>
						<p>Overrall visitors</p>
					</span>
				</li>
			</ul>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Ratings</h3>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>User</th>
								<th>Date</th>
								<th>Stars</th>
							</tr>
						</thead>
						<tbody>
                        <?php echo $ratings;?>
						</tbody>
					</table>
				</div>
				<div class="todo">
					<div class="head">
						<h3>Reviews</h3>
					</div>
					<?php echo $reviews;?>
				</div>
			</div>
		</main>
        <main id="home">
            <section class="home_universty" id="home_contents">
                <section class="university_list_main" id="university_list_main">
                    <div class="section_list_university">
                </section>
            </section>
            <section class="uj_content universities" id="uj_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_uj">
                      <ul id="side_bar_course_list_uj">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-uj"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_uj" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_uj">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of johanesburg</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="wits_content universities" id="wits_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_wits">
                      <ul id="side_bar_course_list_wits">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-wits"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_wits" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_wits">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of witwatersrand</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="tut_content universities" id="tut_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_tut">
                      <ul id="side_bar_course_list_tut">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-tut"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_tut" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_tut">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>tshwane university of technology</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="smu_content universities" id="smu_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_smu">
                      <ul id="side_bar_course_list_smu">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-smu"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_smu" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_smu">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>sefako makgatho university</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="ul_content universities" id="ul_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_ul">
                      <ul id="side_bar_course_list_ul">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-ul"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_ul" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_ul">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of limpopo</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>            
            </section>
            <section class="univen_content universities" id="univen_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_univen">
                      <ul id="side_bar_course_list_univen">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-univen"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_univen" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_univen">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of venda</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="ump_content universities" id="ump_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_ump">
                      <ul id="side_bar_course_list_ump">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-ump"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_ump" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_ump">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of mpumalanga</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="uct_content universities" id="uct_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_uct">
                      <ul id="side_bar_course_list_uct">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-uct"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_uct" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_uct">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of capetown</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="su_content universities" id="su_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_su">
                      <ul id="side_bar_course_list_su">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-su"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_su" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_su">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of stellenborsh</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="uwc_content universities" id="uwc_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_uwc">
                      <ul id="side_bar_course_list_uwc">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-uwc"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_uwc" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_uwc">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of werstencape</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="cput_content universities" id="cput_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_cput">
                      <ul id="side_bar_course_list_cput">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-cput"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_cput" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_cput">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>cape peninsula university of technology</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="spu_content universities" id="spu_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_spu">
                      <ul id="side_bar_course_list_spu">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-spu"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_spu" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_spu">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>sol platjie university</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="ru_content universities" id="ru_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_ru">
                      <ul id="side_bar_course_list_ru">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-ru"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_ru" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_ru">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>rhodes university</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="nmu_content universities" id="nmu_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_nmu">
                      <ul id="side_bar_course_list_nmu">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-nmu"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_nmu" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_nmu">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>nelson mandela university</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="wsu_content universities" id="wsu_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_wsu">
                      <ul id="side_bar_course_list_wsu">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-wsu"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_wsu" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_wsu">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>walter sisulu university</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="ufh_content universities" id="ufh_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_ufh">
                      <ul id="side_bar_course_list_ufh">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-ufh"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_ufh" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_ufh">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of forthare</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="ukzn_content universities" id="ukzn_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_ukzn">
                      <ul id="side_bar_course_list_ukzn">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-ukzn"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_ukzn" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_ukzn">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of kwa-zulu-natal</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="dut_content universities" id="dut_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_dut">
                      <ul id="side_bar_course_list_dut">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-dut"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_dut" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_dut">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>durbun university of technology</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="mut_content universities" id="mut_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_mut">
                      <ul id="side_bar_course_list_mut">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-mut"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_mut" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_mut">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>mangosuthu university of technology</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="ufs_content universities" id="ufs_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_ufs">
                      <ul id="side_bar_course_list_ufs">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-ufs"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_ufs" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_ufs">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of free-state</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="nwu_content universities" id="nwu_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_nwu">
                      <ul id="side_bar_course_list_nwu">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-nwu"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_nwu" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_nwu">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>north west university</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="cut_content universities" id="cut_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_cut">
                      <ul id="side_bar_course_list_cut">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-cut"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_cut" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_cut">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>central university of technology</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="vut_content universities" id="vut_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_vut">
                      <ul id="side_bar_course_list_vut">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-vut"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_vut" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_vut">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>vaal university of technology</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="unisa_content universities" id="unisa_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_unisa">
                      <ul id="side_bar_course_list_unisa">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-unisa"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_unisa" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_unisa">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of south africa</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
            <section class="saut_content universities" id="saut_contents">
                <section class="uj_details">
                    <div class="sidebar" id="side_bar_saut">
                      <ul id="side_bar_course_list_saut">
                        </ul>
                    </div>
                    <div class="body_details" id="scrolll">
                        <div class="back-icon">
                            <a id="btn-close-saut"><i class="fa-solid fa-arrow-left"></i></a>
                        </div>
                        <div class="show-icon">
                            <a id="btn-show-uj"><i id="icon_slide_saut" class="fa-solid fa-sliders"></i></i></a>
                        </div>
                        <div class="course_details_container" id="course_details_container_saut">
                            <div class="course-details" id="course-details">
                                <div class="heading-course-detail">
                                    <h1></h1>
                                </div>
    
                                
                            </div>
                            <div class="university_course_name">
                                <div class="heading_div">
                                    university name
                                </div>
                                <div class="sub_heading_div">
                                    <p>university of pretoria</p>
                                </div>
                
                            </div>
                            <div class="university_course_details">
                                <div class="heading_div">
                                    details
                                </div>
                                <div class="sub_heading_div">
                                    <p>programme name: B ARCHITECTURE</p>
                                    <p>Qualification code: B8BA3Q</p>
                                    <p>Faculty:ARTS AND CULTURE</p>
                                </div>
                    
                            </div>
                            <div class="university_course_degree">
                                <div class="heading_div">
                                    degree
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bachelor Degree (3 years)</p>
                                </div>
                    
                            </div>
                            <div class="university_course_requirements">
                                <div class="heading_div">
                                    requirements
                                </div>
                                <div class="sub_heading_div">
                                    <p>Bminimum aps: 30+</p>
                                    <p>english: 5</p>
                                    <p>mathemaitcs: 5</p>
                                    <p>techninical mathematics: none</p>
                                    <p>mathematical literacy: 5</p>
                                </div>
                            </div>
                            <div class="university_course_description">
                                <div class="heading_div">
                                    career description
                                </div>
                                <div class="sub_heading_div">
                                    <p>Architectural professionals are involved in shaping our built environment, from the simple construction of low-cost housing projects to the most sophisticated technology employed in the erection of skyscrapers. Architectural professionals are thus employed in the design, technological resolution and management of the design and construction process of buildings.
                                    </p>
                                </div>
                    
                            </div>
                        </div>      
                      </div>
                  </section>
            </section>
        </main>
        <main id="add">
            <div class="head-title">
                <div class="left">
                    <h1>Add subjects</h1>
                    <ul class="breadcrumb">
                    </ul>
                </div>
            </div>
            <div class="result_status">
        
                <div class="card card1">
                    <div class="options">
                        <label for="itemSelect">Select a subject:</label><br>
                        <select id="itemSelect">
                            <optgroup label="Languages">
                                <option value="Afrikaans">Afrikaans</option>
                                <option value="English">English</option>
                                <option value="Sepedi">Sepedi</option>
                                <option value="Sesotho">Sesotho</option>
                                <option value="Setswana">Setswana</option>
                                <option value="Siswati">Siswati</option>
                                <option value="Tshivenda">Tshivenda</option>
                                <option value="IsiNdebele">IsiNdebele</option>
                                <option value="IsiXhosa">IsiXhosa</option>
                                <option value="IsiZulu">IsiZulu</option>
                                <option value="Xitsonga">Xitsonga</option>
                            </optgroup>
                            <optgroup label="Non-Languages">
                                <option value="Mathematics">Mathematics</option>
                                <option value="Accounting">Accounting</option>
                                <option value="Geography">Geography</option>
                                <option value="Economics">Economics</option>
                                <option value="Mathematical Literacy">Mathematical Literacy</option>
                                <option value="Physical Science">Physical Science</option>
                                <option value="Business Studies">Business Studies</option>
                                <option value="Agricultural Science">Agricultural Science</option>
                                <option value="Consumer Studies">Consumer Studies</option>
                                <option value="Computer Application Technology">Computer Application Technology</option>
                                <option value="History">History</option>
                            </optgroup>
                        </select>
                        <select type="number" id="quantityInput" placeholder="Level" min="1" max="7">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select><br>
                        <button id="addButton" style="margin-bottom: 5px;">Add Subject</button>
                        <hr>
                        
                    </div>
                    <div id="selectedOptions"></div>
                    <div id="aggregateValue" class="aggregate"></div>
                    <button id="updateButton" class="update-btn">Update</button>
                </div>
            
                <div class="card card2">
                    <div id="displayedOptions"></div>
                    <button id="update_btn">UPDATE RESULTS</button>
                    </div>
            </div>
        </main>
        <main id="settings">
            <div class="head-title">
				<div class="left">
					<h1>Settings</h1>
					<ul class="breadcrumb">
					</ul>
				</div>
			</div>
            <div class="settingsmenu">
                <a href="#notication" id="notifications">notifications</a>
                <a href="#support" id="support">support</a>
                <a href="#about" id="about">About</a>
                <a href="#rateus" id="rateus">Rate us</a>
              </div>
              <div class="settingcontent">
                <div class="notifications" id="notification_body">
                    <div class="main_notification">
                        <label class="switch">
                            <input type="checkbox" id="main_notification">
                            <span class="slider round"></span>
                          </label>
                          <p>Enable Nofication</p>
                    </div>
                    <p class="notification_type_p">notification types</p>
                    <div class="main_notification">
                        <label class="switch">
                            <input type="checkbox" id="daily_notification">
                            <span class="slider round"></span>
                          </label>
                          <p>Daily Nofication</p>
                    </div>
                    <div class="main_notification">
                        <label class="switch">
                            <input type="checkbox" id="updates_nofication">
                            <span class="slider round"></span>
                          </label>
                          <p>Updates</p>
                    </div>
                    <div class="main_notification">
                        <label class="switch">
                            <input type="checkbox" id="critical_notification">
                            <span class="slider round"></span>
                          </label>
                          <p>Critical Nofication</p>
                    </div>
                </div>
                <div class="support" id="support_body">
                    <div class="chatbox-wrapper">
                        <div class="chatbox-toggle">
                            <i class='bx bx-message-dots'></i>
                        </div>
                        <div class="chatbox-message-wrapper">
                            <div class="chatbox-message-header">
                                <div class="chatbox-message-profile">
                                    <div>
                                        <h4 class="chatbox-message-name">Support chatbox</h4>
                                        <p class="chatbox-message-status">online</p>
                                    </div>
                                </div>
                                <div class="chatbox-message-dropdown">
                                    <i class='bx bx-dots-vertial-rounded chatbox-message-dropdown-toggle'></i>
                                    
                                </div>
                            </div>
                            <div class="chatbox-message-content">
                                <h4 class="chatbox-message-no-message">Report a problem here!</h4>
                                <!-- <div class="chatbox-message-item sent">
                                    <span class="chatbox-message-item-text">
                                        Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Quod, fugiat?
                                    </span>
                                    <span class="chatbox-message-item-time">08:30</span>
                                </div>
                                <div class="chatbox-message-item received">
                                    <span class="chatbox-message-item-text">
                                        Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Quod, fugiat?
                                    </span>
                                    <span class="chatbox-message-item-time">08:30</span>
                                </div> -->
                            </div>
                            <div class="chatbox-message-bottom">
                                <form action="#" class="chatbox-message-form">
                                    <textarea rows="1" placeholder="Type message..." class="chatbox-message-input" id="chatbox-message-input"></textarea>
                                    <button type="submit" class="chatbox-message-submit"><i class='bx bx-send' ></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about" id="about_body">
                    <div class="footer_description">
                        <p>Course finder is optimized for viewing of course. 
                            and calculate courses that you quaify according to your grade 11 APScore or Final matric result
                            </p><p>Copyright &copy; 2024 Varsity App</p>
                    </div>
                    <div class="social_media">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="rate" id="rate_body">
                    <div class="container_widget">
                        <div class="post_button" id="post_button">
                            <div class="thanks_msg">thanks for rating us</div>
                            <div class="editrate" id="editrate">EDIT</div>
                        </div>
                        <div class="star-widget" id="star-widget">
                            <input type="radio" name="rates" id="rate-5">
                            <label for="rate-5" class="fas fa-star"></label>
                            <input type="radio" name="rates" id="rate-4">
                            <label for="rate-4"class="fas fa-star"></label>
                            <input type="radio" name="rates" id="rate-3">
                            <label for="rate-3" class="fas fa-star"></label>
                            <input type="radio" name="rates" id="rate-2">
                            <label for="rate-2" class="fas fa-star"></label>
                            <input type="radio" name="rates" id="rate-1">
                            <label for="rate-1" class="fas fa-star"></label>
                            <form method="post" action="index.php">
                                <div class="textarea_stars">
                                    <textarea cols="30" name="textarea_content" id="textarea_stars" placeholder="Your opinion..."></textarea>
                                </div>
                                <div class="submit_stars">
                                    <button type="submit" id="submit_rate">post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <main id="profile">
            <div class="head-title">
                <div class="left">
                    <h1>profile</h1>
                    <ul class="breadcrumb">
                    </ul>
                </div>
            </div>
            <div class="basic_info">
                <p>basic info</p>
                <div class="username">
                    <div class="changeuserinfo" id="changeusernamepage">
                        <input type="text" id="changeusernameinput">
                        <button id="changeusernamebutton">change</button>
                        <button id="cancelusernamepage">cancel</button>
                    </div>
                    <div class="showuserinfo" id="showusername">
                        <p>username: <br><span id="changeusernamevalue"><?php echo $username;?></span></p>
                        <button id="changeusername">edit</button>
                    </div>
                </div>
                <div class="email">
                    <div class="changeuserinfo" id="changeuseremailpage">
                        <input type="text" id="changeuseremailinput">
                        <button id="changeuseremailbutton">change</button>
                        <button id="canceluseremailpage">cancel</button>
                    </div>
                    <div class="showuserinfo" id="showuseremail">
                        <p>email: <br><span id="changeuseremailvalue"><?php echo $email; ?></span></p>
                        <button id="changeuseremail">edit</button>
                    </div>
                </div>
            </div>
            <div class="password_info">
                <p>password</p>
                <div class="password">
                    <div class="changepasswordinfo" id="changepasswordpage">
                        <p>Enter old password</p>
                        <input type="text" id="changepasswordnput1">
                        <p for="">Enter new password</p>
                        <input type="text" id="changepasswordnput2">
                        <p for="">Repeat new password</p>
                        <input type="text" id="changepasswordnput3">
                        <div class="passwordbutton">
                            <button id="changepasswordbutton">change</button>
                            <button id="cancelpasswordpage">cancel</button>
                        </div>
                    </div>
                    <div id="changepassword">
                        <p>change password</p>
                        <button id="passwordbutton">change</button>
                    </div>
                </div>
            </div>
            <div class="logout">
                <button onclick="logout()">logout</button>
                <button onclick="logout()">delete account</button>
            </div>
        </main>
		<!-- MAIN -->
	</section>
	<!-- CONTENT -->
	

	<script src="script.js" type="module"></script>
</body>
</html>