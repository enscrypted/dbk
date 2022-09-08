<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Designs by Ken</title>
<link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_directory'); ?>/personal.css">
<?php wp_head();?>
</head>
<body>
	
	
	<div id="header" class="hide-desktop">
		<div id="title">
			<h1><a href="<?php echo get_bloginfo( 'wpurl' );?>"><?php echo get_bloginfo( 'name' ); ?></a></h1>
		</div>
		<div id="menu-list">
			<ul id="list">
				<?php wp_list_pages( '&title_li=' ); ?>
			</ul>
		</div>
	</div>
	<div id="m-header" class="hide-mobile">
		<div class="container" onclick="myFunction(this);">
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
		</div>
		<div id="m-title">
			<h1><a href="<?php echo get_bloginfo( 'wpurl' );?>"><?php echo get_bloginfo( 'name' ); ?></a></h1>
		</div>
		<div id="mySidenav" class="sidenav" style="width: 0">
			<?php wp_list_pages( '&title_li=' ); ?>
		</div>
	</div>
	</div>
	<span class="hide-desktop"><div id="space"></div></span>